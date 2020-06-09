---
path: "/help/faq"
language: en
date: "2020-06-09"
title: "Frequently asked questions"
---

## What operating systems are supported?

All versions of Windows and macOS operating systems that are supported by the manufacturer are supported. The application is tested on the latest version of Windows 10 and macOS 10.15 Catalina. The application should also run on current versions of popular Linux distributions. It is tested on Ubuntu 18.04.

Windows 7 is not officially supported, and signing options do not appear when started. To fix this, you need to install a newer version of PowerShell, which can be obtained from the optional [KB3191566](https://download.microsoft.com/download/6/F/5/6F5FF66C-6775-42B0-86C4-47D41F2DA187/Win7AndW2K8R2-KB3191566-x64.zip).

## Is the application suitable for use in communication with the state?

No, the application is not yet sufficiently adapted for use in communication with the state. When signing PDF files, you must make sure that it is in PDF/A format. Other formats are unlikely to be accepted. Because of interest from the community, this will be addressed in the future. For example, a direct connection with web applications of the Slovak Republic is currently being discussed at [platforma.slovensko.digital](https://platforma.slovensko.digital/t/jednoduchy-desktopovy-oss-na-podpisanie-a-overenie-podpisu/6878).

## Does the application collect and send data?

No, the application does not collect any data about signed files or any other sensitive data. The application does not have any servers that would be used for this purpose. Since the application is open-source, you can verify this by looking at the source code at [GitHub.com](https://github.com/durasj/octosign).

## Does the application have a paid version? Is it really free?

The application is fully free and licensed under an open-source software license. You can see the source code at [GitHub.com](https://github.com/durasj/octosign).

## Is the application ready for day-to-day use?

The application is currently in intensive development. Errors can occur during use, and many functions are still missing. Please share your feedback at [GitHub.com](https://github.com/durasj/octosign) or contact author directly using the contact information at [duras.me](https://duras.me).

## Is it possible to use the application without an internet connection?

When using the *Advanced electronic signature* mode, the application is not built for use without the internet connection. This is because signature verification requires communication with third-party servers.
