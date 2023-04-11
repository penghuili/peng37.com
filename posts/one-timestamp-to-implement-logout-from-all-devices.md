---
title: "One timestamp to implement \"Logout from all devices\""
date: "2023-03-02"
---

I use jwt token to protect my backend endpoints, it works this way:

1. Users log in with username and password, and they get a refresh token (valid for 30 days) and an access token (valid for 5 min);
2. Every time users make a request to the protected endpoints, the access token will be sent in the "Authorization" header;
3. Backend with validate the access token in the header, and allow the request if it's valid;
4. Since the access token is only valid for 5 min, it's very easy to become invalid. Now the refresh token comes to play. After the access token is invalid, or shortly before it's invalid, a request is made, with the refresh token in the body, to get a new pair of tokens. Then users can continue making requests;
5. When users logout, frontend will remove the token pair from the device;

So far so good.

But users can log in on different devices, at the same time.

If users log out from one device, they are still logged in on other devices.

How to implement the "Logout from all devices" fancy but basic feature?

I always thought this is a very complicated topic. But it isn't.

All we need is a timestamp in the user DB, let's call it "validTokenFrom". It means, for all tokens that are created before this timestamp, we say, they are invalid.

It works this way:

1. We first update the access token validation logic, to check, if the issue time is after "validTokenFrom". If yes, then we continue to check if the token is valid, if not, we return 401 directly;
2.  Now users click the "Logout from all devices" button, a request is made to set the "validTokenFrom" to now, and we log the users out from this device;
3. When users check the other devices, the access token and refresh token are for sure issued before this new "validTokenFrom", so the validator in the backend will return 401.

What do you think?

---

The project is open-sourced: [https://github.com/penghuili/auth](https://github.com/penghuili/auth).

And check out the "Logout from all devices" button in my project, [Watcher37](https://watcher37.peng.kiwi/) and [Link37](https://link37.peng.kiwi/).