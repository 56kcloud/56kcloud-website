import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "../../components/layout";
import Date from "../../components/date";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="relative py-16 overflow-hidden bg-white">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <h1>
              <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
                {postData.title}
              </span>
            </h1>
            <div className="mt-3 text-sm text-center">
              <Date dateString={postData.date} />
            </div>
          </div>
          <div
            className="mx-auto mt-6 prose prose-lg text-gray-500 prose-blue"
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
