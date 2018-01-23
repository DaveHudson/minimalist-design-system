/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

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

const siteConfig = {
  title: 'App Design System' /* title for your website */,
  tagline: 'A living app design system of node modules built with React components',
  url: 'https://applification.github.io' /* your website url */,
  baseUrl: '/minimalist-design-system/' /* base url for your project */,
  organizationName: 'applification', // or set an env variable ORGANIZATION_NAME
  projectName: 'minimalist-design-system',
  repo: 'applificaiton/minimalist-design-system',
  repoUrl: 'https://github.com/applification/minimalist-design-system',
  headerLinks: [
    { page: 'style-guide', label: 'Style Guide' },
    { doc: 'introduction', label: 'Docs' },
    { href: 'https://applification.github.io/minimalist-design-system/storybook', external: true, label: 'Storybook' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],
  users,
  brandColors,
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
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
