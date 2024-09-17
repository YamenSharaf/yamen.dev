---
title: Allowing Unverified Apps on MacOS without disabling SIP
slug: allowing-unverified-apps-on-mac-os-without-disabling-sip
description: >-
  Apple won't let you verify apps from unknown origin without disabling System
  Integrity Protection globally, here's how to bypass it
author: Yamen Sharaf
pubDatetime: 2024-09-16T22:00:00.000Z
modDatetime: 2024-09-16T22:00:00.000Z
featured: true
draft: false
tags:
  - apple
  - sip
  - macos
---

Sometimes you want to allow an unverified app for one reason or another, but don't want to turn off SIP (System Integrity Protection) globally for one reason or another. You might not have permission to do so on a provisioned machine for instance.

In cases like these, I found it useful to override this behavior using this method, since I found it works right away and doesn't require a system restart.

Run this in the terminal while specifying the app location

```shell
sudo xattr -r -d com.apple.quarantine /Applications/APP_NAME.app
```
