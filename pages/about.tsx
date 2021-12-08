import Head from "next/head";
import Layout from "../components/layout";
import ImageHeader from "../components/imageheader";
import Team from "../components/team";

import { team } from "../data/team";
import { GetStaticProps } from "next";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Edeltech | About</title>
      </Head>
      <ImageHeader
        title="About Edeltech"
        tagline="We are located in Sion, the capital of the canton of Valais at
          the heart of the Swiss alps. Our office at walking distance from the
          train station and the Valais campus of EPFL."
        image="/images/sion.jpg"
      />
      <Team people={team} />
    </Layout>
  );
}
