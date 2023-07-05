import Head from "next/head";
import FullpageJsExample from "../components/fullpageExample";

export default function Home() {
  return (
    <>
    <Head>
      <title>배동준 배진영</title>
      <meta name="description" content="배동준 배진영" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <FullpageJsExample/>
    </main>
  </>
  ) 
}
