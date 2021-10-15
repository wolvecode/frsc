const mix = require('laravel-mix');

/**
 * Merely running the SASS style differently and I will link it in the Blade view.
 */
mix.sass('resources/react/styles/style.scss', 'public/css/style.css');

/**
 * The login (or if there is a register) will be a single App itself.
 * Then the next pages user will see after login should be the main App
 * where you have a single page application that is routed with
 * React Router DOM.
 */
mix.js('resources/react/login.js', 'public/js/login.js')
    .js('resources/react/index.js', 'public/js/app.js')
    .react();
