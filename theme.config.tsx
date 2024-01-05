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
  chat: {
    link: "https://outlook.office365.com/owa/calendar/pierdemo@pierwallet.com/bookings/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 122.88 119.75">
        <path
          fill="evenOdd"
          d="M91.89,57.78a31,31,0,1,1-31,31,31,31,0,0,1,31-31Zm-22-53.72c0-2.23,2.2-4.06,5-4.06s5,1.82,5,4.06V21.83c0,2.23-2.2,4.06-5,4.06s-5-1.82-5-4.06V4.06ZM13.49,57.51c-.29,0-.54-1.23-.54-2.75s.22-2.73.54-2.73H27c.28,0,.53,1.23.53,2.73s-.22,2.75-.53,2.75Zm21.54,0c-.28,0-.53-1.23-.53-2.75S34.72,52,35,52H48.55c.28,0,.53,1.23.53,2.73s-.22,2.75-.53,2.75Zm21.55,0c-.28,0-.53-1.23-.53-2.75s.22-2.73.53-2.73H70.1c.28,0,.53,1.22.53,2.72a41.48,41.48,0,0,0-3.9,2.76ZM13.52,73.23c-.28,0-.54-1.23-.54-2.75s.22-2.74.54-2.74H27c.28,0,.53,1.23.53,2.74s-.22,2.75-.53,2.75Zm21.54,0c-.28,0-.53-1.23-.53-2.75s.22-2.74.53-2.74H48.58c.28,0,.53,1.23.53,2.74s-.22,2.75-.53,2.75ZM13.55,89c-.28,0-.54-1.23-.54-2.74s.23-2.75.54-2.75H27.06c.28,0,.53,1.23.53,2.75S27.37,89,27.06,89Zm21.54,0c-.28,0-.53-1.23-.53-2.74s.22-2.75.53-2.75H48.61c.28,0,.53,1.23.53,2.75S48.92,89,48.61,89ZM25.36,4.06c0-2.23,2.2-4.06,4.95-4.06s4.95,1.82,4.95,4.06V21.83c0,2.23-2.21,4.06-4.95,4.06s-4.95-1.82-4.95-4.06V4.06ZM5.45,38.84H99.79V18.39a2.51,2.51,0,0,0-2.5-2.5h-9a2.75,2.75,0,1,1,0-5.49h9a8,8,0,0,1,8,8V50.87a41.1,41.1,0,0,0-5.57-1.49V44.31H5.45v53A2.47,2.47,0,0,0,6.19,99,2.51,2.51,0,0,0,8,99.77H52.78a39.14,39.14,0,0,0,1.93,5.55H8A8,8,0,0,1,2.35,103,7.88,7.88,0,0,1,0,97.32V18.41a8,8,0,0,1,8-8h9.66a2.75,2.75,0,0,1,0,5.49H8a2.46,2.46,0,0,0-1.76.73,2.54,2.54,0,0,0-.73,1.77V38.85H5.45Zm37.74-23a2.75,2.75,0,1,1,0-5.49h18.4a2.75,2.75,0,1,1,0,5.49ZM82.58,83.5l5.83,5.55L100.5,76.8c1-1,1.62-1.82,2.85-.56l4,4.08c1.3,1.29,1.23,2,0,3.25L90.68,100c-2.59,2.54-2.14,2.7-4.78.09l-10-10A1.16,1.16,0,0,1,76,88.28l4.62-4.78c.69-.73,1.25-.69,2,0Z"
        />
      </svg>
    ),
  },
};

export default config;
