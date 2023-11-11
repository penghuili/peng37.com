---
title: 'Schedule "every 3 days at 8:00" with AWS CloudWatch'
date: 2023-11-11
backLabel: <
backUrl: /blog
---

AWS CloudWatch has 2 kinds of schedule, rate and cron.

With rate, you can schedule things like "every 3 minutes" or "every 3 days", but the schedule starts the moment it setup;

With cron, you can schedule things like "every day at 8:00" or "every 2nd day of a month at 8:00" or "every Monday at 8:00";

But neither can do "every 3 days at 8:00".

To achieve this, you can combine both.

1. Use cron to create a 1 time schedule, like cron(0 8 11 11 ? 2023), this will trigger a lambda function 1, at 2023-11-11T08:00:00.000Z;
2. Lambda function 1 will schedule a rate schedule, like rate(3 days). Since it's created at 8:00, it will trigger whatever you it's meant for, every 3 days at 8:00;

Misson achieved.

---

I implemented this for [Watcher37](https://watcher.encrypt37.com/), try it out.
