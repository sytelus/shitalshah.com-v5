---
title: 'Git Workflow: Branch - Rebase - Squash - Merge'
author: Shital Shah
date: 2017-02-26T09:16:43+00:00
slug: git-workflow-branch-rebase-squash-merge
dsq_thread_id:
  - 5585335276
tags:
  - Developers

---
So you want to make a change to your git repo while other people may also be simultaneously working on the same repo. As it takes you longer to make your changes, there is a greater chance that your local repo might already be out of date as other people have pushed their changes. In this setting, you don't want to make your changes directly in master because otherwise you might end up creating large merge commits which makes your repo's history convoluted and not very nice.

Here's the better git workflow you might want to use in any team of size > 1.

Before you make changes, create a branch.

```bash
git checkout -b MyFeature
```

Next make changes, do commits as usual.

If you don't want to rely on your hard drive, you can also keep pushing the changes in your branch on the server every once in a while,

```bash
git push -u origin MyFeature
```

Once you are done with all your changes, first you want to rebase your branch to master. If master has no new changes since you had created your branch, this will be essentially be no-op. But otherwise, git will take all your commits and play them back on the top of master. This way your commits will look like as if they happened on latest version of master instead of the version you branched out from. This will make commit history of your repo clean and easy to reason about. If you were the only developer, this might not be very important but if there is more than just you then it makes easy to see for other people changes every one is making.

To do rebase, first get latest master.

```bash
git checkout master
git pull origin master
```

Then go back to your branch and rebase, i.e.,

```bash
git checkout Myfeature
git rebase master
```

If you are lucky, you won't see the word "conflict" in git messages but otherwise there is more work for you! If someone already changed file sections you have also changed then you might see list of conflicts. If you get lost in too many messages, use this command to see pending conflicts:

```bash
git diff --name-only --diff-filter=U
```

Now about resolving conflicts... there are lots of tools out there and most unfortunately have some problem/confusion installing or using. If you absolutely want GUI tool, install [DiffMerge][1], make sure its in your path and invoke it like,

```bash
git mergetool -t diffmerge .
```

However my preferred method is to simply open up conflicted file in editor, search for ">>>" and review sections that looks like:

```bash
<<<<<<< HEAD
This is change in master
=======
This is change in your branch
>>>>>>> branch-a
```

Now keep the change you want, delete the markers and you are done with that conflict. Another shortcut is to just tell git to take master's version ("ours") or your branch's version("theirs"). For example, to resolve all conflicts by overriding using your changes:

```bash
git checkout . --theirs
```

Another tricky conflict is when file gets deleted by one person and simultaneously changed by you or vice versa. In this case, git will put a deleted file back in your repo and you have to decide either keep that one and/or remove/update your version. You won't have markers this time like above. I tend to use tool like Beyond Compare to compare two files and make edits as needed.

To tell git that you have resolved all conflict,

```bash
git add .
```

Now you can continue with your rebase,

```bash
git rebase --continue
```

If you don't want to continue because of whatever reason,

```bash
git rebase --abort
```

Sometime git might error out while doing continue because there is nothing to commit (may be it detected that the change already exists upstream). In that case you can do,

```bash
git rebase --skip
```

At this point, your changes are now on the top of latest master. You can verify this by looking at quick history of latest 10 commits,

```bash
git log --pretty=oneline -n 10
```

Note that everything still reside in your own branch. If you are not yet ready to push to master, keep working in your branch doing more commits as you go. After rebase if you want to save your branch on server, you must do --force because you are rewriting history.

```bash
git push --force origin Myfeature
```

This is perfectly fine as long as you are the only one working on the branch.

Once you are ready to push, first merge your branch with master,

```bash
git checkout master
git merge --squash MyFeature
```

This shouldn't give any errors or conflict messages because your branch was already synced up to latest master. The --squash tells git to combine all your commit in to single commit. This is good idea most of the time if you have done lots of commits like "added forgotten file", "fixed minor typo" and so on. It's too much noise and not nice to other people for having to scroll through tons of minor commits to figure out your higher level goals. However its also ok if you don't want --squash option.

Finally do the commit after the merge,

```bash
git commit -m "MyFeature does X"
```

If you did --squash above then you will see only one commit in your history at the top of previous commits with above message.

At this point, you can decide to push your changes to master OR move your changes to new branch and keep working. To move to new branch and revert master to original state,

```bash
git checkout -b MyFeature2
git checkout master
git reset --hard origin/master
```

OR if you are happy, go ahead and

```bash
git push
```

In either case you can delete the old branch,

```bash
git push origin -delete MyFeature
git branch -d MyFeature
```

And you are done!

As usual, there are many ways to do things in git. There is another quicker and simpler way to achieve goal of clean history but its bit limited.

Make your changes in master, do commits as usual - but don't push. Once in a while you want to sync up with master. To do this use,

```bash
git pull --rebase
```

This will get all changes from master and then play back your unpushed commits on the top of them. This may generate conflicts as described above so resolve them in same way. Once you are done with your changes, you can push your commits and they should appear on the top without extra merge commits. An obvious problem here is that you can't push until you are really done with changes so this might be ok for quick short changes. If you want to "save" your commits on server or work from multiple machines for multiple days without pushing to master then above workflow would work better.

 [1]: https://sourcegear.com/diffmerge/