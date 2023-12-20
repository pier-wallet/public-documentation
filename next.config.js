const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  latex: true,
  flexsearch: {
    codeblock: false,
  },
  readingTime: true,
});

module.exports = withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
  i18n: {
    locales: ["en"], // TODO: Add de when needed
    defaultLocale: "en",
  },
});
