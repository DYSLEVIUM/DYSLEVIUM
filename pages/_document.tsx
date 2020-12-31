import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class GlobalDocument extends Document {
  metaDescription: string;
  metaTitle: string;
  siteUrl: string;
  domain: string;

  constructor(props: any) {
    super(props);
    this.metaDescription = 'This is my portfolio website.'; //! change or remove description later
    this.metaTitle = 'Pushpakant Behera Portfolio'; //! change or remove title later
    this.siteUrl = 'https://portfolio.pushpakant.vercel.app'; //! change or remove name later
    this.siteUrl = 'portfolio.pushpakant.vercel.app'; //! change or remove name later
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta name="description" content={this.metaDescription} />

          {/* Open Graph */}
          <meta property="og:title" content={this.metaTitle} key="ogtitle" />
          <meta
            property="og:description"
            content={this.metaDescription}
            key="ogdesc"
          />
          <meta property="og:url" content={this.siteUrl} key="ogurl" />
          <meta
            property="og:image"
            content={`${this.siteUrl}/profile.png`}
            key="ogimage"
          />
          <meta
            property="og:site_name"
            content={this.metaTitle}
            key="ogsitename"
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
