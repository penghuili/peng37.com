import React from 'react';
import { AppBar } from '../../components/AppBar';
import { Footer } from '../../components/Footer';
import { Paragraph } from '../../components/Paragraph';
import ContentWrapper from '../../shared/react-pure/ContentWrapper';
import RouteLink from '../../shared/react/RouteLink';

export function Blogs() {
  return (
    <>
      <AppBar title="Blogs" hasBack />
      <ContentWrapper>
        <Paragraph>
          <RouteLink
            label={`Schedule "every 3 days at 8:00" with AWS CloudWatch`}
            to="/blog/20231111-cloudwatch-every-3-days-at-8-am"
            margin="0 1rem 0 0"
          />
          2023-11-11
        </Paragraph>

        <Paragraph>
          <RouteLink
            label={`How to implement payment to your product?`}
            to="/blog/20230410-how-to-implement-payment-to-your-product"
            margin="0 1rem 0 0"
          />
          2023-04-10
        </Paragraph>

        <Footer />
      </ContentWrapper>
    </>
  );
}
