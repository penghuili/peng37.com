---
title: "Debug with browser developer tools on Android"
date: "2023-02-26"
previewImage: "https://peng37.com/images/blog/debug-with-browser-developer-tools-on-android-1.avif"
---

I am building [Watcher37](https://watcher.peng37.com/), a key step is to find the CSS selector of an element.

It's super easy to [do this on a computer](https://watcher.peng37.com/selector) with browser dev tools.

It turns out, it's also possible to do the same with your Android phone, for example, using the [Kiwi browser](https://kiwibrowser.com/).

This is how I do it:

1. Download the kiwi browser, open a website, then open the settings menu, and tap "Developer tools". The dev tools will be opened in a new tab; 

![](/images/blog/debug-with-browser-developer-tools-on-android-1.avif)

2. Go to that new tab, you will see almost the same dev tools on your computer, you can start playing around;

![](/images/blog/debug-with-browser-developer-tools-on-android-2.avif)

3. For my case, I need to find the selector of an element. Firstly, tap the 3 dots of the "body" element, then tap "Expand recursively", it will expand all elements;

![](/images/blog/debug-with-browser-developer-tools-on-android-3.avif)

4. Then find the element you are interested in, tap the 3 dots of that element, then tap "Copy" -> "Copy selector". Now you copied the selector.

![](/images/blog/debug-with-browser-developer-tools-on-android-4.avif)

---

Have fun debugging on your android, and give [Watcher37](https://watcher.peng37.com/) a try.