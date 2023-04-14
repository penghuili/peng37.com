import { Heading, Text } from 'grommet';

import Layout from '../../components/layout';
import Link37Footer from '../../components/Link37Footer';
import NextLink from '../../components/NextLink';

export default function Encryption() {
  return (
    <Layout
      hasBack
      backPath="/link37"
      title="Link37: How encryption works in Link37?"
      footer={<Link37Footer />}
      ogImage="/images/link37.png"
    >
      <Heading margin="1rem 0">How encryption works in Link37?</Heading>

      <Text>
        Link37 uses the famous{" "}
        <NextLink href="https://github.com/openpgpjs/openpgpjs" target="_blank">
          openpgpjs
        </NextLink>{" "}
        algorithm (used by{" "}
        <NextLink href="https://proton.me/" target="_blank">
          Proton
        </NextLink>
        ) to do the end-to-end encryption. See what is PGP{" "}
        <NextLink
          href="https://proton.me/blog/what-is-pgp-encryption"
          target="_blank"
        >
          here
        </NextLink>
        .
      </Text>

      <Heading level="3" margin="3rem 0 0">
        When you signup:
      </Heading>
      <Text margin="1rem 0 0">
        1. Your device generates a public & private key pair.
      </Text>
      <Text margin="1rem 0 0">
        2. Then your device encrypts the private key with your password;
      </Text>
      <Text margin="1rem 0 0">
        3. Then your device sends your username, public key, encrypted private
        key to server;
      </Text>
      <Text margin="1rem 0 0">
        <Text weight="bold" color="status-ok">
          Your password never leaves your device!!!
        </Text>{" "}
        Most websites send your password in plain text to their server, like
        Google, Facebook etc.
      </Text>

      <Heading level="3" margin="3rem 0 0">
        When you sign in:
      </Heading>
      <Text margin="1rem 0 0">
        1. Your device makes a request with your username to get your public
        key, encrypted private key, and a challenge encrypted with your public
        key;
      </Text>
      <Text margin="1rem 0 0">
        2. Your device decrypts the encrypted private key with your password;
      </Text>
      <Text margin="1rem 0 0">
        3. Then it uses the decrypted private key to decrypt the challenge, and
        send the decrypted challenge to server;
      </Text>
      <Text margin="1rem 0 0">
        4. Server checks if the challenge is solved, if yes, it will return an
        access token and a refresh token back to your device, and you are logged
        in. So again,{" "}
        <Text weight="bold" color="status-ok">
          your password never leaves your device!!!
        </Text>
      </Text>

      <Heading level="3" margin="3rem 0 0">
        When you create / update a page / link:
      </Heading>
      <Text margin="1rem 0 0">1. Your device generates a strong password;</Text>
      <Text margin="1rem 0 0">
        2. Then your device encrypts the page's / link's name, link, description
        with this password;
      </Text>
      <Text margin="1rem 0 0">
        3. Then your device encrypts this password with your public key;
      </Text>
      <Text margin="1rem 0 0">
        4. Then your device sends the encrypted contents to server, which will
        be saved in database;
      </Text>

      <Heading level="3" margin="3rem 0 0">
        When you make a page public:
      </Heading>
      <Text margin="1rem 0 0">
        1. Your device decrypts the password for this page with your private
        key, and sends the plain text password to server, which will be saved in
        database;
      </Text>
      <Text margin="1rem 0 0">
        2. When someone views this public page, he / she decrypts this page and
        its links with the plain text password, then he / she can view the page
        content;
      </Text>
    </Layout>
  );
}
