---
title: Configuring Private DNS on Android TV
slug: configure-private-dns-android-tv
description: Step-by step guide to configuring Private DNS on Android TV
author: Yamen Sharaf
pubDatetime: 2022-02-19T15:22:00.000Z
modDatetime: 2024-10-02T09:12:47.400Z
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

## Connect to TV

### Wired

1. Enable developer options on your Android TV by going to **`Settings -> About -> Build`** and tapping on the build number seven times. Then, enable USB debugging in Developer Options.
2. Connect your Android TV to your computer using a USB cable and open a terminal or command prompt on your computer.
3. On your computer run `adb devices`, here you might be prompted on your TV to accept the connection.
4. Run `adb shell` to start executing commands on your TV.

### Wireless

1. Make sure your computer and Android TV are on the **same Wi-Fi network**.
2. Find the IP Address of your Android TV:
   • Go to Settings > Network & Internet.
   • Select your current network to view the IP address.
   • Note down the IP address of your TV.
3. Enable developer options on your Android TV by going to **`Settings -> About -> Build`** and tapping on the build number seven times. Then, enable **USB Debugging** and **Network Debugging** in Developer Options.
4. On your computer, run

```shell
adb connect <ANDROID_TV_IP_ADDRESS>:5555
```

5. On your computer run :

```shell
adb devices
```

here you might be prompted on your TV to accept the connection.

6. Run

```shell
adb shell
```

to start executing commands on your TV.

## Set up DNS Server

1. Use ADB to set up a private DNS server by entering the command

```shell
settings put global private_dns_mode hostname
```

2. Followed by

```shell
settings put global private_dns_specifier one.one.one.one
```

Replace `one.one.one.one` with the DNS with the DoT (DNS over TLS) address of your preferred private DNS server. **`one.one.one.one`** is for CloudFlare.

> If you encounter an error executing these commands, try typing them manually.

## Verify and Disconnect

1. Use the command

```shell
settings get global private_dns_mode
settings get global private_dns_specifier
```

to verify that the private DNS server is set up correctly and the settings are reflected.

2. Disconnect your Android TV from your computer:

```shell
adb disconnect
```

There are several private DNS providers to choose from, such as Cloudflare, Google, OpenDNS, and AdGuard. However. My personal favorite is the paid DNS service [Control D](https://controld.com/).

By encrypting your DNS requests, private DNS servers can help protect you from third-party tracking and censorship. Although the process of setting up private DNS settings on Android TV may seem technical, it's a worthwhile step to take for enhanced online privacy and security.
