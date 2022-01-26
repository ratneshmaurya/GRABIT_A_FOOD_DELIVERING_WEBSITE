module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'homebanner': "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
      }),

      height: theme => ({
        "screen/2": "50vh",
        "required":"470px",
        "screen-40":"calc(100vh*4/10)",
        "screen-60":"calc(100vh*6/10)",
        "screen-70":"calc(100vh*7/10)",
        "screen-80":"calc(100vh*8/10)",
        "screen-90":"calc(100vh*9/10)",
      }),

      spacing: {
        '92percent': '92%',
        '94percent': '94%'
      },
    },
  },
  plugins: [],
}
