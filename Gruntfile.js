// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
grunt.initConfig({
  vulcanize: {
    default: {
      options: {
        abspath: '',
        inlineScripts: true,
        inlineCss: true,
        stripComments: true,
        csp: ""
      },
      files: {
        'vulcanized.html': 'demo.html'
      },
    },
  },
  vulcanize: {
    default: {
      options: {
        abspath: '',
        inlineScripts: true,
        inlineCss: true,
        stripComments: true,
        csp: "crispered/vulcanized-csp.js"
      },
      files: {
        'vulcanizedBabeled.html': 'demo.html'
      },
    },
  },
 crisper: {
  dist: {
    options: {
      cleanup: false,
      scriptInHead: false, // true is default 
      onlySplit: false
    },
    src: 'vulcanizedBabeled.html',
    dest: 'crispered/vulcanized-csp.js'
  }
},
    babel: {
			compile: {
				options: {
					sourceMap: true,
					presets: ['es2015']
				},
				files: {
                    
					 'crispered/vulcanized-csp.js': 'crispered/vulcanized-csp.js'
				}
			}
		},
})

/*grunt.loadNpmTasks('babel-plugin-transform-es2015-classes');*/
grunt.loadNpmTasks('grunt-crisper');
grunt.loadNpmTasks('grunt-babel');
grunt.loadNpmTasks('grunt-vulcanize');
//grunt.registerTask('babelTask', ['babel']);
grunt.registerTask('vulcanizeTask', ['vulcanize','babel']);
//grunt.registerTask('vulcanizeTaskBabel', ['vulcanize']);
  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
 /* grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');*/

};
