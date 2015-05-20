var dest = "assets/build/";
var src = 'assets/src';

module.exports = {
  sass: {
    src: src + "/sass/**/*.{scss,sass}",
    dest: dest + "/css"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  browserify: {
    src: './assets/src/js/**',
    bundleConfigs: [{
      entries: './assets/src/js/main.js',
      dest: dest,
      outputName: 'js/main.js'
    }]
  },
  iconfont:{
    src: "assets/src/icons/*.svg",
    dest: "assets/src/fonts",
    fontName: "dropsolid-icons",
    sass: "../../src/sass/helpers/_icons.scss"
  },
  fonts:{
    src: "assets/src/fonts/*.{ttf,woff,eof,svg,eot}",
    dest: "assets/build/fonts"
  },
  templates:{
    src: "templates/**/*"
  }
};
