import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: '#1C4D86',
        second: '#fff',
        acceptText:'#008767',
        acceptBorder:'#00B087',
        acceptBg: '#79E8CE',
        waitbg: '#FFF2C5',
        waittext: '#DF7A04',
        waitborder:'#DF9504',
        wrongBg: '#FFC5C5',
        wrongText:'#DF0404',
        success:'#0A9A4C',
      },
    },
  },
  plugins: [],
};
export default config;
