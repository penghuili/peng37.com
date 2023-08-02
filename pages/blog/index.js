import { format } from "date-fns";
import { Box, Heading, Text } from "grommet";

import Layout from "../../components/layout";
import NextLink from "../../components/NextLink";
import { getSortedPostsData } from "../../lib/posts";

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
    <Layout hasBack title="Blog - peng37.com">
      <Heading margin="1rem 0">Blog</Heading>

      {allPostsData.map(({ id, date, title }) => (
        <Box key={id} margin="0 0 1rem">
          <NextLink href={`/blog/${id}`} className="peng-blog-item">
            {title}
          </NextLink>
          <Text>{format(new Date(date), "yyyy-MM-dd")}</Text>
        </Box>
      ))}
    </Layout>
  );
}
