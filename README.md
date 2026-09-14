# ShitalShah.com v5

## Installing Hugo

Two Hugo binaries are used, because the two themes need different versions:

* `hugo` = **0.145** for the Congo theme (the default). Congo has not been
  updated for the template system introduced in Hugo 0.146, so newer
  versions fail to build it.
* `hugo-latest` = the **latest** Hugo for the alternative `chain` theme
  (needs 0.146 or newer).

```bash
# Congo: pinned 0.145 as `hugo`
HUGO_VERSION=0.145.0
curl -L -o /tmp/hugo.tar.gz \
  "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz"
tar -xzf /tmp/hugo.tar.gz -C /tmp hugo
install -m 755 /tmp/hugo "$HOME/.local/bin/hugo"
hugo version

# chain: latest release as `hugo-latest`
HUGO_VERSION=$(curl -sL https://api.github.com/repos/gohugoio/hugo/releases/latest | grep -m1 '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/')
curl -L -o /tmp/hugo.tar.gz \
  "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz"
tar -xzf /tmp/hugo.tar.gz -C /tmp hugo
install -m 755 /tmp/hugo "$HOME/.local/bin/hugo-latest"
hugo-latest version
```

Make sure `~/.local/bin` is on `PATH`. `view.sh` accepts `HUGO_CONGO=…` and
`HUGO_LATEST=…` to point at preview binaries elsewhere. `deploy.sh` accepts
`HUGO_DEPLOY=…` to override its default `hugo` binary, but it never accepts a
theme override.

## Themes

The site can be built with either of two themes. Switching is configuration
only: no content changes, and the two themes never share files.

| | Congo (default) | chain |
|---|---|---|
| Theme folders | `themes/congo` (submodule) + `themes/congo-site` (this site's overrides) | `themes/chain` |
| Configuration | `config/_default/` | `config/_default/` + `config/chain/` merged on top |
| Hugo | `hugo` (0.145) | `hugo-latest` (>= 0.146) |
| Preview | `./view.sh` | `THEME=chain ./view.sh` |
| Deploy | `./deploy.sh` reads the production config | Preview only; change the production config before deploying |
| By hand | `hugo server` | `hugo-latest server --environment chain` |

How it is wired:

* `config/_default/config.toml` sets `theme = ["congo-site", "congo"]`.
  `themes/congo-site` is a tiny theme component holding what used to be the
  site-level `layouts/` and `assets/` overrides for Congo (footer with site
  version, article meta with the PDF link, Giscus comments, tweet shortcode,
  the 18pt `custom.css`). Moving them there means they apply only when Congo
  is active; the rendered output is byte-for-byte identical to before.
* `config/chain/` is a Hugo [configuration environment](https://gohugo.io/configuration/introduction/#configuration-directory).
  With `--environment chain` its files are merged over `config/_default/`
  (theme name, markup settings, menu, theme params). Nothing in
  `config/_default/` is chain-specific.
* `theme-env.sh` is sourced only by `view.sh` and maps `THEME` to the preview
  binary and arguments above.
* `deploy.sh` ignores `THEME` and forces Hugo's `production` environment. The
  deployed theme therefore always comes from the production configuration. It
  also cleans the destination so assets from a previously generated theme do
  not remain in `public/`.
* Documentation for the chain theme: `themes/chain/README.md` (maintenance)
  and `themes/chain/docs/DESIGN.md` (design rationale).

## How to recreate this website

Note: Install Hugo in linux or wsl using snap (don't use anything else because they have old versions).

```bash
hugo new site shital
cd shitalshah.com-v
git init
# see https://stackoverflow.com/a/79408066/207661
git submodule add -b stable https://github.com/sytelus/congo.git themes/congo
```

### Template Customizations (Congo)

* All of the *.toml from theme's `config/_default` is copied to `config/_default` and customized.
* The `config.toml` is added with custom param `params.sitever` to save site version.
* This site's overrides of Congo templates live in `themes/congo-site/layouts/` (a theme component listed before `congo` in `theme = [...]`, so it wins). Currently: `_default/list.html`, `_default/single.html`, `partials/article-meta.html` (adds the PDF link), `partials/footer.html` (copyright year and sitever), `partials/get-pdf.html`, `partials/recent-articles.html`, `partials/comments.html`, `shortcodes/tweet.html`. If one of these changes in the original theme then we need to sync the override file.
* `themes/congo-site/assets/css/custom.css` increases the font size; `assets/js/pdf-download.js` implements the PDF download.
* The `static/_headers` is added to allow cross domain call to `index.json` so that search works when calling from `www.domain.com` instead of `domain.com`.

### Comments (Giscus)

Comments are powered by [Giscus](https://giscus.app/), which uses GitHub Discussions as the backend. Comments are stored in the [sytelus/shitalshah.com-comments](https://github.com/sytelus/shitalshah.com-comments) repository.

**Key files:**

* `themes/congo-site/layouts/partials/comments.html` - Contains the Giscus embed script and exclusion logic (the chain theme has its own copy in `themes/chain/layouts/_partials/comments.html`)
* `themes/congo-site/layouts/_default/single.html` - Controls where comments appear in the page layout (after content, before sharing links)
* `config/_default/params.toml` - Global `showComments` setting under `[article]`

**Configuration:**

* Comments are enabled globally via `showComments = true` in `params.toml`
* Comments are automatically hidden for:
  * Draft posts (`draft: true` in front matter)
  * Private posts (`private: true` in front matter)
  * Posts in the `tweet/` subfolder
* Per-post override: Add `showComments: false` in front matter to disable for a specific post
* Theme follows system dark/light mode via `data-theme="preferred_color_scheme"`

**To modify Giscus settings:**

1. Visit [giscus.app](https://giscus.app/) to generate new configuration
2. Update the script in `themes/congo-site/layouts/partials/comments.html` (and in `themes/chain/layouts/_partials/comments.html`)

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

Create `.md` file and use markdown format ([sample](https://jpanther.github.io/congo/samples/markdown/), [sample markdown](https://raw.githubusercontent.com/jpanther/congo/refs/heads/dev/exampleSite/content/samples/markdown/index.md)). Note that the start of the markdown is called [front matter](https://jpanther.github.io/congo/docs/front-matter/) where all the post metadata goes. You can copy initial content from `archetypes/blog.md` template.

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
2. Run `./view.sh` to preview the changes (`THEME=chain ./view.sh` for the chain theme). You can additionally pass `-D --watch --poll 10000 --disableFastRender`. This will show draft changes due to `-D` switch which won't be published and suppress i18n warnings if any. The `--poll` is only needed if working on `/mnt` in WSL. Most of the time `--disableFastRender` is not really needed.
3. If everything looks good, run `./deploy.sh`. It generates the site using the theme declared by the production configuration and publishes the static pages from the `public` folder, which is already mapped to the GitHub Pages repository. `THEME` only affects previews and is ignored during deployment.
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

* Enable tags in menu
* Fix page content links, images
* Move twitter posts
* Restore from archived posts
