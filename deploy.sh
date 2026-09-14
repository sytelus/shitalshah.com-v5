#!/bin/bash

set -eu -o pipefail -o xtrace # fail if any command failes, log all commands, -o xtrace

# Production always uses the theme declared by the production Hugo config.
# THEME is intentionally a preview-only convenience used by view.sh.
HUGO_BIN="${HUGO_DEPLOY:-hugo}"
if ! command -v "$HUGO_BIN" >/dev/null 2>&1; then
    echo "Hugo binary '$HUGO_BIN' not found on PATH (see README: Installing Hugo)" >&2
    exit 1
fi

CONFIGURED_THEME=$("$HUGO_BIN" config --environment production | sed -n 's/^theme = //p')
echo "Deploying production theme from config: ${CONFIGURED_THEME:-<not set>}"

pushd public
git checkout master
git pull
popd

"$HUGO_BIN" --environment production --cleanDestinationDir

# hugo removes the .git file from public/ folder so we restore it with the
# backed up copy
cp public.git public/.git

pushd public
git checkout master
git status --short
read -r -p "Commit and push everything ([y]/n)? " response
response=${response:-y}
if [ "$response" != "y" ]; then
    echo "Deployment aborted."
    exit 0
fi
git add .
git commit -m "deployment"
git push

# back to main
popd
git add .
git commit -m "deployment"
git push

echo "Site generated successfully! See if anything is dirty in repos."
