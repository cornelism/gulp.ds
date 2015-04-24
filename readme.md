CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Installation
 * Compiling your project (commands)
 * Design Decisions

INTRODUCTION
------------

This is Dropsolid's GulpJS theming package.

Clone this repo with your command line
```
$ git clone git@bitbucket.org:dropsolid/gulp_ds.git
```
into your project folder (for Dropsoldiers place this in the ect folder).
(use your bitbucket password)

You can obviously also [**download**](https://bitbucket.org/dropsolid/gulp_ds/get/082b8aa74463.zip) this directly.
But you'll have to log in.

Note that this project is constantly updated
so if you notice some problems don't hesitate to [**post an issue**](https://bitbucket.org/dropsolid/gulp_ds/issues)

This way we can improve this package continuously,
so everyone in Dropsolid can enjoy this efficient and uniform way of working.


Happy theming!

Dropsolid team


INSTALLATION
------------

You need the following software on your system,
Download and install kids!
- nodeJS    http://nodejs.org/
- bundler   http://bundler.io/
- ruby      https://www.ruby-lang.org/en/installation/
            (On MAC OSX Ruby is already pre-installed.)

afther you have installed nodeJS,
you can go and install gulp globally with following comment:
  > (sudo) npm install gulp -g

Now we gonna copy some folders to the theme folder where you're working on.
Go into the themes/gulp-start folder and copy following files / folders and
subfolders and paste them in your theme folder (Be sure you copy all the files,
'cause you gonna need it to succeed the next steps):
- assets
  - imgs
  - js
    *
- config
  *
- sass
- gulp
* Gemfile
* gulpfile.js
* package.json
* .jshintrc

Now, open your terminal and go to your used theme folder and run following
command to install all necessary node modules referenced in package.json file:
  > (sudo) npm install


In this same folder run the next command so to install all used gems
with bundler, these plugins are referenced in the %Gemfile%, so bundler knows
which ones to download.
  > bundle install

Afther succeeding the previus step, run the gulp command to build everything
for the first time:
 > gulp

All your sass files will be compiled in the assets/css folder,
So don't forget to at this to your theme.info file.


COMPILING YOUR PROJECT (COMMANDS)
---------------------------------

All listed commands can be edited in gulpfile.js,
but it is recommended to read article mentioned above first.

Compiles de sass files and put them in the assets/css folder
  > gulp compile

Creates assets/imgs/sprite.png file from all .png's in the images folder
and sass/sprites.sass file with all references to the above created sprite
so you can use them easily.
  > gulp sprites

Removes all compiled css, sprites and concatenated files,
but leaves the folders to maintain the structure
  > gulp clean

Watches the folders for changes, which then compiles,
concatenates and creates sprites. some are for now put in comments.
  > gulp watch

runs the default task by running the most important tasks.
>> gulp clean -> gulp sprites -> gulp compile
  > gulp


DESIGN DECISIONS
----------------
