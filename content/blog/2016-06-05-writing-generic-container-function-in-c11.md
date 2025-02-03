---
title: Writing Generic Container Functions in C++11
author: Shital Shah
date: 2016-06-05T09:24:38+00:00
slug: writing-generic-container-function-in-c11
dsq_thread_id:
  - 4885123686
tags:
  - Uncategorized

---
Let's say we want to write function to append one vector to another. It can be done like,

```cpp
template<typename T>
void append(Vector<T>& to, const Vector<T>& from)
{
    to.insert(to.end(), from.begin(), from.end());
}
```

One problem with this approach is that we can only use this function with Vector. So what about all other container types? In languages such as C#, we have IEnumerable<T> that simplifies lot of things but with C++ templates are duck typed and it takes bit more to make above function generic for various container types. Another quick and dirty route is this:

```cpp
template<typename Container>
void append(Container& to, const Container& from)
{
    to.insert(to.end(), from.begin(), from.end());
}
```

The problem with this approach is that any class with begin() and end() will now qualify for this call. In fact, just in case someone has class with these methods which actually isn't implemented as iterator, you can get some nasty surprises. A simple modification is to make sure we call begin() and end() from std namespace instead of the ones defined on class:

```cpp
template<typename Container>
void append(Container& to, const Container& from)
{
    using std::begin;
    using std::end;
    to.insert(end(to), begin(from), end(from));
}
```

Sure, this is better but wouldn't it be nice if can we restrict the types passed on to this function to only those which strictly behaves like STL containers? Enter type traits! First, we need to define SFINAE type trait for containers. Fortunately Louis Delacroix who developed [prettyprint library][1] has already fine tuned this code extensively. Below is mostly his code with a my slight modification that allows to pass it through GCC strict mode compilation. This is lot of code so I would usually put this in a separate file, say, type_utils.hpp, so you can use it for many generic container methods:

```cpp
#ifndef commn_utils_type_utils_hpp
#define commn_utils_type_utils_hpp

#include <type_traits>
#include <valarray>

namespace common_utils { namespace type_utils {
	//from: https://raw.githubusercontent.com/louisdx/cxx-prettyprint/master/prettyprint.hpp
	//also see https://gist.github.com/louisdx/1076849
    namespace detail
    {
        // SFINAE type trait to detect whether T::const_iterator exists.

        struct sfinae_base
        {
            using yes = char;
            using no  = yes[2];
        };

        template <typename T>
        struct has_const_iterator : private sfinae_base
        {
        private:
            template <typename C> static yes & test(typename C::const_iterator*);
            template <typename C> static no  & test(...);
        public:
            static const bool value = sizeof(test<T>(nullptr)) == sizeof(yes);
            using type =  T;

            void dummy(); //for GCC to supress -Wctor-dtor-privacy
        };

        template <typename T>
        struct has_begin_end : private sfinae_base
        {
        private:
            template <typename C>
            static yes & f(typename std::enable_if<
                std::is_same<decltype(static_cast<typename C::const_iterator(C::*)() const>(&C::begin)),
                             typename C::const_iterator(C::*)() const>::value>::type *);

            template <typename C> static no & f(...);

            template <typename C>
            static yes & g(typename std::enable_if<
                std::is_same<decltype(static_cast<typename C::const_iterator(C::*)() const>(&C::end)),
                             typename C::const_iterator(C::*)() const>::value, void>::type*);

            template <typename C> static no & g(...);

        public:
            static bool const beg_value = sizeof(f<T>(nullptr)) == sizeof(yes);
            static bool const end_value = sizeof(g<T>(nullptr)) == sizeof(yes);

            void dummy(); //for GCC to supress -Wctor-dtor-privacy
        };

    }  // namespace detail

    // Basic is_container template; specialize to derive from std::true_type for all desired container types

    template <typename T>
    struct is_container : public std::integral_constant<bool,
                                                        detail::has_const_iterator<T>::value &&
                                                        detail::has_begin_end<T>::beg_value  &&
                                                        detail::has_begin_end<T>::end_value> { };

    template <typename T, std::size_t N>
    struct is_container<T[N]> : std::true_type { };

    template <std::size_t N>
    struct is_container<char[N]> : std::false_type { };

    template <typename T>
    struct is_container<std::valarray<T>> : std::true_type { };

    template <typename T1, typename T2>
    struct is_container<std::pair<T1, T2>> : std::true_type { };

    template <typename ...Args>
    struct is_container<std::tuple<Args...>> : std::true_type { };

}}	//namespace
#endif
```

Much better!

 [1]: http://louisdx.github.io/cxx-prettyprint/