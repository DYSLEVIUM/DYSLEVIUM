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
    this.domain = 'portfolio.pushpakant.vercel.app'; //! change or remove name later
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta name="description" content={this.metaDescription} />

          {/* Twitter */}

          <meta name="twitter:card" content={`${this.siteUrl}/profile.png`} />
          <meta name="twitter:domain" content={this.domain} />
          <meta name="twitter:url" content={this.siteUrl} />
          <meta name="twitter:title" content={this.metaTitle} />
          <meta name="twitter:description" content={this.metaDescription} />
          <meta name="twitter:image" content={`${this.siteUrl}/profile.png`} />

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

          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&family=Roboto:wght@100;300;400;500&display=swap"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&family=Roboto:wght@100;300;400;500&display=swap"
          />
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}
