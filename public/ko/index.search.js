var relearn_search_index = [
  {
    "breadcrumb": "Live Streaming on Tencent Cloud",
    "content": "CSS는 쉽고 간편하게 고품질 저지연의 라이브 스트리밍을 안정적으로 제공하기 위한 완전 관리형 서비스입니다. CSS는 라이브 채널을 빠르고 쉽게 생성하고 삭제할 수 있는 템플릿을 구성하여, 라이브 스트리밍 라이프사이클을 빠르고 손쉽게 구성할 수 있도록 도와줍니다. 템플릿을 사용하여 CSS 채널을 구성한 후 라이브 피드를 클라우드에 입수하면, 재생 URL을 얻을 수 있습니다. 즉, CSS가 트랜스코딩, 패키징을 관리하고 CSS CDN을 통해 시청자에게 스트리밍 비디오를 안정적으로 제공 합니다.\n",
    "description": "",
    "tags": null,
    "title": "Cloud Streaming Service",
    "uri": "/ko/css/index.html"
  },
  {
    "breadcrumb": "",
    "content": "텐센트 클라우드는 미디어 서비스 마켓에서 No.1 아태지역 클라우드 서비스 제공자로 랭크 되고 있을 정도로, 품질을 보장하는 미디어 서비스들을 제공하고 있습니다. 출처\n텐센트 클라우드의 미디어 서비스 제품군은 주문형 비디오 뿐만 아닌 라이브 스트리밍 서비스 들을 망라하고 있는데요.\n초저지연부터, 고화질, AI 기능 및 SDK 등의 대부분의 고객들의 요구사항들을 수렴할 수 있는 기능들 및 서비스들을 보유하고 있습니다.\n그 중, 라이브 스트리밍 서비스에 대해서는 다음과 같이 텐센트 미디어 서비스들은 사용사례에 따라 다음과 같이 크게 분류할 수 있습니다.\n(1) 미디어 엔터테인먼트의 일반 사용 사례에 적합한 Cloud Streaming Service\n(2) 브로드캐스트 급의 품질과 기능을 보장해야 하는 사용 사례에 적합한 Stream Series\n이 워크샵 에서는, 각 서비스들을 기본적으로 어떻게 구성하고 확인할 수 있는지 알아보도록 하겠습니다.\n",
    "description": "",
    "tags": null,
    "title": "Live Streaming on Tencent Cloud",
    "uri": "/ko/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Cloud Streaming Service",
    "content": "텐센트 클라우드의 Cloud Streaming Service (A.K.A CSS) 를 사용하기에 앞서, CSS 는 크게 2개의 컴포넌트를 가지고 있고, 도메인을 중심으로 채널이 구성됩니다.\n즉, 하나의 라이브 스트리밍을 구성하기 위해서는 Push 도메인, Play 도메인 이 구성됩니다.\n1. Push 도메인 Push 도메인은, 스트림 입수 및 미디어 프로세싱 (인코딩, 트랜스코딩, 레코딩, Moderation 과 같은 AI 기능들) 을 포함하고 있으며, 실제 비디오의 입수 및 프로세싱을 위한 필수 구성 요소 입니다.\n푸시란, 호스트가 로컬 오디오 및 비디오를 Tencent Cloud로 입수하는 프로세스를 말하며, 여기서 라이브 스트림을 푸시하는 데 사용되는 도메인 이름은 필수 설정입니다. 라이브 스트리밍에 도메인 이름을 사용하려면 먼저 도메인 이름을 등록해야 합니다. 푸시 도메인 이름이 구성된 후 CSS는 해당 푸시 URL을 생성할 수 있습니다.\nCSS 에서는 이런 푸시를 위한 프로토콜로, RTMP, SRT, WebRTC, RTMP over SRT 와 같은 프로토콜을 지원 합니다.\nCSS 에서는 비디오 피드를 입수한 이후 다음과 같은 일을 수행할 수 있습니다.\n비디오를 인코딩 합니다. CSS 에서는 기본적으로 Pass through, H.264, H.265 뿐만 아니라 AV1 코덱 또한 지원합니다. 비디오를 트랜스코딩 합니다. 텐센트 클라우드 미디어 서비스들에서는 TSC (Top Speed Codec) 트랜트코딩 모드를 지원 합니다. TSC 트랜스코딩은 높은 비디오 품질을 더 낮은 비트레이트로 제공하도록 하는 텐센트 클라우드의 독자 기술로 게임 스트리밍, 쇼룸 스트리밍, 이벤트 스트리밍 등에 널리 사용됩니다. TSC 트랜스코딩을 사용하면 낮은 비트 전송률(평균 50% 더 낮음) 에서 고화질 스트리밍 서비스를 제공할 수 있을 뿐만 아니라, 지능형 장면 인식, 동적 인코딩, CTU/라인/프레임 수준 비트레이트 제어 등의 선도적인 기술을 활용할 수 있습니다. 비디오의 추가 프로세싱을 합니다 스트림 릴레이, 타임시프트, 레코딩, 썸네일, Content Moderation 과 같은 AI 기능들을 지원합니다. 텐센트 클라우드의 CSS 는 AI 기능이 내장되어, 다른 제품과의 유기적인 통합 없이도 라이브 스트리밍에 필수 부가 기능들을 제공합니다. 이렇게 생성된 CSS 의 출력들은 CSS 의 Player 도메인과 통합할 수 있으며, 재생을 위해 RTMP, HTTP-FLV, HLS, WebRTC, DASH 와 같은 프로토콜을 지원 합니다.\n2. Player 도메인 (CSS CDN) Player 도메인은, 라이브 스트리밍에 최적화 된 CDN 경험을 제공하는 컨포넌트 입니다. 이는 (1) CSS Push 도메인과 통합해서 엔드-투-엔드 라이브 워크플로우를 구축하거나, (2) 텐센트 클라우드가 아닌 라이브 스트리밍 오리지네이션 서비스와 통합할 수도 있습니다.\nCSS Player 도메인에서는 인증 (Authentication), Referer 및 IP/Regional(국가) Access Control 과 같은 라이브 스트리밍에 필수적인 기능들을 제공합니다.\nNOTE : 기본 개념에 대한 추가 정보는 다음 사용자 가이드를 추가적으로 탐색할 수 있습니다.\n",
    "description": "",
    "tags": null,
    "title": "CSS Basics",
    "uri": "/ko/css/_0-what-is-css/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Cloud Streaming Service",
    "content": "1. Domain Name 텐센트 클라우드의 Cloud Streaming Service 는 스트림의 채널 별로 고객의 도메인을 통해 서비스 되는 형태이며, 라이브 채널 당, 클라우드 입수를 위한 도메인 + Playback 을 위한 도메인, 2개의 도메인이 필요 합니다.\n즉, 텐센트 클라우드의 Cloud Streaming Service 를 이용하기 위해서는, Push 및 Play Domain 등록 과정에서 도메인 소유자라는 소유권을 알리고 등록하는 절차가 필요합니다. 한번 등록되면 상위 도메인이 동일한 도메인을 추가하는 경우 다시 확인할 필요가 없습니다.\n2. OBS 본 워크샵에서는 OBS Studio 를 사용합니다. 노트북에서 OBS Studio 를 이용해, 텐센트 클라우드 미디어 서비스로 라이브 비디오를 전송합니다. OBS Studio 사용 방법을 설명하는 여러 튜토리얼 비디오가 온라인에서 제공되며, 텐센트 클라우드의 CSS 사용가이드 문서에서도 자세한 내용을 참고하실 수 있습니다.\nOBS Studio 가 설치되지 않은 경우 지금 설치해 주세요. OBS Studio 를 실행합니다. 왼쪽 아래 Scenes 메뉴에서 + 를 클릭하고 test 라는 이름의 Scene 을 생성합니다. Scenes 메뉴 오른쪽 Sources 메뉴에서 + 를 클릭하고 Video Capture Device 옵션을 선택 후 Source 를 생성합니다. 완료되면 내장 카메라 비디오 캡처 입력이 중앙에 표시됩니다. 오른쪽 아래 Controls 메뉴 중 Settings 버튼을 클릭 한 후, Setting 창 왼쪽의 Output 메뉴를 클릭 합니다. Output 메뉴에서 Output Mode 를 Advanced 로 변경 한 후 구성을 아래와 같이 변경해 줍니다. 나머지는 모두 기본값으로 두고 OK 버튼을 눌러 구성을 마무리 합니다. 3. VLC Media Player???? 이 워크숍에서는 VLC 미디어 플레이어를 사용해서 스트림을 재생합니다. VLC 미디어 플레이어가 없는 경우 설치되었으니 지금 설치해 주세요.\nOBS Studio를 사용하여 노트북에서 비디오를 스트리밍하는 방법을 이미 알고 있다면 다음 섹션을 건너뛰어도 됩니다.\n",
    "description": "",
    "tags": null,
    "title": "Prerequisites",
    "uri": "/ko/css/_1-pre-requisites/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Cloud Streaming Service",
    "content": " CSS 콘솔 메인 화면 왼쪽 탭에서 Domain 탭을 클릭합니다. 그러면 현재 구성되어 있는 CSS 도메인들을 확인할 수 있습니다.\n메인 메뉴 위쪽에 위치한 Add Domain 버튼을 클릭 합니다. 도메인 추가 팝업이 뜨면, 아래와 같이 Push Domain을 위한 값을 입력해 줍니다. 입력이 완료되면 Add Domain 버튼을 클릭해서 다음으로 이동합니다. Type : Push domain Domain Name : push 용으로 사용할 도메인 이름 CNAME Configuration 메뉴를 참고해서, DNS 서비스에서 host 에 대한 CNAME 값을 추가해 줍니다. CNAME Configuration 메뉴 DNS 에 CNAME 레코드 추가 CNAME 레코드 검증 ",
    "description": "",
    "tags": null,
    "title": "Create a push domain",
    "uri": "/ko/css/_2-create-push/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Cloud Streaming Service",
    "content": " CSS 콘솔 메인 화면 왼쪽 탭에서 Domain 탭을 클릭합니다. 그러면 현재 구성되어 있는 CSS 도메인들을 확인할 수 있습니다.\n메인 메뉴 위쪽에 위치한 Add Domain 버튼을 클릭 합니다. 도메인 추가 팝업이 뜨면, 아래와 같이 Type 을 Playback Domain 으로 변경하고, 아래와 같은 값을 입력해 줍니다. 입력이 완료되면 Add Domain 버튼을 클릭해서 다음으로 이동합니다. Type : Play domain Acceleralation region : Outside Chinese mainland Domain Name : playback 용으로 사용할 도메인 이름 CNAME Configuration 메뉴를 참고해서, DNS 서비스에서 host 에 대한 CNAME 값을 추가해 줍니다. CNAME Configuration 메뉴 DNS 에 CNAME 레코드 추가 CNAME 레코드 검증 ",
    "description": "",
    "tags": null,
    "title": "Create a play domain",
    "uri": "/ko/css/_3-create-play/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Cloud Streaming Service",
    "content": "Tencent Cloud 의 Cloud Streaming Service 를 이용하면, 트랜스코딩 타입 해상도, 비트레이트를 별도 지정한 Adaptive Bitrate 구성을 템플릿으로 구성하고 Cloud Streaming Service 의 HLS Stream 및 WebRTC Streaming 에서 사용이 가능합니다.\nNOTE : Tencent Cloud 의 Cloud Streaming Service 에서 HLS, WebRTC Streaming 외 HTTP-FLV, RTMP 스트리밍을 통한 단일 비트레이트 포맷을 사용하는 경우, Adaptive Bitrate 가 아닌 Live Transcoding 기능 구성을 통해 스트림의 상세 스펙을 구성을 지원합니다.\nCSS 콘솔 메인 화면 왼쪽 탭에서 Feature Configuration -\u003e Adaptive Bitrate 탭을 클릭합니다.\nAdaptive Bitrate 콘솔 상단에 Create Template 을 버튼을 클릭 합니다.\nCSS 에서는 Template 을 구성해서 Bitrate, 해상도 등을 구성하고 ABR 래더를 생성할 수 있습니다.\n3-1. Template Name 은 testABR 을 입력합니다. 이는 임의의 값을 입력 가능 합니다. 3-2. Streams 메뉴에는 ABR 래더를 구성하고 레더별 트랜스코딩 방법, 해상도, 비트레이트 등을 결정 할 수 있습니다. 이번 랩에서는 Standard Transcoding 을 활용한 기본 구성으로 진행할 예정 입니다. 다음과 같이 3개의 Stream 을 Adaptive Bitrate 으로 구성하고, 각각의 Stream Name 은 HD, SD, Smooth 로 구성합니다. Stream Quality 은 각각 HD, SD, Smooth 을 선택합니다. 그러면 자동으로 resolution, bitrate 값들이 지정됩니다. Note: 이번 랩에서는 기본값을 선택하지만, bitrate, resolution, transcoding type 등 유연하게 지정 가능합니다. 3-3. Stream 구성까지 완료한 이후 Save 버튼을 클릭 합니다. 그러면 구성한 Adaptive Bitrate 템플릿을 Domain 과 Binding 하라는 팝업이 뜨는데요. 아래와 같이, 3번에서 구성한 Playback Domain 을 선택합니다. ",
    "description": "",
    "tags": null,
    "title": "Create a Adaptive Bitrate Config",
    "uri": "/ko/css/_4-create-streamingconfig/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Cloud Streaming Service",
    "content": "자, 이제까지 Push, Playback Domain 을 구성하고, Adaptive Bitrate 을 구성 및 Playback Domain 에 바인딩 했습니다. 실제 테스트를 해볼텐데요.\nCSS 콘솔 좌측 메뉴에서 Tools \u003e Address Generator 를 클릭합니다. Address Generator 메뉴로 들어가면, 다음과 같이 값들을 입력해 줍니다. 그리고 Generate 버튼을 클릭합니다. URL Type : Push and playback URLs Stream Name : live ranscoding Template : testABR Push address 를 확인합니다. Push address 로는 RTMP, WebRTC, SRT, RTMP over SRT 를 지원하고, OBS 입력 값은 별도로 출력되는 것을 확인할 수 있습니다. 이번 시간에는 OBS 를 통한 Push 를 실습해 볼 예정입니다. OBS 를 실행시켜서 Settings 버튼을 클릭하고, Stream 메뉴 내에 있는 값을 다음과 같이 입력합니다. 여기서 OBS server 및 OBS Stream key 정보는, 위 3번의 OBS server, stream key 값을 복사해서 붙여 넣은 후 저장 (OK) 버튼을 클릭해서 구성을 저장합니다. 그리고 Start Streaming 버튼을 클릭하면, 카메라의 피드가 OBS 를 통해 CSS Push URL 로 입수되게 됩니다. NOTE : OBS 다운로드 및 CSS 를 위한 환경 세팅 정보는 여기 를 통해 확인할 수 있습니다.\nPlayback address 를 확인하고 HLS URL 을 copy 합니다. Tencent video player demo 사이트를 방문해서 Playback URL 에 붙여넣기 합니다. 그리고 Preview 버튼을 클릭 한 후, 정상적으로 HLS Stream 이 재생 되는지 확인 합니다. 4번의 Playback address 에서 WebRTC URL 을 copy 합니다. Tencent video player demo 사이트를 방문해서 Playback URL 에 붙여넣기 합니다. 그리고 Preview 버튼을 클릭 한 후, 정상적으로 WebRTC Stream 이 재생 되는지 확인 합니다. NOTE : CSS (Cloud Streaming Services) 의 Playback Domain 은 CDN 의 역할을 합니다. 만약 HTTPS 프로토콜을 이용해 안전한 연결을 하기 위해서는, (a) CSS Playback domain 에서 HTTPS 를 enable 하고 (b) 인증서를 발급받아 CSS 에 업로드 해야 합니다. 자세한 내용은 링크들을 클릭해서 확인해 주세요.\n",
    "description": "",
    "tags": null,
    "title": "Test \u0026 Verify",
    "uri": "/ko/css/_5-test-verify/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Cloud Streaming Service",
    "content": "이제까지 Cloud Streaming Service 를 사용해서 엔드 투 엔드 라이브 스트리밍 워크플로우를 확인해 보았습니다.\n불필요한 과금을 방지하기 위해, 다음과 같은 리소스를 정리합니다.\n1. Feature Configuration 연결 제거 및 삭제 CSS 콘솔 좌츨 메뉴에서 Adaptive Bitrate 를 클릭합니다. 생성한 Adaptive Bitrate 구성을 클릭 합니다. 구성 맨 아래 쪽 Unbind 를 클릭해서, 구성과 도메인의 연결을 해제합니다. 구성 맨 위쪽 Delete 를 클릭해서 Adaptive Bitrate 구성을 삭제합니다. 2. 도메인 구성 및 도메인 삭제 CSS 콘솔 좌츨 메뉴에서 Domain 를 클릭합니다. 생성한 Push 및 Play 도메인을 확인하고, 우측 Delete 을 클릭해서 Domain 구성을 삭제합니다. 마지막으로 사용중인 도메인 레지스트라에서 해당 도메인들을 삭제합니다. ",
    "description": "",
    "tags": null,
    "title": "Clean up resources",
    "uri": "/ko/css/_6-cleanup-resources/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/ko/categories/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/ko/tags/index.html"
  }
]
