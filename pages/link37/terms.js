import { Heading, Text } from 'grommet';

import Layout from '../../components/layout';
import Link37Footer from '../../components/Link37Footer';
import NextLink from '../../components/NextLink';
import { contactEmail } from '../../shared/js/constants';

export default function Terms() {
  return (
    <Layout
      hasBack
      backPath="/link37"
      title="Link37: Terms"
      footer={<Link37Footer />}
    >
      <Heading margin="1rem 0">Link37 terms</Heading>

      <Text>1. You can try Link37 14 days for free;</Text>

      <Text margin="1rem 0 0">
        2. You can buy tickets to continue using Link37;
      </Text>

      <Text margin="1rem 0 0">
        3. After your account is expired, you can't view your links;
      </Text>

      <Text margin="1rem 0 0">
        4. After a payment is made, it won't be possible to refund;
      </Text>

      <Text margin="1rem 0 0">
        Contact me for anything:{" "}
        <NextLink href={`mailto:${contactEmail}`} target="_blank">
          contactEmail
        </NextLink>
      </Text>
    </Layout>
  );
}
