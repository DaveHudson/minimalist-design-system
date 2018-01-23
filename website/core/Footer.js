/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata|Roboto|Roboto+Mono|Source+Code+Pro" rel="stylesheet" />
      </footer>
    );
  }
}

module.exports = Footer;
