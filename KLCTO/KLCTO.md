# The TOOLs `for` Front-end

## SPEAKER

- iMaZiNe
- `aka. Irho Park`
- GSSHOP IT Innovation Center

# THE GEEK
`AS YOU KNOW`

## FIRST AGENDA
`Live-reload`

## Simple LOGICS
Watch [`File changes`] -> [`Socket`] -> [`Browser`]

## HOW IT WORKS
**DEMO**

# INSTALLATION
- Yeah!!

## with OFFICIAL App

- Windows [[Download]](http://download.livereload.com/windows/LiveReloadSetup.exe)
- OSX [[AppStore]](http://itunes.apple.com/us/app/livereload/id482898991?mt=12)
- Linux [[guard-livereload]](https://github.com/guard/guard-livereload)

## with GULP.js
First of all, we need [node.js!](https://nodejs.org/download/)

## Install gulpjs and plugins
```
npm install --save-dev gulp gulp-livereload
```

# Make gulpfile.js
```
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('**/*.css', function (file) {
        livereload.changed(file);
    });

    gulp.watch('**/*.js', function (file) {
        livereload.changed(file);
    });

    gulp.watch('**/*.html', function (file) {
        livereload.changed(file);
    });
});
```

## EXECUTE with gulp
```
> gulp watch
```

## COMPLEXED?
> Don't worry about it.

- Download and install [[NodeJS]](https://nodejs.org/download/)
- Download and unzip to your location [[This File]]()
```
Just type two line
> npm install
> gulp watch
```

# INSTALL BROWSER [EXTENSIONS](http://livereload.com/extensions/)

- [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- [Firefox](https://addons.mozilla.org/ko/firefox/addon/livereload/)
- [Safari](http://download.livereload.com/2.1.0/LiveReload-2.1.0.safariextz)

## ENJOY development!

## One more Tips...

## Editor Plugins

- Beautyifier
- Formatter
- Emmet(ZenCode)
- Linters
  - JSHint
  - CSSLint

## PLUGIN DEMO

## THANKS
Question & Answer
