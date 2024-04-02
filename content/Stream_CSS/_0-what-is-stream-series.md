+++
title = "Stream Series with CSS"
weight = 20
+++

Customers run mission-critical video workloads, such as 24x7 OTT channels and large-scale sports streaming events, want the following requirements met:

1. Millions of viewers/CCU
2. Copyrighted content protection
3. Support for universal streaming formats such as HLS/DASH and efficient codecs such as H.265
4. Redundancy of stream

Tencent Cloud media services provide solutions suitable for large-scale events or 24X7 workloads. You can use the following services: Let’s look at them one by one.

![CSS architecture](/images/stream-css/stream-workflow-en.png)

## CSS CDN

Cloud Streaming Service (CSS) is a fully managed service that can be used in use cases such as UGC (User Generated Content) or media entertainment.

**This is a service that can meet the needs of customers who have requirements such as channel templating, fast channel creation, easy and simple operation, and low latency**.

This CSS channel is domain-based and consists of two large domain components: Push and Play.

Here, **CSS's Play domain can be used exclusively as a CSS CDN**. In other words, it can be integrated with CSS and used as a fully managed service, or it can be integrated with other streaming packaging & origin services and used as a **Streaming CDN** suitable for Live Streaming.

![CSS architecture](/images/stream-css/css-as-a-live-cdn.png)

## StreamLive

**StreamLive is a streaming processing service** that provides broadcast-grade live streaming processing services. This allows you to create high-quality video streams and distribute them to many different types of devices.

StreamLive uses Tencent Cloud proprietary high-performance video encoding and compression algorithms to provide a better viewing experience while reducing transmission traffic consumption. We also provides 24/7 availability.

StreamLive is also a service that provides functions that support the following broadcast-level workflows.

- Design highly available, dual-pipeline workflows with two independent pipelines.
- Supports broadcast-grade acquisition protocols such as RTP, RTMP, UDP, HLS, HTTP-MP4, and RTP-FEC
- Supports high-quality multi-format transcoding, supports transcoding at various resolutions (SD, HD, UHD, 2K, 4K, etc.), bitrates, and frame rates.
- Supports Fairplay, Widevine Encryption technology and DRM (digital rights management) solution for stream protection
- When using TSC (Top Speed Codec), AI algorithms can calculate optimal dynamic encoding parameters in real time based on business scenarios and implement low bitrate and high-quality transcoding services. It also provides better performance than AWS Elemental MediaLive QVBR from the standards of SSIM and VMAF.

![CSS architecture](/images/stream-css/stream-live-arch.png?width=40vw&classes=left)

## StreamPackage

**StreamPackage is a high-quality video muxing and origination service** that provides professional, stable and safe video muxing and delivery services.
It leverages Tencent Cloud globally distributed abundant computing resources and exclusive world-leading video technology, provides 24/7 availability, simplifies video packaging and delivery, and improves source resilience, allowing video content providers to keep videos safe and stable. Allows for large-scale streaming.

![CSS architecture](/images/stream-css/stream-package-arch.png?width=40vw&classes=left)

