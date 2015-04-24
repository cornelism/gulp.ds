var theme   = '../../docroot/sites/all/themes/gulp_testing/',   // path to used theme
  css_type  = 'sass',
  src_folder  = theme + 'src/',
  dest_folder = theme +'dest/';

module.exports = {

  tasks : {         // Task naming here
    sass: 'sass',
    fonts: 'fonts',
    sprites: 'sprites',
    minify_css: 'min_css',
    clean: 'clean'
  },

  sass : {
    requirements : [
      'susy',
      'compass',
      'compass-normalize'
    ],
    src : src_folder + 'sass/*.scss',
    dest : dest_folder + "css/"
  },

  css : {
    src : dest_folder + "css/*.css",
    min : dest_folder + "css/min/"
  },

  js : {
    src : src_folder + 'js/*.js',
    dest : dest_folder + 'js/'
  },

  fonts : {
    folder : theme + "fonts/"
  },

  images : {
    src : src_folder + 'images/layout/**/*.{png,jpg,gif,jpeg}',
    dest : dest_folder + 'sprites/',
    sass : src_folder + 'sass/sprites/',
    cssPath : '../../sprites/',       // rel. path to sprite from css
    filename_sass : 'sprites.scss',   // sprites mixin filename
    filename_img : 'sprite.png',    // sprite img filename
    proc : 'sass'
  },

  watch : {
    type : css_type,
    sass : src_folder + 'sass/**/*.scss',
    images : src_folder + 'images/**/*.{png,jpg,gif,jpeg,bpm}',
    fonts : src_folder + 'fonts/*.{ttf,eot,woff,svg}'
  },

  clean : {
    path_css : dest_folder + 'css/',
    path_sprites : src_folder + 'sprites/',
    path_sprites_sass : src_folder + 'sass/sprites/'
  }
}
