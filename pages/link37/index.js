import { Heading, Text } from "grommet";
import Image from "next/image";

import Layout from "../../components/layout";
import { colors } from "../../lib/constants";
import Divider from "../../shared/react-pure/Divider";
import HorizontalCenter from "../../shared/react-pure/HorizontalCenter";
import NextLink from "../../components/NextLink";
import Spacer from "../../shared/react-pure/Spacer";
import Link37Footer from "../../components/Link37Footer";

const pitch = "Your browser's start page, encrypted.";

export default function Link37() {
  return (
    <Layout title={`Link37: ${pitch}`} footer={<Link37Footer />}>
      <HorizontalCenter margin="2rem 0 0">
        <Image src="/images/link37.png" width={48} height={48} />
        <Heading color={colors.link37} margin="0 0 0 1rem">
          Link37
        </Heading>
      </HorizontalCenter>
      <Heading level={3} margin="0 0 1rem">
        {pitch}
      </Heading>
      <NextLink
        href="https://link37.peng.kiwi/"
        target="_blank"
        style={{
          color: colors.link37,
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Start &gt;&gt;
      </NextLink>

      <Spacer size="4rem" />
      <Divider />
      <Spacer size="2rem" />

      <Heading level={3} margin="0 0 0.5rem">
        All your favorite links in one place
      </Heading>
      <Text>
        Check an{" "}
        <NextLink href="https://link37.peng.kiwi/p/szrPwXfCnIp" target="_blank">
          example
        </NextLink>
      </Text>

      <Spacer size="2rem" />
      <Divider />
      <Spacer size="2rem" />

      <Heading level={3} margin="0 0 0.5rem">
        All your content is end-to-end encrypted
      </Heading>
      <Text>
        Only you can decrypt it, see{" "}
        <NextLink href="/link37/encryption" target="_blank">
          how it works
        </NextLink>
      </Text>

      <Spacer size="2rem" />
      <Divider />
      <Spacer size="2rem" />

      <Heading level={3} margin="0 0 0.5rem">
        Make your page public to share it with friends and colleagues
      </Heading>
      <Text>
        The{" "}
        <NextLink href="https://link37.peng.kiwi/p/szrPwXfCnIp" target="_blank">
          example
        </NextLink>{" "}
        above is a public page
      </Text>

      <Spacer size="2rem" />
      <Divider />
      <Spacer size="2rem" />

      <Heading level={3} margin="0 0 0.5rem">
        No more bookmarks!
      </Heading>
      <Text>Bookmarks are hard to use:</Text>
      <Text margin="0.5rem 0 0">1. Hard to migrate between browsers;</Text>
      <Text margin="0.5rem 0 0">2. Hard to share;</Text>
      <Text margin="0.5rem 0 0">
        3. Hard to organize, makes your browser top bar messy;
      </Text>
      <Text margin="0.5rem 0 0">
        4. Your links are saved in big companies' servers, without encryption;
      </Text>

      <Spacer size="2rem" />
      <Divider />
      <Spacer size="2rem" />

      <Heading level={3} margin="0 0 0.5rem">
        No tracking, No ads, Never sell your data
      </Heading>

      <Spacer size="2rem" />
      <Divider />
      <Spacer size="4rem" />

      <Heading margin="0">Pricing</Heading>
      <Text margin="0.5rem 0 0">
        14 days free trial, then it's only{" "}
        <Text color={colors.link37} size="2rem">
          $19/Year
        </Text>
      </Text>

      <Spacer size="2rem" />

      <NextLink
        href="https://link37.peng.kiwi/"
        target="_blank"
        style={{
          color: colors.link37,
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Start &gt;&gt;
      </NextLink>
    </Layout>
  );
}
