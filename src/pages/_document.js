import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <meta name="keywords" content="dotslash, DotSlash, Dot Slash, CET, CSE, CET CSE, College of Engineering Trivandrum, Computer Science & Engineering, Thiruvananthapuram, Trivandrum, Techfest, Technical fest, Cultural fest" />
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
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
