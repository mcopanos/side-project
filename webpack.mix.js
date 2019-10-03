const mix = require('laravel-mix');


mix
    .js('assets/js/main.js', 'web/js/main.js')
    .sass('assets/sass/app.scss', 'web/css')