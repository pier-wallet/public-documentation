import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import PierLogo from "./public/images/pier_icon-4_black.svg";
const config: DocsThemeConfig = {
  logo: (
    <img
      src={"/images/pier_icon-4_black.svg"}
      alt="Pier Logo"
      style={{
        width: "2rem",
        height: "2rem",
        marginRight: "10px",
      }}
    />
  ),
  docsRepositoryBase: "https://github.com/pier-wallet/public-documentation",
  useNextSeoProps() {
    return {
      titleTemplate: "%s | pier wallet SDK Documentation",
      openGraph: {
        images: [{ url: "/images/pier.png" }],
        siteName: "pier wallet SDK Documentation",
      },
    };
  },

  banner: {
    text: "Learn how to build on the decentralized web",
  },

  project: {
    link: "https://github.com/orgs/pier-apps/repositories",
  },

  feedback: {
    content: null,
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
    placeholder: "Search the docs...",
  },
};

export default config;
