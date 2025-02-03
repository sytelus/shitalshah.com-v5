#!/bin/bash

set -eu -o pipefail -o xtrace # fail if any command failes, log all commands, -o xtrace

# Create a system-managed temporary directory
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR"
# Generate Hugo site into the temporary directory
hugo --destination "$TEMP_DIR" --ignoreCache

ls "${TEMP_DIR}/"

# Use rsync to sync files, excluding .git
rsync -av --delete --exclude=".git" "${TEMP_DIR}/" public/

ls "$TEMP_DIR"

# Remove temporary directory after successful sync
#rm -rf "$TEMP_DIR"

echo "Site generated successfully! Commit the changes in public submodule and main repo."
