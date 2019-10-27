---
title: Writing Generic Container Functions in C++11
author: Shital Shah
type: post
date: 2016-06-05T09:24:38+00:00
url: /p/writing-generic-container-function-in-c11/
dsq_thread_id:
  - 4885123686
categories:
  - Uncategorized

---
Let's say we want to write function to append one vector to another. It can be done like,

<pre class="code-block"><code>template&lt;typename T&gt;
void append(Vector&lt;T&gt;& to, const Vector&lt;T&gt;& from)
{
    to.insert(to.end(), from.begin(), from.end());
}
</code></pre>

One problem with this approach is that we can only use this function with Vector. So what about all other container types? In languages such as C#, we have IEnumerable<T> that simplifies lot of things but with C++ templates are duck typed and it takes bit more to make above function generic for various container types. Another quick and dirty route is this:

<pre class="code-block"><code>template&lt;typename Container&gt;
void append(Container& to, const Container& from)
{
    to.insert(to.end(), from.begin(), from.end());
}
</code></pre>

The problem with this approach is that any class with begin() and end() will now qualify for this call. In fact, just in case someone has class with these methods which actually isn't implemented as iterator, you can get some nasty surprises. A simple modification is to make sure we call begin() and end() from std namespace instead of the ones defined on class:

<pre class="code-block"><code>template&lt;typename Container&gt;
void append(Container& to, const Container& from)
{
    using std::begin;
    using std::end;
    to.insert(end(to), begin(from), end(from));
}
</code></pre>

Sure, this is better but wouldn't it be nice if can we restrict the types passed on to this function to only those which strictly behaves like STL containers? Enter type traits! First, we need to define SFINAE type trait for containers. Fortunately Louis Delacroix who developed [prettyprint library][1] has already fine tuned this code extensively. Below is mostly his code with a my slight modification that allows to pass it through GCC strict mode compilation. This is lot of code so I would usually put this in a separate file, say, type_utils.hpp, so you can use it for many generic container methods:

<pre class="code-block"><code>#ifndef commn_utils_type_utils_hpp
#define commn_utils_type_utils_hpp

#include &lt;type_traits&gt;
#include &lt;valarray&gt;

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

        template &lt;typename T&gt;
        struct has_const_iterator : private sfinae_base
        {
        private:
            template &lt;typename C&gt; static yes & test(typename C::const_iterator*);
            template &lt;typename C&gt; static no  & test(...);
        public:
            static const bool value = sizeof(test&lt;T&gt;(nullptr)) == sizeof(yes);
            using type =  T;

            void dummy(); //for GCC to supress -Wctor-dtor-privacy
        };

        template &lt;typename T&gt;
        struct has_begin_end : private sfinae_base
        {
        private:
            template &lt;typename C&gt;
            static yes & f(typename std::enable_if&lt;
                std::is_same&lt;decltype(static_cast&lt;typename C::const_iterator(C::*)() const&gt;(&C::begin)),
                             typename C::const_iterator(C::*)() const&gt;::value&gt;::type *);

            template &lt;typename C&gt; static no & f(...);

            template &lt;typename C&gt;
            static yes & g(typename std::enable_if&lt;
                std::is_same&lt;decltype(static_cast&lt;typename C::const_iterator(C::*)() const&gt;(&C::end)),
                             typename C::const_iterator(C::*)() const&gt;::value, void&gt;::type*);

            template &lt;typename C&gt; static no & g(...);

        public:
            static bool const beg_value = sizeof(f&lt;T&gt;(nullptr)) == sizeof(yes);
            static bool const end_value = sizeof(g&lt;T&gt;(nullptr)) == sizeof(yes);

            void dummy(); //for GCC to supress -Wctor-dtor-privacy
        };

    }  // namespace detail

    // Basic is_container template; specialize to derive from std::true_type for all desired container types

    template &lt;typename T&gt;
    struct is_container : public std::integral_constant&lt;bool,
                                                        detail::has_const_iterator&lt;T&gt;::value &&
                                                        detail::has_begin_end&lt;T&gt;::beg_value  &&
                                                        detail::has_begin_end&lt;T&gt;::end_value&gt; { };

    template &lt;typename T, std::size_t N&gt;
    struct is_container&lt;T[N]&gt; : std::true_type { };

    template &lt;std::size_t N&gt;
    struct is_container&lt;char[N]&gt; : std::false_type { };

    template &lt;typename T&gt;
    struct is_container&lt;std::valarray&lt;T&gt;&gt; : std::true_type { };

    template &lt;typename T1, typename T2&gt;
    struct is_container&lt;std::pair&lt;T1, T2&gt;&gt; : std::true_type { };

    template &lt;typename ...Args&gt;
    struct is_container&lt;std::tuple&lt;Args...&gt;&gt; : std::true_type { };

}}	//namespace
#endif
</code></pre>

Now you can use these traits to enforce what types gets accepted in to your generic function:

<pre class="code-block"><code>#include "type_utils.hpp"

template&lt;typename Container&gt;
static typename std::enable_if&lt;type_utils::is_container&lt;Container&gt;::value, void&gt;::type
append(Container& to, const Container& from)
{
    using std::begin;
    using std::end;
    to.insert(end(to), begin(from), end(from));
}</code></pre>

Much better!

 [1]: http://louisdx.github.io/cxx-prettyprint/