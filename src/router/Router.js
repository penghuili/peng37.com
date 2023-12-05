import React from 'react';
import { Redirect, Route, Switch } from 'wouter';
import { ImplementPayment } from '../views/Blog/20230410-how-to-implement-payment-to-your-product';
import { CloudWatchEvery3DaysAt8AM } from '../views/Blog/20231111-cloudwatch-every-3-days-at-8-am';
import { Blogs } from '../views/Blog/Blogs';
import { Contact } from '../views/Contact';
import { Home } from '../views/Home';

function Router() {
  return (
    <Switch>
      <Route path="/contact" component={Contact} />

      <Route
        path="/blog/20231111-cloudwatch-every-3-days-at-8-am"
        component={CloudWatchEvery3DaysAt8AM}
      />
      <Route
        path="/blog/20230410-how-to-implement-payment-to-your-product"
        component={ImplementPayment}
      />
      <Route path="/blog" component={Blogs} />

      <Route path="/" component={Home} />
      <Route>{() => <Redirect to="/" />}</Route>
    </Switch>
  );
}

export default Router;
