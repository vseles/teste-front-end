'use strict';

module.exports = function ( grunt ) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'assets/scripts/**/*.js',
        '!assets/build/main.min.js',
        '!assets/scripts/vendors/*.js',
      ]
    },
    sprite: {
      all: {
        src: 'assets/sprites/*.png',
        dest: 'assets/images/sprite.png',
        destCss: 'assets/sass/plugins/_sprites.scss'
      }
    },
    sass: {
      dist: {
        options: {
          compass: false,
          sourcemap: false,
          style: 'compressed'
        },
        files: {
          'assets/build/main.min.css': [
              'assets/sass/main.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/build/main.min.js': [
            'assets/build/main.js'
          ]
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['> 0%']
      },
      dist: {
        files: {
          'assets/build/main.min.css': 'assets/build/main.min.css'
        }
      }
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          'assets/build/main.js': 'assets/scripts/main.js'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['assets/scripts/vendors/*.js'],
        dest: 'assets/build/main.vendors.min.js',
      },
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'assets/sass/**/*.scss'
        ],
        tasks: ['sprite', 'sass', 'autoprefixer']
      },
      scripts: {
        files: [
          'assets/scripts/**/*.js'
        ],
        tasks: ['jshint', 'babel', 'concat', 'uglify', 'clean']
      },
      html: {
        files: [
          'public/*.html'
        ]
      }
    },
    clean: {
      dist: [
        'assets/build/main.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('start', [ 'watch' ]);
  grunt.registerTask('build', ['sprite', 'sass', 'autoprefixer', 'babel', 'concat', 'uglify', 'clean']);
};