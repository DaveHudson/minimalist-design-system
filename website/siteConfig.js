/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */


const brandColors = [
  {
    name: 'White',
    hex: '#FFFFFF',
    rgb: 'rgb(255,255,255)'
  },
  {
    name: 'Black',
    hex: '#000C17',
    rgb: 'rgb(0,12,23)'
  },
  {
    name: 'Gray',
    hex: '#E2E2DC',
    rgb: 'rgb(226,226,220)'
  },
  {
    name: 'Dark Gray',
    hex: '#40474F',
    rgb: 'rgb(64,71,79)'
  },
  {
    name: 'Yellow',
    hex: '#E8AB12',
    rgb: 'rgb(232,171,18)'
  },
  {
    name: 'Teal',
    hex: '#00667C',
    rgb: 'rgb(0,102,124)'
  }
];

const icons = [
  {
    name: 'User',
    class: 'fas fa-user'
  },
  {
    name: 'Bookmark',
    class: 'fas fa-bookmark'
  },
  {
    name: 'Notifications',
    class: 'fas fa-bullhorn'
  },
  {
    name: 'Flag',
    class: 'fas fa-flag'
  },
  {
    name: 'Favourite',
    class: 'fas fa-star'
  }
];

const typography = [
  {
    name: 'Roboto',
    fontSizes: [
      {
        name: 'Large V',
        class: 'large-v',
        size: 44
      },
      {
        name: 'Large IV',
        class: 'large-iv',
        size: 32
      },
      {
        name: 'Large III',
        class: 'large-iii',
        size: 28
      },
      {
        name: 'Large II',
        class: 'large-ii',
        size: 24
      },
      {
        name: 'Large I',
        class: 'large-i',
        size: 19
      },
      {
        name: 'Regular',
        class: 'regular',
        size: 16
      },
      {
        name: 'Small I',
        class: 'small-i',
        size: 14
      },
      {
        name: 'Small II',
        class: 'small-ii',
        size: 11
      }
    ],
    fontWeights: [
      {
        name: 'Regular',
        class: 'regular'
      },
      {
        name: 'Bold',
        class: 'bold'
      }
    ]
  }
]

const appIcons = [
  {
    name: 'Apple Icon 180x180',
    icon: 'apple-icon-180x180.png'
  },
  {
    name: 'Apple Icon 152x152',
    icon: 'apple-icon-152x152.png'
  },
  {
    name: 'Apple Icon 144x144',
    icon: 'apple-icon-144x144.png'
  },
  {
    name: 'Apple Icon 120x120',
    icon: 'apple-icon-120x120.png'
  },
  {
    name: 'Apple Icon 114x114',
    icon: 'apple-icon-114x114.png'
  },
  {
    name: 'Apple Icon 76x76',
    icon: 'apple-icon-76x76.png'
  },
  {
    name: 'Apple Icon 72x72',
    icon: 'apple-icon-72x72.png'
  },
  {
    name: 'Apple Icon 60x60',
    icon: 'apple-icon-60x60.png'
  },
  {
    name: 'Apple Icon 57x57',
    icon: 'apple-icon-57x57.png'
  },
  {
    name: 'Android Icon 192x192',
    icon: 'android-icon-192x192.png'
  },
  {
    name: 'Microsoft Icon 144x144',
    icon: 'ms-icon-144x144.png'
  },
  {
    name: 'Favicon 96x96',
    icon: 'favicon-96x96.png'
  },
  {
    name: 'Favicon 32x32',
    icon: 'favicon-32x32.png'
  },
  {
    name: 'Favicon 16x16',
    icon: 'favicon-16x16.png'
  }
]

const siteConfig = {
  title: 'App Design System' /* title for your website */,
  tagline: 'A living design system of node modules built with React components',
  url: 'https://applification.github.io' /* your website url */,
  baseUrl: '/minimalist-design-system/' /* base url for your project */,
  organizationName: 'applification', // or set an env variable ORGANIZATION_NAME
  projectName: 'minimalist-design-system',
  repo: 'applificaiton/minimalist-design-system',
  repoUrl: 'https://github.com/applification/minimalist-design-system',
  headerLinks: [
    { page: 'index', label: 'Style Guide' },
    { doc: 'introduction', label: 'Docs' },
    { href: 'https://applification.github.io/minimalist-design-system/storybook', external: true, label: 'Storybook' },
    { blog: true, label: 'Blog' },
  ],
  brandColors,
  icons,
  typography,
  appIcons,
  /* path to images for header/footer */
  headerIcon: 'img/designsystem.svg',
  footerIcon: 'img/designsystem.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#333333',
    secondaryColor: '#67AAC0',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Applification Ltd',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
};

module.exports = siteConfig;
