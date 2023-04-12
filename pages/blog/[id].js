import { format } from "date-fns";
import { Heading, Text } from "grommet";
import { LinkPrevious } from "grommet-icons";

import Layout from "../../components/layout";
import NextLink from "../../components/NextLink";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Spacer from "../../shared/react-pure/Spacer";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout
      title={postData.title}
      ogType="article"
      ogImage={postData.previewImage}
    >
      <Spacer />
      <NextLink href="/blog">
        <LinkPrevious />
      </NextLink>
      <Heading margin="1rem 0">{postData.title}</Heading>
      <Text>{format(new Date(postData.date), "yyyy-MM-dd")}</Text>
      <div
        className="peng-blog"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Layout>
  );
}
