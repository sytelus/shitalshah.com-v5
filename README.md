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

### Template Customizations

* All of the *.toml from theme's `config/_default` is copied to `config/_default` and customized.
* The `config.tom` is added with custom param `params.sitever` to save site version.
* The`layouts/partials` in site directory overrides files in theme's `layouts` folder. Currently, only `footer.html` is the override and only change in there is to add copyright year and sitever. If `footer.html` changes in original theme then we need to sync override file.
* The `assets/css/custom.css` added to increase font size.
* The `static/_headers` is added to allow cross domain call to `index.json` so that search works when calling from `www.domain.com` instead of `domain.com`.

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
4. Commit and push the changes in `public` and then in main repo:

    ```bash
    pushd public
    git commit -m "deployment"
    git push
    popd
    git commit -m "deployment"
    git push
    ```



## TODOs

- Enable disqus
- Enable tags in menu
- Fix page content links, images
- Move twitter posts
- Restore from archived posts
