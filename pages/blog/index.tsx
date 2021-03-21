import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="max-w-7xl mx-auto pt-8">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Developers real-world experience.
          </p>
        </div>
        {allPostsData.map(({ id, title, excerpt, author, date, image }) => (
          <Link href={`/blog/${encodeURIComponent(id)}`} key={id}>
            <a>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-2xl">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img
                      className="h-96 w-full object-cover"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        Article
                      </p>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
