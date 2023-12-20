import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
const config: DocsThemeConfig = {
  logo: (
    <Image src={"/images/pier.png"} alt="Pier Logo" width={100} height={100} />
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
