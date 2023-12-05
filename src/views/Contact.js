import { Anchor, Paragraph } from 'grommet';
import React from 'react';
import { AppBar } from '../components/AppBar';
import ContentWrapper from '../shared/react-pure/ContentWrapper';

export function Contact() {
  return (
    <>
      <AppBar title="Contact" hasBack />
      <ContentWrapper>
        <Paragraph>
          Email: <Anchor label="peng@tuta.com" href="mailto:peng@tuta.com" target="_blank" />
        </Paragraph>

        <Paragraph>
          X: <Anchor label="peng37com" href="https://x.com/peng37com/" target="_blank" />
        </Paragraph>
      </ContentWrapper>
    </>
  );
}
