+++
title = "CSS Basics"
weight = 20
+++

Prior to start with Tencent Cloud Cloud Streaming Service (A.K.A CSS), **Push domain** and **Play domain** are configured to configure one live streaming.

In other words, CSS has two main components, and channels are organized around domains.

![CSS architecture](/images/css-basic/css_architecture_ko.png)

## 1. Push domain

The push domain includes stream acquisition and media processing (AI functions such as encoding, transcoding, recording, and moderation) and is an essential component for ingesting and processing video feed.

Push refers to the process by which the host obtains local audio and video into Tencent Cloud, where the domain name used to push the live stream is a required setting. If you want to use a domain name for live streaming, you must first register it. After the push domain name is configured, CSS can generate the corresponding push URL.

CSS supports protocols such as **RTMP, SRT, WebRTC, and RTMP over SRT** for ingesting the live feed.

In CSS, you can do the following after ingesting the video feed:

1. **Encode the video.**
- CSS basically supports pass through codecs such as H.264, H.265, and AV1 .
2. **Transcode the video.**
- Tencent Cloud media services support **TSC (Top Speed Codec)** trancoding mode.
- **TSC transcoding** is Tencent Cloud unique technology that provides high video quality at a lower bitrate and is widely used in game streaming, showroom streaming, event streaming, etc.
- TSC transcoding not only allows you to deliver high-definition streaming services at **low bitrates (50% lower on average)**, but also features intelligent scene recognition, dynamic encoding, CTU/line/frame level bitrate control, etc. You can take advantage of our leading technologies by adopting TSC.
3. **Additional processing of the video**
- Supports built-in AI functions such as stream relay, time shift, recording, thumbnail, and content moderation.
- Tencent Cloud CSS has built-in AI functions, providing essential additional functions for live streaming without integration with other products.

The CSS output generated in this way can be integrated with the CSS Player domain, and protocols such as **RTMP, HTTP-FLV, HLS, WebRTC, and DASH** are supported for playback.

## 2. Player 도메인 (CSS CDN) 

Player 도메인은, 라이브 스트리밍에 최적화 된 CDN 경험을 제공하는 컨포넌트 입니다.
이는 (1) CSS Push 도메인과 통합해서 엔드-투-엔드 라이브 워크플로우를 구축하거나, (2) 텐센트 클라우드가 아닌 라이브 스트리밍 오리지네이션 서비스와 통합할 수도 있습니다.

CSS Player 도메인에서는 인증 (Authentication), Referer 및 IP/Regional(국가) Access Control 과 같은 라이브 스트리밍에 필수적인 기능들을 제공합니다.

> NOTE : 기본 개념에 대한 추가 정보는 다음 [사용자 가이드](https://www.tencentcloud.com/document/product/267/7968?lang=en)를 추가적으로 탐색할 수 있습니다.

## 2. Player domain (CSS CDN)

The Player domain is a component that provides a CDN optimized for live streaming.
This can be (1) integrated with a CSS Push domain to build an end-to-end live workflow, or (2) integrated with a 3rd party live streaming packaging & origination service.

In addition, CSS Player domain provides essential functions for live streaming such as Authentication, Referer, and IP/Regional Access Control.

> NOTE: For additional information on basic concepts, you can further explore the following [User Guide](https://www.tencentcloud.com/document/product/267/7968?lang=en).