const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        iranyekan: ['IRANYekanX', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '700',
      },
      colors: {
        primary: {
          blue: '#3A6FF8',
          green: '#1ECB4F',   // رنگ سبز برای اعداد مثبت
          orange: '#F46D22',  // رنگ نارنجی برای نمایش‌های خاص
        },
        secondary: {
          purple: '#8C77ED',  // رنگ بنفش برای دکمه‌ها و عناصر برجسته
        },
        background: {
          light: '#F8F8F8',   // پس‌زمینه سفید در حالت روشن
          dark: '#14161D',    // پس‌زمینه تیره در حالت تاریک
          cardLight: colors.white, // رنگ پس‌زمینه کارت‌ها در حالت روشن
          cardDark: '#1A2029', // رنگ پس‌زمینه کارت‌ها در حالت تاریک
        },
        text: {
          primaryLight: '#14161D', // رنگ اصلی متن در حالت روشن
          primaryDark: colors.white,  // رنگ اصلی متن در حالت تاریک
          secondaryLight: '#1A2029', // رنگ ثانویه متن در حالت روشن
          secondaryDark: '#ADADAD', // رنگ ثانویه متن در حالت تاریک
        },
      },
      boxShadow: {
        sidebar: '-1px 0px 2px 0px rgba(0, 0, 0, 0.12)',
        header: '0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}

