/*jslint es5:true, indent:2, maxlen:80, node:true*/
'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    jslint: {
      files: [
        'Gruntfile.js',
        'lib/**/*.js'
      ],
      exclude: [],
      directives: {}
    },

    mochacli: {
      options: {
        require: ['chai'],
        ui: 'tdd'
      },
      all: ['test/node.js']
    },

    mocha: {
      all: {
        src: ['test/browser/index.html'],
        mocha: {},
        run: false
      }
    },

    watch: {
      gruntfile: {
        files: '<%= config.jslint.files %>',
        tasks: ['jslint']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-mocha-cli');

  grunt.registerTask('test', ['jslint', 'mochacli']);
  grunt.registerTask('browser', ['mocha']);

  // Default task.
  grunt.registerTask('default', ['test']);

};
