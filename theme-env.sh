#!/bin/bash
# Sourced by view.sh and deploy.sh. Picks the Hugo binary and the config
# environment for the selected theme.
#
#   THEME=congo (default)  -> `hugo` (0.145; Congo does not build on >= 0.146)
#   THEME=chain            -> `hugo-latest` (>= 0.146) with --environment chain
#
# The two themes are independent: config/_default is Congo's configuration,
# config/chain/ is merged on top of it only for the chain environment, and
# each theme's templates/assets live under its own themes/<name> folder.

THEME="${THEME:-congo}"
case "$THEME" in
  congo)
    HUGO_BIN="${HUGO_CONGO:-hugo}"
    HUGO_ARGS=()
    ;;
  chain)
    HUGO_BIN="${HUGO_LATEST:-hugo-latest}"
    HUGO_ARGS=(--environment chain)
    ;;
  *)
    echo "Unknown THEME '$THEME' (expected congo or chain)" >&2
    exit 1
    ;;
esac

if ! command -v "$HUGO_BIN" >/dev/null 2>&1; then
  echo "Hugo binary '$HUGO_BIN' not found on PATH (see README: Installing Hugo)" >&2
  exit 1
fi
echo "Theme: $THEME  Hugo: $("$HUGO_BIN" version | cut -d' ' -f2)  Args: ${HUGO_ARGS[*]:-<none>}"
