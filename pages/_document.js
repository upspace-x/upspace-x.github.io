import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Use your high-resolution favicon.jpeg from /public */}
        <link rel="icon" href="/favicon.jpeg" type="image/jpeg" />

        {/* ✅ Apple touch icon for iOS home screens */}
        <link rel="apple-touch-icon" href="/favicon.jpeg" />

        {/* ✅ Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}