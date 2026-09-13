#!/bin/bash
set -eu -o pipefail -o xtrace # fail if any command failes, log all commands, -o xtrace

# View the current website without deploying.
#
#   ./view.sh                 Congo theme (default), needs Hugo 0.145 as `hugo`
#   THEME=chain ./view.sh     "chain" theme, needs Hugo >= 0.146 as `hugo-latest`
#                             (override the binary with HUGO_LATEST=/path/to/hugo)
#
# Extra options are passed to `hugo server`:
# -D : view draft posts as well
# --watch --poll 10000 : needed for mnt on wsl (slow cross-filesystem I/O)
# --disableFastRender : sometimes when fast render does not work

source "$(dirname "$0")/theme-env.sh"

# Detect if running from Windows mount (slow) or native Linux filesystem (fast)
if [[ "$PWD" == /mnt/* ]]; then
    echo "Running from Windows mount - using polling for file watch"
    "$HUGO_BIN" server ${HUGO_ARGS[@]+"${HUGO_ARGS[@]}"} --renderToMemory --watch --poll 10000 "$@"
else
    echo "Running from native Linux filesystem - using native file watch"
    "$HUGO_BIN" server ${HUGO_ARGS[@]+"${HUGO_ARGS[@]}"} --renderToMemory "$@"
fi
