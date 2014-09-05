module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'watch': {
      scripts: {
        files: ['./app/**/*'],
        tasks: ['sass','jshint'],
        options: {
          nospawn: true
        }
      }
    },
    'sass': {                            // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          './app/css/style.css': './app/scss/style.scss'
        }
      }
    },
    'jshint': {
      files: ['./*.js']
    },
    'connect': {
      'static': {
        options: {
          base: 'app/',
          hostname: 'localhost',
          port: 8001
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s)
  grunt.registerTask('default', [ 'connect', 'sass', 'watch']);

};