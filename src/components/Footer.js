import { Anchor } from 'grommet';
import React from 'react';
import Divider from '../shared/react-pure/Divider';
import HorizontalCenter from '../shared/react-pure/HorizontalCenter';
import Spacer from '../shared/react-pure/Spacer';
import RouteLink from '../shared/react/RouteLink';

export function Footer() {
  return (
    <>
      <Spacer size="3rem" />
      <Divider />
      <Spacer />
      <HorizontalCenter>
        <RouteLink label="Home" to="/" margin="0 1rem 0 0" />
        <RouteLink label="Blog" to="/blog" margin="0 1rem 0 0" />
        <RouteLink label="Contact" to="/contact" margin="0 1rem 0 0" />
        <Anchor
          label="Source code"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/penghuili/peng37.com"
          margin="0 1rem 0 0"
        />
        <Anchor
          label="🍺"
          target="_blank"
          rel="noopener noreferrer"
          href="https://buy.stripe.com/14k3fYcz633kb2oeV1"
          margin="0 1rem 0 0"
        />
      </HorizontalCenter>
    </>
  );
}
