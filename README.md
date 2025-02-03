# ShitalShah.com v5

## How to recreate this website

Note: Install Hugo in linux or wsl using snap (don't use anything else because they have old versions).

```bash
hugo new site shital
cd shitalshah.com-v
git init
# see https://stackoverflow.com/a/79408066/207661
git submodule add -b stable https://github.com/sytelus/congo.git themes/congo
```

## How to update theme

See if submodule has new commits:

```bash
git submodule status
```

Update the submodules:

```bash
# from repo root folder
git submodule update --remote
git add themes/congo
git commit -m "Updated theme"
git push origin master
```

## How to update content

1. Make changes in content directory by adding/updating md file(s).
2. Run `hugo server -D --watch --poll 10000 --disableFastRender` to preview the changes. This will show draft changes due to `-D` switch which won't be published and suppress i18n warnings if any. The `--poll` is only needed if working on `/mnt` in WSL. Most of the time `--disableFastRender` is not really needed.
3. If everything looks good, run `bash deploy.sh` command which will generate static pages in public folder which is already mapped to GitHub Pages repo.
4. Commit the changes in `public` submodule (visible in VSCode source control).5. Commit `master` in main repo. The website should be upto date in a minute.

## TODOs

- Enable disqus
- Enable tags in menu
- Fix page content links, images
- Move twitter posts
- Restore from archived posts
