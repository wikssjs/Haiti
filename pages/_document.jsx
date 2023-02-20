import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    </Html>
  )
}
