---
title: 'Encrypt37: How encryption works here?'
---

I use the famous [openpgpjs](https://github.com/openpgpjs/openpgpjs) algorithm (used by [Proton](https://proton.me/) to
do the end-to-end encryption. See what is PGP [here](https://proton.me/blog/what-is-pgp-encryption).

## When you signup:

1. Your device generates a public & private key pair.
2. Then your device encrypts the private key with your password;
3. Then your device sends your username, public key, encrypted private key to server; 

**Your password never leaves your device!!!**

Most websites send your password in plain text to their server, like Google, Facebook, X etc.

## When you sign in:

1. Your device makes a request with your username to get your public key, encrypted private key, and a challenge encrypted with your public key;
2. Your device decrypts the encrypted private key with your password;
3. Then it uses the decrypted private key to decrypt the challenge, and send the decrypted challenge to server;
4. Server checks if the challenge is solved, if yes, it will return an access token and a refresh token back to your device, and you are logged in.

So again, **your password never leaves your device!!!**

## When you send some texts or files:

1. Your device generates a strong password;
2. Then your device encrypts the texts or files with this password;
3. Then your device encrypts this password with your public key;
4. Then your device sends the encrypted texts or files and the encrypted password to server;

## When you fetch some texts or files:

1. Your device gets the encrypted texts or files and the encrypted password from server;
2. Your device decrypts the encrypted password with your private key;
3. Then your device decrypts the encrypted texts or files with the decrypted password;
