let mix = require('laravel-mix');

mix.version()
    .disableNotifications()
    .setPublicPath('web')
    .js('assets/js/main.js', 'web/assets/js/')
    .sass('assets/sass/app.scss', 'web/assets/css/app.css')
    .copyDirectory('assets/css', 'web/assets/css')
    .sourceMaps()
    .browserSync({
        proxy: 'localhost:8080',
        files: ['templates/**/*', 'web/assets/css/*.css', 'web/assets/js/*.js']
    })
