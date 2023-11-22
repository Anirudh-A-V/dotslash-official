import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <title>DotSlash '23</title>
                <meta name="description" content="This is the official website of DotSlash CET 2023." />
                <meta name="keywords" content="dotslash, DotSlash, Dot Slash, CET, CSE, CET CSE, College of Engineering Trivandrum, Computer Science & Engineering, Thiruvananthapuram, Trivandrum, Techfest, Technical fest, Cultural fest" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="DotSlash '23" />
                <meta property="og:description" content="Official website of the technical fest of CSE CET" />
                <meta property="og:image" content="../../public/images/metalogo.png" />
                <meta property="og:url" content="https://www.dotslashcet.tech/" />

                <meta name="twitter:card" content="../../public/images/metalogo.png" />
                <meta name="twitter:title" content="DotSlash '23" />
                <meta name="twitter:description" content="Official website of the technical fest of CSE CET" />
                <meta name="twitter:image" content="../../public/images/metalogo.png" />

            </Head>
            <body>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-96CQYSH4G1" />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
 
                        gtag('config', 'G-96CQYSH4G1');
                    `}
                </Script>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
/*
import Script from 'next/script'
 
function Home() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </div>
  )
}
 
export default Home
*/
