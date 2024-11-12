module.exports = function (grunt) {
  const sass = require('node-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: [{
          src: './assets/css/main.scss',
          dest: './assets/style.css'
        }]
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
        'processImport': true
        
      },
      target: {
        files: {
          './assets/style.css': './assets/style.css'
        }
      }
    },
    watch:{
        css: {
            files: ['./assets/**/*.scss','./assets/css/main.scss','./assets/style.css'],
            tasks:['sass:dist','cssmin:target'],
            options: {
                livereload: true,
              },
        }
    }
  });

  grunt.registerTask('default', ['sass','cssmin']);

};