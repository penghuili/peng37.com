import { Box, Heading } from 'grommet';
import { LinkPrevious, MailOption, Twitter } from 'grommet-icons';

import Layout from '../components/layout';
import NextLink from '../components/NextLink';
import HorizontalCenter from '../shared/react-pure/HorizontalCenter';
import Spacer from '../shared/react-pure/Spacer';

export default function Contact() {
  return (
    <Layout hasBack title="Contact - peng37.com">
      <Heading margin="1rem 0">Contact</Heading>

      <HorizontalCenter>
        <MailOption />
        <Box width="1rem" /> peng37@proton.me
      </HorizontalCenter>
      <HorizontalCenter margin="1rem 0 0">
        <Twitter />
        <Box width="1rem" />
        <NextLink href="https://twitter.com/peng37com/" target="_blank">
          peng37com
        </NextLink>
      </HorizontalCenter>
    </Layout>
  );
}
