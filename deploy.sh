#!/bin/bash

set -eu -o pipefail -o xtrace # fail if any command failes, log all commands, -o xtrace

hugo --ignoreCache --panicOnWarning

# hugo removes the .git file from public/ folder so we restore it with the
# backed up copy
cp public.git public/.git

echo "Site generated successfully! Commit the changes in public submodule and main repo."
