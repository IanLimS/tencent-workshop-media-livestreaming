+++
title = "Stream Series with CSS"
weight = 20
+++

OTT 의 24x7 채널 및 대규로 스포츠 스트리밍 이벤트와 같은 미션 크리티컬한 비디오 워크로드를 운용하는 고객들은 다음과 같은 요구사항이 충족되는 것을 원합니다.

1. 수백만명의 시청자들
2. Copyrighted 컨텐츠 보호
3. HLS/DASH 와 같은 범용 스트리밍 포맷 지원 및 H.265 와 같은 효율적인 코덱 
4. Redundancy 

텐센트 클라우드의 미디어 서비스는 대규모 이벤트나 24X7 워크로드에 적합한 솔루션을 제공하고 있는데요. 다음과 같은 서비스들을 이용할 수 있습니다. 한 번 하나씩 살펴보도록 하겠습니다.

![CSS 아키텍처](/images/stream-css/stream-workflow-en.png)

## CSS CDN

Cloud Streaming Service (CSS) 는 UGC (User Gerenrated Content) 혹은 미디어 엔터테인먼트 등의 사용사례에서 완전관리형으로 사용할 수 있는 서비스입니다.

**채널의 템플릿화, 빠른 채널 생성, 쉽고 간편한 조작, 저지연 대기시간** 등의 요구사항을 가진 고객분들의 니즈를 해소드릴 수 있는 서비스 인데요.

이 CSS 는 채널이 도메인 기반으로 구성되며 Push 및 Play 2개의 큰 도메인 컴포넌트로 이루어져 있습니다.

여기서, **CSS 의 Play 도메인은 단독으로 CSS CDN 으로 사용**될 수 있습니다. 즉, CSS 와 유기적으로 통합되어 완전관리형 서비스로 사용하거나, 다른 스트리밍 오리지네이션 서비스와 통합해서 Live Streaming 에 적합한 **Streaming CDN 으로도 사용**될 수 있습니다.


![CSS 아키텍처](/images/stream-css/css-as-a-live-cdn.png)

## StreamLive

**StreamLive는 브로드캐스트 급의 라이브 스트리밍 처리 서비스를 제공하는 스트리밍 처리 서비스** 입니다. 이를 통해 고품질 비디오 스트림을 생성하고 이를 다양한 유형의 장치에 배포할 수 있습니다.

StreamLive는 Tencent Cloud의 독점적인 고성능 비디오 인코딩 및 압축 알고리즘을 사용하여 전송 트래픽 소비를 줄이는 동시에 더 나은 시청 경험을 제공합니다. 또한 24/7 가용성을 보장합니다.

StreamLive 는 또한 아래와 같은 브로드캐스트 급의 워크플로우를 지원하는 기능을 제공하는 서비스 입니다.

- 2개의 독립적인 파이프라인을 통해 고가용성의 이중 파이프라인 워크플로우를 설계할 수 있습니다.
- RTP, RTMP, UDP, HLS, HTTP-MP4 및 RTP-FEC와 같은 방송급에 준하는 입수 프로토콜 지원
- 높은 품질의 다중 포맷 트랜스코딩을 지원하며, 다양한 해상도(SD, HD, UHD, 2K, 4K 등), 비트 전송률 및 프레임 속도에서 트랜스코딩을 지원
- 스트림 보호를 위한 Fairplay, Widevine Encryption 기술 및 DRM (디지털 권한관리) 솔루션을 지원
- TSC (Top Speed Codec) 을 이용시 AI 알고리즘은 비즈니스 시나리오를 기반으로 실시간으로 최적의 동적 인코딩 매개 변수를 계산하고 낮은 비트 전송률과 고품질 트랜스코딩 서비스를 구현할 수 있습니다. 또한 SSIM과 VMAF의 이중 표준에 따라 AWS Elemental MediaLive QVBR 보다 나은 성능을 제공합니다.

![CSS 아키텍처](/images/stream-css/stream-live-arch.png?width=40vw&classes=left)

## StreamPackage

**StreamPackage 는 고품질 비디오 Muxing 및 오리지네이션 서비스**로, 전문적이고 안정적이며 안전한 비디오 Muxing 및 Delivery 서비스를 제공합니다. 
전 세계에 배포된 Tencent Cloud의 풍부한 컴퓨팅 리소스와 독점적인 세계 최고의 비디오 기술을 활용하고 24/7 가용성을 제공하여 비디오 패키징 및 전달을 단순화하고 원본 복원력을 향상시켜 비디오 콘텐츠 제공업체가 비디오를 안전하고 안정적으로 대규모 스트리밍할 수 있도록 합니다. 


![CSS 아키텍처](/images/stream-css/stream-package-arch.png?width=40vw&classes=left)
