#Bundle riotjs tag

With browserify, riotify, babelify via Gulp 4

Without `.babelrc` file. Babel presets for babelify plugin added to package.json

```
"babel": {
  "presets": [
    "es2015-riot"
  ]
}
```

### install the dependencies
`$ npm run setup`

### build app
`$ gulp app`