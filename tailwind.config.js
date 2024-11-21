import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: `"Inter", serif;`,
      },
      colors: {
        primary: {
          1: "#4169E1",
          hoverClr:"#fd7685",
        },
        secondary: {
          1: "#666666",
          2: "#ffffffb8",
          3:"#192837",
        },
      },
    },
  },
  plugins: [],
});