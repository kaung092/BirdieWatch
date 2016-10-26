module.exports = function(grunt) {

	grunt.registerTask('default', ['jshint']);
  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
			reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
			},
			build: ['Gruntfile.js', 'www/js/*.js']
		}


    // configure uglify to minify js files -------------------------------------
/*
    uglify: {
      build: {
        files: {
          'www/js/app.min.js': 'www/js/app.js',
          'www/js/controllers.min.js': 'www/js/controllers.js',
          'www/js/directives.min.js': 'www/js/directives.js',
          'www/js/routes.min.js': 'www/js/routes.js',
          'www/js/services.min.js': 'www/js/services.js'
        }
      }
    }
*/


  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};

