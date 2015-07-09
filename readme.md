CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Installation
 * Compiling your project (commands)
 * Design Decisions

INTRODUCTION
------------

This is Dropsolid's GulpJS theming package.

You can [**download**](https://bitbucket.org/dropsolid/gulp_ds/get/082b8aa74463.zip) this directly.

Note that this project is constantly updated
so if you notice some problems don't hesitate to [**post an issue**](https://bitbucket.org/dropsolid/gulp_ds/issues)

This way we can improve this package continuously,
so everyone in Dropsolid can enjoy this efficient and uniform way of working.


Happy theming!

Dropsolid team


INSTALLATION
------------

You need the following software on your system,
Download and install!
- nodeJS    http://nodejs.org/

After you have installed nodeJS,
you can go and install gulp globally with following command:
  > (sudo) npm install gulp -g

Also install Bower globally with ( Bower http://bower.io/ ):
  > (sudo) npm install bower -g

Now, open your terminal and go to your used theme folder and run following
command to install all necessary node modules referenced in package.json file:
  > (sudo) npm install

Also get the bower components for susy(grid) and breakpoint-sass from the bower.json file.
  > (sudo) bower install

All your sass files will be compiled in the assets/build/css folder,
So don't forget to at this to your theme.info file.


COMPILING YOUR PROJECT (COMMANDS)
---------------------------------

All listed commands are found under gulp/tasks.
You can change the used paths in the config.js file.

- Watches the folders for changes, which then compiles (Sass, Images, Iconfont, Fonts and Js),
  > gulp watch

- Gulp watch is used as default.
  > gulp

- Compiles the sass files in assets/src/sass/*/** and put them in the assets/build/css folder.
  > gulp sass

- Compress all images in the assets/src/images folder and place them in assets/build/images.
  > gulp images

- Creates an iconfont at assets/build/fonts with all the .svg's in the assets/src/icons.
Also creates the mixins needed at assets/src/sass/helpers/_icons.scss
Create your own icons with the settings found at (https://www.npmjs.com/package/gulp-iconfont)
Or download them from icomoon.io
  > gulp iconfont

- Compiles all fonts found at assets/src/fonts to assets/build/fonts. This may need to be used in conjuction with iconfont.
  > gulp fonts

- Compiles all scripts in the /assets/src/js/ to assets/build/js. Normally you won't need to use this command, gulp watch takes care of it.
  > gulp browserify
