// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hproainvrdoc',
  tagline: 'Docs on homepage',
  favicon: 'img/favicon.ico',

  url: 'https://your-site.example.com',
  baseUrl: '/hproainvrdoc',
  organizationName: 'my-org',
  projectName: 'my-docs-site',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // 文档即首页
          sidebarPath: './sidebars.js',
        },
        blog: false, // 不要博客
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Hproainvrdoc',
      logo: {
        alt: 'Hproainvrdoc Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Hproainvrdoc',
        // },
        {
          href: 'https://linkingvision.com/index.php/articles-list',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://linkingvision.com',
          label: 'Linkingvision',
          position: 'right',
        },
        {
          href: 'https://github.com/linkingvision',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Sample Applications',
              to: '/get-started/sample-tools-and-applications/',
            },
            {
              label: 'Clustering & Scaling',
              to: '/category/clustering-and-scaling/',
            },
            {
              label: 'Adaptive Bitrate',
              to: '/category/adaptive-bitrate/',
            },
            {
              label: 'Troubleshooting',
              to: '/guides/troubleshooting/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Developer Discussion',
            //   href: 'https://github.com/ant-media/Ant-Media-Server/discussions',
            // },
            // {
            //   label: 'Stackoverflow',
            //   href: 'https://stackoverflow.com/questions/tagged/ant-media-server',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/linkingvision',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@linkingvisioncorp',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            // {
            //   label: 'My Account',
            //   href: 'https://antmedia.io/my-account/',
            // },
            {
              label: 'Support Packages',
              href: 'https://linkingvision.com/swdload',
            },
            {
              label: 'Blog',
              to: 'https://linkingvision.com/articles-list',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ant Media`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
