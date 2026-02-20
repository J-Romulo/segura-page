import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { Header } from "../../components/layout/header";
import Footer from "../../components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const i18n = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: i18n("title"),
    description: i18n("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pt")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Sentient — Segura's headline font, not available on Google Fonts */}
        <link rel='preconnect' href='https://api.fontshare.com' />
        <link
          href='https://api.fontshare.com/v2/css?f[]=sentient@400,500,600,700,800&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
