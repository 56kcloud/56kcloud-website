import Head from "next/head";
import Layout from "../components/layout";
import Team from "../components/team";
import { team } from "../data/team";
import { GetStaticProps } from "next";

export default function About({ people }) {
  return (
    <Layout>
      <Head>
        <title>Edeltech | About</title>
      </Head>
      <Team title="Team" description="Meet the team." people={people} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      people: team,
    },
  };
};
