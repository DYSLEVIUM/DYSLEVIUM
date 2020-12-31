import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class GlobalDocument extends Document {
  metaDescription: string;
  metaTitle: string;
  siteName: string;

  constructor(props: any) {
    super(props);
    this.metaDescription = 'Pushpakant Description'; //! change or remove description later
    this.metaTitle = 'Pushpakant Behera'; //! change or remove title later
    this.siteName = 'https://portfolio.pushpakant.vercel.app'; //! change or remove name later
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta name="description" content={this.metaDescription} />
          <meta
            property="og:description"
            content={this.metaDescription}
            key="ogdesc"
          />

          <meta property="og:title" content={this.metaTitle} key="ogtitle" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" key="twcard" />
          {/* <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

          {/* Open Graph */}
          <meta property="og:url" content={this.siteName} key="ogurl" />
          <meta property="og:image" content="/profile.png" key="ogimage" />
          <meta
            property="og:site_name"
            content={this.siteName}
            key="ogsitename"
          />
          <meta property="og:title" content={this.metaTitle} key="ogtitle" />
          <meta
            property="og:description"
            content={this.metaDescription}
            key="ogdesc"
          />

          {/* instructs search engine crawler to index the current page and follow any links on it*/}
          <meta name="robots" content="index, follow" />
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}
