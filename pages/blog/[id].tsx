import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "../../components/layout";
import Date from "../../components/date";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({
  postData,
}: {
  postData: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
    contentHtml: string;
  };
}) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{"Edeltech | " + postData.title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.excerpt} />
        <meta
          property="og:image"
          content={"https://www.edeltech.ch" + postData.image}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="edeltech.ch" />
        <meta
          property="twitter:url"
          content={"https://www.edeltech.ch" + router.asPath}
        />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.excerpt} />
        <meta
          name="twitter:image"
          content={"https://www.edeltech.ch" + postData.image}
        />
      </Head>
      <article className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="block mt-2 text-center text-gray-900 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl">
                {postData.title}
              </span>
            </h1>
            <div className="mt-3 text-center text-sm">
              {postData.author}
              <br />
              <Date dateString={postData.date} />
            </div>
          </div>
          <div
            className="prose prose-lg prose-blue mt-6 mx-auto text-gray-500"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          ></div>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
