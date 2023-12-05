import { Anchor, Heading, Image } from 'grommet';
import React from 'react';
import { AppBar } from '../../components/AppBar';
import { Footer } from '../../components/Footer';
import { Paragraph } from '../../components/Paragraph';
import ContentWrapper from '../../shared/react-pure/ContentWrapper';
import Spacer from '../../shared/react-pure/Spacer';
import image from './how-to-implement-payment-to-your-product-1.png';

export function ImplementPayment() {
  return (
    <>
      <AppBar hasBack />
      <ContentWrapper>
        <Heading>How to implement payment to your product?</Heading>
        <Paragraph>2023-04-10</Paragraph>

        <Paragraph>
          I am building{' '}
          <Anchor label="Watcher37" href="https://watcher37.encrypt37.com" target="_blank" /> and{' '}
          <Anchor label="Link37" href="https://link37.encrypt37.com" target="_blank" />, and I want
          to add payment functionality to them. But I also don't want to spend too much time on
          this.
        </Paragraph>

        <Paragraph>
          The first solution I tried is using ko-fi, I set up a shop there, and added 5 tickets.
          After you buy a ticket, you will get a txt file containing a ticket id. Then you can use
          the id in Watcher37 or Link37 to finish the payment. In the backend I will update the
          expiresAt of your account to 1 year later.
        </Paragraph>

        <Paragraph>
          This is ok, but not scalable. I need to manually add it for every ticket. (And they charge
          a small 5% fee for each transaction).
        </Paragraph>

        <Paragraph>
          Then I got an email from buy me a coffee, that they are releasing webhook feature. So I
          can set up a shop there, create an endpoint in my backend, and when someone buys a ticket,
          buymeacoffee will send a request to my endpoint, and I can update the expiresAt of the
          user's account. Sounds good.
        </Paragraph>

        <Paragraph>
          But when users buy ticket from the shop, I don't have their user id. I thought for sure
          there is a text area at checkout, so I can ask users to leave their user id there, and the
          webhook can extract it from the request body. It's not nice but I can live with it. But
          there isn't, you can leave nothing when checkout in buymeacoffee's shop.
        </Paragraph>

        <Paragraph>
          Finally, I tell myself, let's not be lazy, maybe just check Stripe. And it turns out
          stripe also has something similar to everyone else's shop feature, they call it{' '}
          <Anchor
            label="payment links"
            href="https://stripe.com/docs/payment-links"
            target="_blank"
          />{' '}
          , no code solution, supports webhook, and you can add custom fields!
        </Paragraph>
        <Paragraph>Super easy to setup, in the end it looks like this for me:</Paragraph>

        <Image src={image} width={'100%'} />

        <Spacer />
        <Paragraph>
          Hope this helps, and give{' '}
          <Anchor label="Watcher37" href="https://watcher37.encrypt37.com" target="_blank" /> and{' '}
          <Anchor label="Link37" href="https://link37.encrypt37.com" target="_blank" /> a try :)
        </Paragraph>

        <Footer />
      </ContentWrapper>
    </>
  );
}
