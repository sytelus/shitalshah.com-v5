# ShitalShah.com v5

## Installing Hugo

Currently, Hugo 0.146 is incompatible and the theme hasn't been updated to it, so install 0.145:

```bash
HUGO_VERSION=0.145.0
curl -L -o /tmp/hugo.tar.gz \
  "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz"
tar -xzf /tmp/hugo.tar.gz -C /tmp hugo
install -m 755 /tmp/hugo "$HOME/.local/bin/hugo"
hugo version
```


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

## How to write content

Content goes in `content/blog/`.

### If Post has Images or Other Files

For posts with images/files,

1. Create a folder with the same name as file without extension in one of the below approaches.
2. Move `.md` file in the folder and rename it to `index.md`.
3. Put all images/files in the post folder.

### Hugo Approach

Run the command:

```bash
hugo new content blog/my-new-post.md
```

This will create file `my-new-post.md` in folder `content/blog`. Append `YYYY-MM-dd-` to file name for consistency.

### Manual Approach

Create `.md` file and use markdowndown format ([sample](https://jpanther.github.io/congo/samples/markdown/), [sample markdown](https://raw.githubusercontent.com/jpanther/congo/refs/heads/dev/exampleSite/content/samples/markdown/index.md)). Note that the start of the markdown is called [front matter](https://jpanther.github.io/congo/docs/front-matter/) where all the post metadata goes. You can copy initial content from `archetypes/blog.md` template.

### Tips

To insert figures, charts etc:

```html
{{< figure src="festivities.svg" class="m-auto mt-6 max-w-prose" >}}
```

To insert image:

```html
![Image alt string](image.png)
```

[More about images](https://gohugo.io/content-management/image-processing/)

To insert tweet:

```html
{{< tweet user="sytelus" id="1714557767250489783" >}}
```

To add url,

```html
<https://some.url>
```

To add YouTube:

```html
{{< youtube ZJthWmvUzzc >}}
```

### References

* [Page Resources](https://gohugo.io/content-management/page-resources/)
* [Other docs](https://jpanther.github.io/congo/docs/)
* [Shorcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes)

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

Reference:

* [Congo Configulation](https://jpanther.github.io/congo/docs/configuration/)

## How to update content

1. Make changes in content directory by adding/updating md file(s).
2. Run `./view.sh` to preview the changes. You can additionally pass `-D --watch --poll 10000 --disableFastRender`. This will show draft changes due to `-D` switch which won't be published and suppress i18n warnings if any. The `--poll` is only needed if working on `/mnt` in WSL. Most of the time `--disableFastRender` is not really needed.
3. If everything looks good, run `./deploy.sh` command which will generate static pages in public folder which is already mapped to GitHub Pages repo.
4. Commit and push the changes in `public` and then in main repo:

    ```bash
    # switch to public
    pushd public
    git add .
    git commit -m "deployment"
    git push

    # back to main
    popd
    git add .
    git commit -m "deployment"
    git push
    ```

References:

* [Hugo with GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/)

## TODOs

* Enable disqus
* Enable tags in menu
* Fix page content links, images
* Move twitter posts
* Restore from archived posts
