import { Heading } from "grommet";
import { useEffect } from "react";

import IFrame from "../components/IFrame";
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

export default function Home({ allPostsData }) {
  useEffect(() => {
    window.addEventListener("message", messageListner);
    return () => window.removeEventListener("message", messageListner);
  }, []);

  return (
    <Layout>
      <Heading margin="2rem 0">
        I build stuff for <strong>You</strong>,<br />I also use them.
      </Heading>

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2023-02-26"
        logo="/images/link37.png"
        link="https://link37.peng.kiwi"
        name="Link37"
        pitch="Your browser's start page, encrypted."
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
        pitch="Get notified when web pages change, encrypted."
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

      <Spacer size="120px" />
      <Divider />
      <Spacer size="120px" />

      <Product
        date="2022-08-14"
        logo="/images/precloud.png"
        link="https://github.com/penghuili/PreCloud"
        name="PreCloud"
        pitch="Encrypt before upload."
        huntName="precloud"
        huntId="355893"
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2021-11-02"
        logo="/images/glyph.png"
        link="https://glyph.peng.kiwi"
        name="Glyph"
        pitch="Art like the famous Autoglyph."
        huntName="glyph-4"
        huntId="320262"
      />
      <Spacer size="1rem" />
      <IFrame
        src="https://glyph.peng.kiwi/embed"
        width={290}
        innerWidth={290}
        height={314}
        title="glyph.peng.kiwi"
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2021-10-02"
        logo="/images/wikiart.png"
        link="https://art.peng.kiwi"
        name="Wikiart"
        pitch="250.000 artworks in one place."
      />
      <Spacer size="1rem" />
      <IFrame
        src="https://art.peng.kiwi/embed"
        width={290}
        innerWidth={290}
        height="auto"
        id="art_peng_kiwi"
        title="art.peng.kiwi"
      />

      <Spacer size="48px" />
      <Divider />
      <Spacer size="48px" />

      <Product
        date="2021-10-02"
        logo="/images/paint-with-code.png"
        link="https://paintwithcode.peng.kiwi"
        name="Paint with codes"
        huntName="codify-images"
        huntId="318634"
      />
    </Layout>
  );
}
