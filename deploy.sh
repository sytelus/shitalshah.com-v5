#!/bin/bash

set -eu -o pipefail -o xtrace # fail if any command failes, log all commands, -o xtrace

hugo

# hugo removes the .git file from public/ folder so we restore it with the
# backed up copy
cp public.git public/.git

pushd public
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

echo "Site generated successfully! Commit the changes in public submodule and main repo."
