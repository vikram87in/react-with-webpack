
const plugins = [];
if (process.env.SERVE) {
  plugins.push("react-refresh/babel");
}
module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic" // defaults to classic; no need to import react for JSX syntax if we use automatic
      }
    ]
  ],
  plugins
}