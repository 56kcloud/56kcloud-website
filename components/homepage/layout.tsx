import Head from "next/head";

export const siteTitle = "Edeltech";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="We develop quality applications for desktop, embedded and mobile platforms."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="min-h-screen">
        <div className="relative overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
