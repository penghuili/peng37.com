import { Anchor, Heading } from 'grommet';
import React from 'react';
import { AppBar } from '../../components/AppBar';
import { Footer } from '../../components/Footer';
import { Paragraph } from '../../components/Paragraph';
import ContentWrapper from '../../shared/react-pure/ContentWrapper';
import Divider from '../../shared/react-pure/Divider';
import Spacer from '../../shared/react-pure/Spacer';

export function CloudWatchEvery3DaysAt8AM() {
  return (
    <>
      <AppBar hasBack />
      <ContentWrapper>
        <Heading>Schedule "every 3 days at 8:00" with AWS CloudWatch</Heading>
        <Paragraph>2023-11-11</Paragraph>

        <Paragraph>AWS CloudWatch has 2 kinds of schedule, rate and cron.</Paragraph>

        <Paragraph>
          With rate, you can schedule things like "every 3 minutes" or "every 3 days", but the
          schedule starts the moment it setup;
        </Paragraph>

        <Paragraph>
          With cron, you can schedule things like "every day at 8:00" or "every 2nd day of a month
          at 8:00" or "every Monday at 8:00";
        </Paragraph>

        <Paragraph>But neither can do "every 3 days at 8:00".</Paragraph>

        <Paragraph>To achieve this, you can combine both.</Paragraph>

        <Paragraph>
          Use cron to create a 1 time schedule, like cron(0 8 11 11 ? 2023), this will trigger a
          lambda function 1, at 2023-11-11T08:00:00.000Z; Lambda function 1 will schedule a rate
          schedule, like rate(3 days). Since it's created at 8:00, it will trigger whatever you it's
          meant for, every 3 days at 8:00;
        </Paragraph>
        <Paragraph>Misson achieved.</Paragraph>

        <Divider />
        <Spacer />

        <Paragraph>
          I implemented this for{' '}
          <Anchor label="Watcher37" href="https://watcher37.encrypt37.com" target="_blank" />, try
          it out.
        </Paragraph>

        <Footer />
      </ContentWrapper>
    </>
  );
}
