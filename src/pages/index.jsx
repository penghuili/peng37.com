import Divider from '@douyinfe/semi-ui/lib/es/divider';
import Image from '@douyinfe/semi-ui/lib/es/image';
import Typography from '@douyinfe/semi-ui/lib/es/typography';
import React from 'react';

import Layout from '../components/Layout';
import { Link } from '../components/Link';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';

export default function HomePage() {
  return (
    <Layout page="home">
      <PageHeader title="peng37.com" />

      <Section hasGrid p="3rem 0.5rem">
        <Product
          logo="/assets/easyy.png"
          link="https://easyy.click?ref=peng37"
          title="easyy.click"
          description="Manage frequently used links and notes."
        />

        <Product
          logo="/assets/notenote.png"
          link="https://notenote.cc?ref=peng37"
          title="notenote.cc"
          description="Instagram style note taking, encrypted."
        />

        <Product
          logo="/assets/remiind.png"
          link="https://remiind.cc?ref=peng37"
          title="remiind.cc"
          description="Revisit notes with emails."
        />
      </Section>

      <Divider style={{ margin: '6rem 0 2rem' }}>
        <Typography.Title heading={2}>Something free</Typography.Title>
      </Divider>

      <Section p="0 0.5rem">
        <Product
          logo="/assets/soundice.png"
          link="https://soundice.net?ref=peng37"
          title="Soundice"
          description="Get music or podcast randomly from your Spotify account."
        />

        <Product
          logo="https://moonfinder.live/icons/icon-192.png"
          link="https://moonfinder.live"
          title="Moon Finder"
          description="Little page that helps you find the moon."
        />

        <Product
          logo="/assets/encrypt37free.png"
          link="https://free.encrypt37.com?ref=peng37"
          title="Encrypt37"
          description="End-to-end encrypt text and files, and get raw result."
        />
      </Section>

      <Divider style={{ margin: '6rem 0 2rem' }}>
        <Typography.Title heading={2}>Open source</Typography.Title>
      </Divider>

      <Section p="0 0.5rem">
        <Product
          link="https://github.com/penghuili/usecat"
          title="usecat"
          description="😸The simplest react state manager. (only 2 functions)"
        />
        <Product
          link="https://github.com/penghuili/react-baby-router"
          title="react-baby-router"
          description="👶Such a simple react router."
        />
        <Product
          link="https://github.com/penghuili/parse-html-bookmarks"
          title="parse-html-bookmarks"
          description="Parse HTML bookmarks file for web apps."
        />
      </Section>
    </Layout>
  );
}

function Product({ logo, link, title, description }) {
  return (
    <div style={{ paddingBottom: '2rem' }}>
      {!!logo && (
        <Image
          src={logo}
          width={48}
          height={48}
          preview={false}
          style={{ marginRight: '0.5rem', display: 'block' }}
        />
      )}
      <Typography.Text strong>
        <Link href={link} target="_blank">
          {title}
        </Link>
        :{' '}
      </Typography.Text>
      <Typography.Text>{description}</Typography.Text>
    </div>
  );
}
