module.exports = function (grunt) {

  /*
    * connect      ローカルサーバを立てる
    * sass         sassのコンパイル
    * csslint      grunt csslint で発火
    * watch        html、scss、jsに変更があるとブラウザをオートリロードする
    * autoprefixer scss修正したタイミングで走らせる
                   sassのコンパイルと同時に走るイメージで、cssを対象にしてそのまま上書きをする
  */
  
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  
  grunt.initConfig({
  
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          //open: true,
          base: '.'
        }
      }
    },
    
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'scss/',
          src: ['**/*.scss'],
          dest: 'css/',
          ext: '.css'
        }]
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'Explorer >= 8', 'android 2.3']
      },
      files: {
        expand: true,
        flatten: true,
        src: 'css/**/*.css',
        dest: 'css/'
      }
    },
    
    csslint: {
      all: {
        src: ['css/**/*.css'],
        options: {
          // https://gist.github.com/hail2u/1303613
          'box-model': false,
          'display-property-grouping': true,
          'duplicate-properties': true,
          'empty-rules': true,
          'known-properties': true,
          'non-link-hover': false,
          'adjoining-classes': false,
          'box-sizing': false,
          'compatible-vendor-prefixes': false,
          'gradients': false,
          'text-indent': false,
          'vendor-prefix': true,
          'fallback-colors': true,
          'star-property-hack': true,
          'underscore-property-hack': true,
          'bulletproof-font-face': false,
          'font-faces': false,
          'import': true,
          'regex-selectors': false,
          'universal-selector': true,
          'zero-units': true,
          'overqualified-elements': false,
          'shorthand': true,
          'duplicate-background-images': false,
          'floats': false,
          'font-sizes': false,
          'ids': false,
          'important': false,
          'outline-none': true,
          'qualified-headings': false,
          'unique-headings': false,
          'unqualified-attributes': false
        }
      },
    },
    
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      html: {
        files: '**/*.html'
      },
      css: {
        files: [ 'scss/**/*.scss' ],
        tasks: [ 'sass', 'autoprefixer' ]
      },
      js: {
        files: '**/*.js'
      }
    }
    
  });
  
  grunt.registerTask('default', [ 'connect', 'watch' ]);
  
};