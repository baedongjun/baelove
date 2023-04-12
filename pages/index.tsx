import FullpageJsExample from "@/components/fullpageExample";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fullpage.js_nextjs_typescript_bootstrap</title>
        <meta name="description" content="Fullpage.js_nextjs_typescript_bootstrap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FullpageJsExample/>
      </main>
    </>
  );
}
