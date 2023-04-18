import { type NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "~/components/layout";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chirp T3 App</title>
      </Head>

      <PageLayout>
        <div>{}</div>
      </PageLayout>
    </>
  );
};

export default SinglePostPage;
