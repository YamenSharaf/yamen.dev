---
title: Configuring Private DNS on Android TV
slug: configure-private-dns-android-tv
description: Step-by step guide to configuring Private DNS on Android TV
author: Yamen Sharaf
pubDatetime: 2022-02-19T15:22:00.000Z
modDatetime: 2024-09-15T09:12:47.400Z
featured: true
draft: false
tags:
  - DNS
  - Android TV
  - DNS Over TLS
  - Private DNS
---

If you're concerned about online privacy and security, setting up private DNS settings on your Android TV can be an effective way to enhance your experience. Although these settings are hidden by default, they do exist under the hood and can be accessed using the Android Debug Bridge (ADB).

To configure private DNS on your Android TV, follow these steps:

1. Enable developer options on your Android TV by going to **`Settings -> About -> Build`** and tapping on the build number seven times. Then, enable USB debugging in Developer Options.
2. Connect your Android TV to your computer using a USB cable and open a terminal or command prompt on your computer.
3. Use ADB to set up a private DNS server by entering the command

 

```shell
adb shell settings put global private_dns_mode hostname
```

Followed by

```shell
settings put global private_dns_specifier one.one.one.one
```

Replace `one.one.one.one` with the DNS  with the DoT (DNS over TLS) address of your preferred private DNS server. **`one.one.one.one`** is for CloudFlare.

4\. Use the command **`adb shell settings get global private_dns_mode`** to check that the private DNS server is set up correctly.

5\. Disconnect your Android TV from your computer.

There are several private DNS providers to choose from, such as Cloudflare, Google, OpenDNS, and AdGuard. However, not all private DNS servers may be compatible with Android TV, and some apps may not work correctly with private DNS settings. If you experience connectivity issues, try using a different private DNS server or revert to your ISP's DNS server.

By encrypting your DNS requests, private DNS servers can help protect you from third-party tracking and censorship. Although the process of setting up private DNS settings on Android TV may seem technical, it's a worthwhile step to take for enhanced online privacy and security.
