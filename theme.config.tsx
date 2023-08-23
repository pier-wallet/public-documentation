import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>pier</span>,

  banner: {
    text: "Learn how to build on the decentralized web",
  },

  chat: {
    link: "https://discord.com",
  },
  feedback: {
    content: null,
  },
  useNextSeoProps: () => {
    titleTemplate: "%s – SWR";
  },
  editLink: {
    text: null,
  },
  footer: {
    text: "where your Web3 journey starts",
  },
  toc: {
    title: "Table of Contents",
    float: true,
  },
  i18n: [
    { locale: "en", text: "English" },
    // { locale: "de", text: "Deutsch" }, // TODO: add de when needed
  ],
  search: {
    placeholder: "Search...",
  },
};

export default config;
