
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    return (
      <>
        <Head>
          <title>Adrian Dotel Pujols</title>
          <meta name = "description" content = "My personal web by Adrian Dotel Pujols" />
          <link rel = "icon" href = "favicon.png" />
        </Head>

        <Component {...pageProps} />
      </>
    )
}

export default MyApp
