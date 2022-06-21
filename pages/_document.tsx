import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="robots" content="index, follow" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "Axel Estrada",
              url: "https://axelestrada.ml",
              image: "https://axelestrada.ml/assets/images/profile-avatar.svg",
              sameAs: [
                "https://facebook.com/axelestradadev",
                "https://twitter.com/axelestradadev",
                "https://instagram.com/axelestradadev",
                "https://linkedin.com/in/axelestradadev",
                "https://github.com/axelestrada",
                "https://axelestrada.ml",
              ],
              jobTitle: "Desarrollador Web",
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
