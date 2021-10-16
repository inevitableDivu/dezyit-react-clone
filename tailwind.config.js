module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.js',
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url(../assets/images/bg1.webp)',
        herolg: 'url(../assets/images/bg-lg.webp)',
        product: 'url(../assets/images/ec9816_6cad91bd1e0e48f19fb000611fe63bb7_mv2.webp)',
        productlg: 'url(../assets/images/prolg.webp)',
        blog: 'url(../assets/images/blogbg.webp)'
      },
      flex: {
        theme: '1 0 66%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
