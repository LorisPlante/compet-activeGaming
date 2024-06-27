import CookieBanner from "@/components/cookieBanner";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import HeadComponent from "@/components/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" dir="ltr">
      <head>
        <HeadComponent />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-X8XGE51517" />
        <link rel="apple-touch-icon" sizes="180x180" href="/medias/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/medias/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/medias/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/medias/img/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/medias/img/favicon/safari-pinned-tab.svg" color="#cc00ff" />
        <link rel="shortcut icon" href="/medias/img/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#fefefe" />
        <meta name="msapplication-config" content="/medias/img/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#fefefe" />
      </head>
      <body className="bg-bg-reverse">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
