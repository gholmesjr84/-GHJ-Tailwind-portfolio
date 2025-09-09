export default {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { bone:'#F5F5DC', deepplum:'#4B2E83', charcoal:'#2B2B2B', pumpkin:'#F26B38', teal:'#3AAFA9', mustard:'#E1B12C', magenta:'#D85A90' },
      borderRadius: { xl2:'1rem' },
      boxShadow: { soft:'0 10px 30px rgba(0,0,0,.07)' },
      fontFamily: { shrikhand:['Shrikhand','cursive'], raleway:['Raleway','ui-sans-serif','system-ui'] }
    }
  },
  plugins: []
}