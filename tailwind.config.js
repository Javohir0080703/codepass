/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "#040D12": "#040D12",
        "#AAAAAA":"#AAAAAA",
        "#323142":"#323142",
        "#CFCFD3":"#CFCFD3",
        "#141416":"#141416",
        "#F5F5F5":"#F5F5F5",
        "#F3F5F6":"#F3F5F6"
      },
      screens:{
        "500px":"500px"
      },
       lineHeight:{
        "11":"44px"
       },
       margin:{
        "90px":"90px"
       },
       borderRadius:{
        "14px":"14px"
       }
    },
  },
  plugins: [],
};
