---
title: "How to implement payment to your product?"
date: "2023-04-10"
---

I am building [Watcher37](https://watcher37.peng.kiwi/) and [Link37](https://link37.peng.kiwi/), and I want to add payment functionality to them. But I also don't want to spend too much time on this.

The first solution I tried is using [ko-fi](https://ko-fi.com/), I set up a shop there, and added 5 tickets. After you buy a ticket, you will get a txt file containing a ticket id. Then you can use the id in Watcher37 or Link37 to finish the payment. In the backend I will update the `expiresAt` of your account to 1 year later.

This is ok, but not scalable. I need to manually add it for every ticket. (And they charge a small 5% fee for each transaction).

Then I got an email from [buy me a coffee](https://www.buymeacoffee.com/), that they are releasing webhook feature. So I can set up a shop there, create an endpoint in my backend, and when someone buys a ticket, buymeacoffee will send a request to my endpoint, and I can update the `expiresAt` of the user's account. Sounds good.

But when users buy ticket from the shop, I don't have their user id. I thought **for sure** there is a text area at checkout, so I can ask users to leave their user id there, and the webhook can extract it from the request body. It's not nice but I can live with it. But there isn't, you can leave nothing when checkout in buymeacoffee's shop.

Finally, I tell myself, let's not be lazy, maybe just check Stripe. And it turns out stripe also has something similar to everyone else's shop feature, they call it [payment links](https://stripe.com/docs/payment-links), no code solution, supports webhook, and you can add custom fields!

Super easy to setup, in the end it looks like this for me:

![Stripe payment link](/images/blog/how-to-implement-payment-to-your-product-1.png)

And for the webhook, mine looks like this:

---
```js
  import Stripe from 'stripe';

  const stripe = new Stripe(process.env.STRIPE_SECRET);

  async stripe(request) {
    const payload = request.rawBody;
    const sig =
      request.headers['stripe-signature'] ||
      request.headers['Stripe-Signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.log('stripe_error', err);
      return { message: 'invalid stripe signature' };
    }

    if (event.type === 'checkout.session.completed') {
      const userId = event?.data?.object?.custom_fields?.[0]?.text?.value;
      const email = event?.data?.object?.customer_details?.email;
      const productId = event?.data?.object?.custom_fields?.[0]?.key;

      if (!userId || !email || !productId) {
        return { message: 'invalid user data' };
      }

      // Update data in your DB

      return { message: 'success' };
    }

    return { message: `unhandled error type: ${event.type}` };
  }

```
---

Hope this helps, and give [Watcher37](https://watcher37.peng.kiwi/) and [Link37](https://link37.peng.kiwi/) a try :)

Btw, I am using [claudiajs](https://www.claudiajs.com/) for my backend.