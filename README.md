
# repo to reproduce issue with babel

"ignore" option seems to be ignored in ".babelrc"

1. clone this repo
2. `npm install`
3. `npm run compile-succeeds-with-cli-options` — works
4. `npm run compile-fails-with-babelrc` — fails

these two compile scripts should have the same effect, but they don't
