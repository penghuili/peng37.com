---
title: Use end-to-end encryption to implement authentication
description: Use end-to-end encryption to implement authentication, without sending password to server.
date: 2023-03-04
backLabel: <
backUrl: /blog
---

For normal websites, when you signup, you need to send your email and plaintext password to the backend, then the backend hashes the password and saves it to DB. Google, Facebook, and Apple all do this.

I implement the auth for [Watcher37](https://watcher.encrypt37.com/) and [Link37](https://link.encrypt37.com/) in a different way, in an end-to-end encryption way, with the famous [openpgpjs](https://github.com/openpgpjs/openpgpjs) library (used by [Proton](https://proton.me/)). This is how it works.

## When you signup:

1. Your device generates a public & private key pair;
2. Then your device encrypts the private key with your password;
3. Then your device sends your username, public key, and encrypted private key to the server;

Your password never leaves your device!!!

## When you sign in:

1. Your device makes a request with your username to get your public key, encrypted private key, and a challenge encrypted with your public key;
2. Your device decrypts the encrypted private key with your password;
3. Then it uses the decrypted private key to decrypt the challenge, and send the decrypted challenge to the server;
4. Server checks if the challenge is solved, if yes, it will return an access token and a refresh token back to your device, and you are logged in.

So again, your password never leaves your device!!!

---

The project is open-sourced: [https://github.com/penghuili/auth](https://github.com/penghuili/auth).

And try [Watcher37](https://watcher.encrypt37.com/) and [Link37](https://link.encrypt37.com/) to see how it works in action :)
