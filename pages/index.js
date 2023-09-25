import { Heading } from "grommet";

import Layout from "../components/layout";
import Product from "../components/Product";
import Divider from "../shared/react-pure/Divider";
import Spacer from "../shared/react-pure/Spacer";

export default function Home() {
  return (
    <Layout>
      <Heading margin="2rem 0 0">
        Do you feel comfortable sending your personal data to their servers,
        without encryption?
      </Heading>

      <Heading level="2" margin="2rem 0 0">
        Everything below encrypts all your data. No one can read it but you.
      </Heading>

      <Spacer size="4rem" />
      <Divider />
      <Spacer size="2rem" />

      <Product
        date="2023-09-10"
        logo="/images/file37.png"
        link="https://file.peng37.com/"
        name="File37"
        pitch="Cloud storage. Encrypted."
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2023-07-24"
        logo="/images/note37.png"
        link="https://note.peng37.com/"
        name="Note37"
        pitch="Rich text notes. Encrypted."
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2023-07-31"
        logo="/images/friend37.png"
        link="https://friend.peng37.com/"
        name="Friend37"
        pitch="Keep friends. Encrypted."
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2023-02-26"
        logo="/images/link37.png"
        link="/link37/"
        linkTarget="_self"
        name="Link37"
        pitch="Your browser's start page. Encrypted."
        huntName="link37"
        huntId="381785"
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2023-02-08"
        logo="/images/watcher37.png"
        link="https://watcher.peng37.com"
        name="Watcher37"
        pitch="Get notified when web pages change. Encrypted."
        huntName="pagewatcher"
        huntId="378493"
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2022-12-18"
        logo="/images/encrypt37.jpg"
        link="https://github.com/penghuili/Encrypt37"
        name="Encrypt37"
        pitch="Encrypt and share."
      />
    </Layout>
  );
}
