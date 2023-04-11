import { format } from "date-fns";
import { Box, Heading, Text } from "grommet";
import { LinkPrevious } from "grommet-icons";

import Layout from "../../components/layout";
import NextLink from "../../components/NextLink";
import { getSortedPostsData } from "../../lib/posts";
import Spacer from "../../shared/react-pure/Spacer";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout title="Blog - peng.kiwi">
      <Spacer />
      <NextLink href="/">
        <LinkPrevious />
      </NextLink>
      <Heading margin="1rem 0">Blog</Heading>

      {allPostsData.map(({ id, date, title }) => (
        <Box key={id} margin="0 0 1rem">
          <NextLink href={`/blog/${id}`}>{title}</NextLink>
          <Text>{format(new Date(date), "yyyy-MM-dd")}</Text>
        </Box>
      ))}
    </Layout>
  );
}
