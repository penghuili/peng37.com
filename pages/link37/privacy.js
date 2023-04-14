import { Heading, Text } from "grommet";

import Layout from "../../components/layout";
import NextLink from "../../components/NextLink";
import { contactEmail } from "../../shared/js/constants";
import Link37Footer from "../../components/Link37Footer";

export default function Privacy() {
  return (
    <Layout
      hasBack
      backPath="/link37"
      title="Link37: Privacy"
      footer={<Link37Footer />}
      ogImage="/images/link37.png"
    >
      <Heading margin="1rem 0">Link37 privacy</Heading>
      <Text>
        1. Link37 encrypts your data by default. You can check how encryption
        works{" "}
        <NextLink href="/encryption" target="_blank">
          here
        </NextLink>
        .
      </Text>

      <Text margin="1rem 0 0">2. Link37 has no tracking;</Text>

      <Text margin="1rem 0 0">
        3. Link37 doesn't sell third party ads, and it never sells your data.
        Link37 makes money through paid customers.
      </Text>

      <Text margin="1rem 0 0">4. Link37 doesn't save your payment info;</Text>

      <Text margin="1rem 0 0">
        Contact me for anything:{" "}
        <NextLink href={`mailto:${contactEmail}`} target="_blank">
          contactEmail
        </NextLink>
      </Text>
    </Layout>
  );
}
