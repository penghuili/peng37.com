import { Anchor, Heading, Image, Text } from 'grommet';
import React from 'react';
import encrypt37Logo from '../assets/encrypt37.png';
import link37Logo from '../assets/link37.png';
import watcher37Logo from '../assets/watcher37.png';
import { Footer } from '../components/Footer';
import ContentWrapper from '../shared/react-pure/ContentWrapper';
import Divider from '../shared/react-pure/Divider';
import HorizontalCenter from '../shared/react-pure/HorizontalCenter';
import Spacer from '../shared/react-pure/Spacer';

export function Home() {
  return (
    <>
      <ContentWrapper>
        <Heading level="2">I use encryption to build products.</Heading>

        <Divider />
        <Spacer />

        <HorizontalCenter>
          <Image src={encrypt37Logo} width="56px" />
          <Anchor
            label="Encrypt37"
            href="https://encrypt37.com"
            target="_blank"
            margin="0 0 0 1rem"
          />
        </HorizontalCenter>
        <Text>Safe corner for your words and files.</Text>

        <Spacer size="3rem" />

        <HorizontalCenter>
          <Image src={link37Logo} width="56px" />
          <Anchor
            label="Link37"
            href="https://link.encrypt37.com"
            target="_blank"
            margin="0 0 0 1rem"
          />
        </HorizontalCenter>
        <Text>Your browser's start page. Encrypted.</Text>

        <Spacer size="3rem" />

        <HorizontalCenter>
          <Image src={watcher37Logo} width="56px" />
          <Anchor
            label="Watcher37"
            href="https://watcher.encrypt37.com"
            target="_blank"
            margin="0 0 0 1rem"
          />
        </HorizontalCenter>
        <Text>Get notified when web pages change. Encrypted.</Text>

        <Footer />
      </ContentWrapper>
    </>
  );
}
