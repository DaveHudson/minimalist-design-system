/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('doc1.html', language)}>Storybook</Button>
            <Button href={docUrl('doc2.html', language)}>Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}



const Colors = props => {
  if ((siteConfig.brandColors || []).length === 0) {
    return null;
  }
  const brandColors = siteConfig.brandColors
    .map((color, i) => {
      const colorStyle = {
        height: 160,
        backgroundColor: color.hex
      }
      return (
        <div className="colorWrapper" key={i}>
          <div style={colorStyle} />
          <div className="colorBoxContent">
            <h4 className="h4">{color.name}</h4>
            <p className="textGrey">{color.hex}<br />
              {color.rgb}
            </p>
          </div>
        </div>
      );
    });

  return (
    <div className="customWrapper">
      <h2 className="h2">Brand</h2>
      <div className="alignHorizontal">
        {brandColors}
      </div>
    </div>
  )
}

const Iconography = props => {
  if ((siteConfig.icons || []).length === 0) {
    return null;
  }

  const iconography = siteConfig.icons
    .map((icon, i) => {
      return (
        <div className="colorWrapper" key={i}>
          <div className="iconWrapper">
            <i className={icon.class}></i>
          </div>

          <div className="colorBoxContent">
            <h4 className="h4">{icon.name}</h4>
            <p className="textGrey">{icon.name}<br />
              {icon.class}
            </p>
          </div>
        </div>
      )
    });

  return (
    <div className="customWrapper">
      <h2 className="h2">Iconography</h2>
      <div className="alignHorizontal">
        {iconography}
      </div>
    </div>
  )
}

const Typography = props => {
  if ((siteConfig.typography || {}).length === 0) {
    return null;
  }

  const typography = siteConfig.typography
    .map((font, i) => {
      const typographyStyle = {
        fontFamily: 'Roboto',
        fontSize: 22,
        border: '1px solid #CCCCCC',
        borderRadius: '5px',
        marginBottom: '10px'
      }
      const pStyle = {
        padding: 20
      }
      return (
        <div style={typographyStyle} key={i}>
          <p style={pStyle}>
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
            a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
            0 1 2 3 4 5 6 7 8 9
          </p>

          <div className="typographyBoxContent">
            <h4 className="h4">{font.name}</h4>
          </div>
        </div>
      )
    });

  return (
    <div className="customWrapper">
      <h2 className="h2">Typography</h2>
      <div className="alignHorizontal">
        {typography}
      </div>


    </div>
  )
}

const FontSizes = props => {
  if ((siteConfig.typography[0].fontSizes || []).length === 0) {
    return null;
  }

  const sizes = siteConfig.typography[0].fontSizes
    .map((fontSize, i) => {
      const textSize = {
        fontFamily: siteConfig.typography[0].name,
        fontSize: fontSize.size,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 30,
        paddingRight: 20
      }
      return (
        <div className="fontSizeWrapper" key={i}>
          <p style={textSize}>The small brown fox</p>
          <div className="fontSizeBoxContent">
            <h4 className="h4">{fontSize.name}</h4>
            <p className="textGrey">{fontSize.size}</p>
            <p className="textGrey">{fontSize.class}</p>
          </div>
        </div>
      )
    })

  return (
    <div className="customWrapper">
      <h2 className="h2">Font Sizes</h2>
      <div className="alignColumn">
        {sizes}
      </div>
    </div>
  )
}

const FontWeights = props => {
  if ((siteConfig.typography[0].fontWeights || []).length === 0) {
    return null;
  }

  const fonts = siteConfig.typography[0].fontWeights
    .map((fontWeight, i) => {
      const textSize = {
        fontFamily: siteConfig.typography[0].name,
        fontSize: 40,
        fontWeight: fontWeight.name,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 30,
        paddingRight: 20
      }
      return (
        <div className="fontWeightWrapper" key={i}>
          <p style={textSize}>
            Aa
        </p>
          <div className="fontWightBoxContent">
            <h4>{fontWeight.name}</h4>
            <p className="textGrey">{fontWeight.class}</p>
          </div>
        </div>
      )
    })

  return (
    <div className="customWrapper">
      <h2 className="h2">Font weights</h2>
      <div className="alignHorizontal">
        {fonts}
      </div>
    </div>
  )
}

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Colors />
          <Iconography />
          <Typography />
          <FontSizes />
          <FontWeights />
        </div>
      </div>
    );
  }
}

module.exports = Index;
