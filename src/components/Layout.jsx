import { Button, Divider } from '@douyinfe/semi-ui';
import { RiBeerLine, RiMailLine, RiParenthesesLine } from '@remixicon/react';
import Head from 'next/head';
import React from 'react';

import { AppWrapper } from './AppWrapper';
import { Flex } from './Flex';
import { Link } from './Link';
import { Section } from './Section';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <title>Peng</title>
        <meta name="description" content="I build stuff." />
        <meta
          name="keywords"
          content="easyy.click, notenote.cc, remiind.cc, soundice.net, encryption, end to end encryption, e2e encryption, e2e, frequently used, link, note, bookmarks, read it later, clipboard, clipboard manager, privacy, lifetime deal"
        />

        <link rel="apple-touch-icon" sizes="57x57" href="/icons/icon-57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/icon-60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/icon-76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/icon-114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16.png" />
        <meta name="msapplication-TileImage" content="/icons/icon-144.png" />
        <meta name="msapplication-TileColor" content="#006400" />
        <meta name="theme-color" content="#006400" />
      </Head>

      <AppWrapper>
        {children}

        <Divider style={{ margin: '4rem 0 1rem' }} />

        <Section p="0 0.5rem 2rem">
          <Flex align="start" gap="0.75rem">
            <Link href="https://buy.stripe.com/14k3fYcz633kb2oeV1" target="_blank">
              <Button theme="outline" icon={<RiBeerLine />}>
                Buy me a beer
              </Button>
            </Link>

            <Link href="https://blog.peng37.com" target="_blank">
              <Button theme="outline" icon={<RiParenthesesLine />}>
                Blog
              </Button>
            </Link>

            <Button theme="outline" icon={<RiMailLine />}>
              Contact: peng@tuta.com
            </Button>
          </Flex>
        </Section>
      </AppWrapper>
    </>
  );
};

export default Layout;
