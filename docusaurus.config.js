// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SEF Handbook',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: "☾",
          darkIconStyle: {},
          lightIcon: "☀️",
          lightIconStyle: {}
        }
      },
      navbar: {
        title: 'SEF Handbook',
        logo: {
          alt: 'SEF Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Hive',
            to: 'https://sef.discourse.group/'
          },
          {
            label: 'Website',
            to: 'https://sefglobal.org/'
          },
          {
            href: 'https://github.com/sef-global',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'SEF Hive',
                href: 'https://sef.discourse.group',
              },
              {
                label: 'Slack',
                href: 'https://sefheadquarters.slack.com',
              },
              {
                label: 'Github',
                href: 'https://github.com/sef-global',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/sustainableeducationfoundation',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/goasksef',
              },
              {
                label: 'Linkedin',
                href: 'https://lk.linkedin.com/company/sefglobal',
              },
            ],
          },
          {
            title: 'Organisation',
            items: [
              {
                label: 'About SEF',
                to: '/organisation/about',
              },
              {
                label: 'What we do',
                to: '/organisation/what-we-do',
              },
              {
                label: 'Team',
                href: 'https://sefglobal.org/team.html',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://sefglobal.org/',
              },
              {
                label: 'Blog',
                href: 'https://sefglobal.medium.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sustainable Education Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
