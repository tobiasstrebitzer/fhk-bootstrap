module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'javascripts/app.js',
                dest: 'javascripts/app.min.js'
            }
        },
        less: {
            app: {
                options: {
                    paths: ["stylesheets"]
                },
                files: {
                    "stylesheets/app.css": "less/app.less"
                }
            }
        },
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: 'less:app'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less:app']);

};