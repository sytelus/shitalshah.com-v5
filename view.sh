#!/bin/bash
set -eu -o pipefail -o xtrace # fail if any command failes, log all commands, -o xtrace

# view the current website without deploying
# Options:
# -D : view draft posts as well
# --watch --poll 10000 : needed for mnt on wsl (slow cross-filesystem I/O)
# --disableFastRender : sometimes when fast render does not work

# Detect if running from Windows mount (slow) or native Linux filesystem (fast)
if [[ "$PWD" == /mnt/* ]]; then
    echo "Running from Windows mount - using polling for file watch"
    hugo server --renderToMemory --watch --poll 10000 "$@"
else
    echo "Running from native Linux filesystem - using native file watch"
    hugo server --renderToMemory "$@"
fi