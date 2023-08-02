import { Heading } from "grommet";
import { LinkPrevious } from "grommet-icons";

import Layout from "../components/layout";
import NextLink from "../components/NextLink";
import Spacer from "../shared/react-pure/Spacer";

export default function Custom404() {
  return (
    <Layout hasBack title="Page Not Found - peng37.com">
      <Heading margin="1rem 0">404 - Page Not Found</Heading>
    </Layout>
  );
}
