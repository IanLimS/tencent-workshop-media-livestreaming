+++
title = "CSS Basics"
weight = 20
+++

텐센트 클라우드의 Cloud Streaming Service (A.K.A CSS) 는 하나의 서비스로 전체 라이브 워크플로우를 클라우드 상에 구축할 수 있는 올인원 서비스를 제공합니다.
CSS 를 이용해 라이브 스트리밍 워크플로우를 구축하기 위해서는 2개의 고객 도메인이 필요합니다.

즉, 하나의 라이브 스트리밍을 구성하기 위해서는 **Push 도메인**, **Play 도메인** 이 구성됩니다.

![CSS 아키텍처](/images/css-basic/css_architecture_ko.png)

## 1. Push 도메인 

Push 도메인은, 스트림 입수 및 미디어 프로세싱 (인코딩, 트랜스코딩, 레코딩, Moderation 과 같은 AI 기능들) 을 포함하고 있으며, 실제 비디오의 입수 및 프로세싱을 위한 필수 구성 요소 입니다.

푸시란, 호스트가 로컬 오디오 및 비디오를 Tencent Cloud로 입수하는 프로세스를 말하며, 여기서 라이브 스트림을 푸시하는 데 사용되는 도메인 이름은 필수 설정입니다.  라이브 스트리밍에 도메인 이름을 사용하려면 먼저 도메인 이름을 등록해야 합니다. 푸시 도메인 이름이 구성된 후 CSS는 해당 푸시 URL을 생성할 수 있습니다.

CSS 에서는 이런 푸시를 위한 프로토콜로, **RTMP, SRT, WebRTC, RTMP over SRT** 와 같은 프로토콜을 지원 합니다.

CSS 에서는 비디오 피드를 입수한 이후 다음과 같은 일을 수행할 수 있습니다.

1. **비디오를 인코딩 합니다.**
- CSS 에서는 기본적으로 Pass through, H.264, H.265 뿐만 아니라 AV1 코덱 또한 지원합니다.
2. **비디오를 트랜스코딩 합니다.**
- 텐센트 클라우드 미디어 서비스들에서는 **TSC (Top Speed Codec)** 트랜트코딩 모드를 지원 합니다.
- TSC 트랜스코딩은 높은 비디오 품질을 더 낮은 비트레이트로 제공하도록 하는 텐센트 클라우드의 독자 기술로 게임 스트리밍, 쇼룸 스트리밍, 이벤트 스트리밍 등에 널리 사용됩니다.
- TSC 트랜스코딩을 사용하면  **낮은 비트 전송률(평균 50% 더 낮음)** 에서 고화질 스트리밍 서비스를 제공할 수 있을 뿐만 아니라, 지능형 장면 인식, 동적 인코딩, CTU/라인/프레임 수준 비트레이트 제어 등의 선도적인 기술을 활용할 수 있습니다.
3. **비디오의 추가 프로세싱을 합니다**
- 스트림 릴레이, 타임시프트, 레코딩, 썸네일, Content Moderation 과 같은 AI 기능들을 지원합니다.
- 텐센트 클라우드의 CSS 는 AI 기능이 내장되어, 다른 제품과의 유기적인 통합 없이도 라이브 스트리밍에 필수 부가 기능들을 제공합니다.

이렇게 생성된 CSS 의 출력들은 CSS 의 Player 도메인과 통합할 수 있으며, 재생을 위해 **RTMP, HTTP-FLV, HLS, WebRTC, DASH** 와 같은 프로토콜을 지원 합니다.

## 2. Player 도메인 (CSS CDN) 

Player 도메인은, 라이브 스트리밍에 최적화 된 CDN 경험을 제공하는 컨포넌트 입니다.
이는 (1) 기본적으로 CSS Push 도메인과 통합하여 엔드-투-엔드 라이브 워크플로우를 구축할 수 있습니다, (2) 혹은 Origin-Pull mode 를 활성화해서 텐센트 클라우드가 아닌 라이브 스트리밍 오리지네이션 서비스와 통합할 수도 있습니다.

CSS Player 도메인에서는 인증 (Authentication), Referer 및 IP/Regional(국가) Access Control 과 같은 라이브 스트리밍에 필수적인 기능들을 제공합니다.

> NOTE : 기본 개념에 대한 추가 정보는 다음 [사용자 가이드](https://www.tencentcloud.com/document/product/267/7968?lang=en)를 추가적으로 탐색할 수 있습니다.

