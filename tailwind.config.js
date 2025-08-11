const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },

            colors:{
                'mainblue':'#2D435E',
                'maingreen':'#53763E',
                'bluecoupon' : '#2763EC',
                'textCouponCode' : '#85CE94',
                'textQuoteCouponCode' : '##3465EE',
                'backgroundcoupon' : '#F8FAFC',
                'backgroundQouteCouponCode' : '#DCFCE7'
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
