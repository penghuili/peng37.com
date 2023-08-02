import { Heading } from "grommet";
import { useEffect } from "react";

import Layout from "../components/layout";
import Product from "../components/Product";
import Divider from "../shared/react-pure/Divider";
import Spacer from "../shared/react-pure/Spacer";

function messageListner(e) {
  if (e.data.source === "art.peng.kiwi") {
    const id = "#art_peng_kiwi";
    const iframe = document.querySelector(id);
    iframe.style.height = `${e.data.height}px`;
  }
}

export default function Home() {
  useEffect(() => {
    window.addEventListener("message", messageListner);
    return () => window.removeEventListener("message", messageListner);
  }, []);

  return (
    <Layout>
      <Heading margin="2rem 0 0">
        Do you feel comfortable sending your personal data to their servers,
        without encryption?
      </Heading>

      <Spacer size="4rem" />
      <Divider />
      <Spacer size="2rem" />

      <Product
        date="2023-07-31"
        logo="/images/friend37.png"
        link="https://friend37.peng.kiwi/"
        name="Friend37"
        pitch="Keep friends. Encrypted."
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2023-07-24"
        logo="/images/often37.png"
        link="https://often37.peng.kiwi/"
        name="Often37"
        pitch="Know how often things happen. Encrypted."
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2023-02-26"
        logo="/images/link37.png"
        link="/link37"
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
        link="https://watcher37.peng.kiwi"
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
