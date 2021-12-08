import Head from "next/head";
import Layout from "../../components/layout";
import Contact from "../../components/contact";
import Date from "../../components/date";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
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
        <title>Edeltech | Blog</title>
      </Head>
      <section className="mx-auto pt-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-gray-500 text-xl sm:mt-4">
            Developer life, tips and tricks.
          </p>
        </div>
        {allPostsData.map(({ id, title, excerpt, author, date, image }) => (
          <Link href={`/blog/${encodeURIComponent(id)}`} key={id}>
            <a>
              <div className="grid gap-5 mx-auto my-12 max-w-lg lg:grid-cols-1 lg:max-w-2xl">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img
                      className="w-full h-96 object-cover"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 bg-white">
                    <div className="flex-1">
                      <p className="text-blue-600 text-sm font-medium">
                        Article
                      </p>
                      <div className="block mt-2">
                        <p className="text-gray-900 text-xl font-semibold">
                          {title}
                        </p>
                        <p className="mt-3 text-gray-500 text-base">
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
      <Contact />
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
