#!/bin/bash
set -eu -o pipefail -o xtrace # fail if any command failes, log all commands, -o xtrace

# view the current websitr without deploying
# Options:
# -D : view draft posts as well
# --watch --poll 10000 : needed for mnt on wsl
# --disableFastRender : sometimes when fast render does not work
hugo server --renderToMemory  "$@"