+++
title = "Create a Adaptive Bitrate Config"
weight = 24
+++

Tencent Cloud 의 Cloud Streaming Service 를 이용하면, 트랜스코딩 타입 해상도, 비트레이트를 별도 지정한 Adaptive Bitrate 구성을 템플릿으로 구성하고 Cloud Streaming Service 의 HLS Stream 및 WebRTC Streaming 에서 사용이 가능합니다.

> **NOTE** : Tencent Cloud 의 Cloud Streaming Service 에서 HLS, WebRTC Streaming 외 HTTP-FLV, RTMP 스트리밍을 통한 단일 비트레이트 포맷을 사용하는 경우, Adaptive Bitrate 가 아닌 Live Transcoding 기능 구성을 통해 스트림의 상세 스펙을 구성을 지원합니다.


1. CSS 콘솔 메인 화면 왼쪽 탭에서 *Feature Configuration -> Adaptive Bitrate* 탭을 클릭합니다.
2. Adaptive Bitrate 콘솔 상단에 *Create Template* 을 버튼을 클릭 합니다.
3. CSS 에서는 Template 을 구성해서 Bitrate, 해상도 등을 구성하고 ABR 래더를 생성할 수 있습니다.

    3-1. Template Name 은 *testABR* 을 입력합니다. 이는 임의의 값을 입력 가능 합니다.
![abr-config](/images/css-basic/5-1-abr-config.png)

    3-2. *Streams* 메뉴에는 ABR 래더를 구성하고 레더별 트랜스코딩 방법, 해상도, 비트레이트 등을 결정 할 수 있습니다.
이번 랩에서는 Standard Transcoding 을 활용한 기본 구성으로 진행할 예정 입니다.
다음과 같이 3개의 Stream 을 Adaptive Bitrate 으로 구성하고,
각각의 Stream Name 은 HD, SD, Smooth 로 구성합니다.
Stream Quality 은 각각 HD, SD, Smooth 을 선택합니다. 그러면 자동으로 resolution, bitrate 값들이 지정됩니다.
Note: 이번 랩에서는 기본값을 선택하지만, bitrate, resolution, transcoding type 등 유연하게 지정 가능합니다.
![abr-config-hd](/images/css-basic/5-1-abr-config-hd.png)
![abr-config-sd](/images/css-basic/5-1-abr-config-sd.png)
![abr-config-smooth](/images/css-basic/5-1-abr-config-smooth.png)

    3-3. Stream 구성까지 완료한 이후 *Save* 버튼을 클릭 합니다. 그러면 구성한 Adaptive Bitrate 템플릿을 Domain 과 Binding 하라는 팝업이 뜨는데요. 아래와 같이, 3번에서 구성한 Playback Domain 을 선택합니다.
![bind-abr-config-menu](/images/css-basic/5-2-bind-abr-config-menu.png)
![bind-abr-config-to-play](/images/css-basic/5-2-bind-abr-config-to-play.png)
