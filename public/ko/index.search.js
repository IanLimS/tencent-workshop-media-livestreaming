var relearn_search_index = [
  {
    "breadcrumb": "Live Streaming on Tencent Cloud",
    "content": "CSS는 쉽고 간편하게 고품질 저지연의 라이브 스트리밍을 안정적으로 제공하기 위한 올인원 완전 관리형 서비스입니다. CSS는 라이브 채널을 빠르고 쉽게 생성하고 삭제할 수 있는 템플릿을 구성하여, 라이브 스트리밍 라이프사이클을 빠르고 손쉽게 구성할 수 있도록 도와줍니다. 템플릿을 사용하여 CSS 채널을 구성한 후 라이브 피드를 클라우드에 입수하면, 재생 URL을 얻을 수 있습니다. 즉, CSS가 트랜스코딩, 패키징을 관리하고 CSS CDN을 통해 시청자에게 스트리밍 비디오를 안정적으로 제공 합니다.\n",
    "description": "",
    "tags": null,
    "title": "Live Streaming for UGC or M\u0026E",
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
    "breadcrumb": "Live Streaming on Tencent Cloud",
    "content": "텐센트 클라우드는 라이브 스트리밍 부터 주문형 비디오까지, 거의 모든 고객의 사용사례를 충족할 수 있는 미디어 서비스 들을 제공하고 있습니다.\n그 중 CSS는 쉽고 간편하게 고품질 저지연의 라이브 스트리밍을 안정적으로 제공하기 위한 완전 관리형 서비스입니다. CSS 는 크게 Push 및 Player domain 을 이용해 구성할 수 있으며, 이 중, Player domain 컴포넌트는 Live Streaming 에 최적화 된 CDN 을 제공합니다.\n여기서 CSS player domain 은 기본적으로 CSS 완전관리형 서비스로 사용되지만, Origin-Pull 모드를 활성화 시켜서 다른 라이브 스트리밍 오리지네이션 서비스와 통합해서도 사용할 수 있습니다.\n텐센트 클라우드에서는 브로드캐스트 급의 품질과 기능을 제공하는 Stream Link, Stream Live, Stream Package 서비스 들을 제공하고 있습니다.\n이번 시간에는, 이 CSS CDN과 텐센트 클라우드에서 Stream Series 를 통합하는 예제를 살펴볼 예정입니다.\n",
    "description": "",
    "tags": null,
    "title": "Live Streaming for large events or OTT",
    "uri": "/ko/stream_css/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for UGC or M\u0026E",
    "content": "텐센트 클라우드의 Cloud Streaming Service (A.K.A CSS) 는 하나의 서비스로 전체 라이브 워크플로우를 클라우드 상에 구축할 수 있는 올인원 서비스를 제공합니다. CSS 를 이용해 라이브 스트리밍 워크플로우를 구축하기 위해서는 2개의 고객 도메인이 필요합니다.\n즉, 하나의 라이브 스트리밍을 구성하기 위해서는 Push 도메인, Play 도메인 이 구성됩니다.\n1. Push 도메인 Push 도메인은, 스트림 입수 및 미디어 프로세싱 (인코딩, 트랜스코딩, 레코딩, Moderation 과 같은 AI 기능들) 을 포함하고 있으며, 실제 비디오의 입수 및 프로세싱을 위한 필수 구성 요소 입니다.\n푸시란, 호스트가 로컬 오디오 및 비디오를 Tencent Cloud로 입수하는 프로세스를 말하며, 여기서 라이브 스트림을 푸시하는 데 사용되는 도메인 이름은 필수 설정입니다. 라이브 스트리밍에 도메인 이름을 사용하려면 먼저 도메인 이름을 등록해야 합니다. 푸시 도메인 이름이 구성된 후 CSS는 해당 푸시 URL을 생성할 수 있습니다.\nCSS 에서는 이런 푸시를 위한 프로토콜로, RTMP, SRT, WebRTC, RTMP over SRT 와 같은 프로토콜을 지원 합니다.\nCSS 에서는 비디오 피드를 입수한 이후 다음과 같은 일을 수행할 수 있습니다.\n비디오를 인코딩 합니다. CSS 에서는 기본적으로 Pass through, H.264, H.265 뿐만 아니라 AV1 코덱 또한 지원합니다. 비디오를 트랜스코딩 합니다. 텐센트 클라우드 미디어 서비스들에서는 TSC (Top Speed Codec) 트랜트코딩 모드를 지원 합니다. TSC 트랜스코딩은 높은 비디오 품질을 더 낮은 비트레이트로 제공하도록 하는 텐센트 클라우드의 독자 기술로 게임 스트리밍, 쇼룸 스트리밍, 이벤트 스트리밍 등에 널리 사용됩니다. TSC 트랜스코딩을 사용하면 낮은 비트 전송률(평균 50% 더 낮음) 에서 고화질 스트리밍 서비스를 제공할 수 있을 뿐만 아니라, 지능형 장면 인식, 동적 인코딩, CTU/라인/프레임 수준 비트레이트 제어 등의 선도적인 기술을 활용할 수 있습니다. 비디오의 추가 프로세싱을 합니다 스트림 릴레이, 타임시프트, 레코딩, 썸네일, Content Moderation 과 같은 AI 기능들을 지원합니다. 텐센트 클라우드의 CSS 는 AI 기능이 내장되어, 다른 제품과의 유기적인 통합 없이도 라이브 스트리밍에 필수 부가 기능들을 제공합니다. 이렇게 생성된 CSS 의 출력들은 CSS 의 Player 도메인과 통합할 수 있으며, 재생을 위해 RTMP, HTTP-FLV, HLS, WebRTC, DASH 와 같은 프로토콜을 지원 합니다.\n2. Player 도메인 (CSS CDN) Player 도메인은, 라이브 스트리밍에 최적화 된 CDN 경험을 제공하는 컨포넌트 입니다. 이는 (1) 기본적으로 CSS Push 도메인과 통합하여 엔드-투-엔드 라이브 워크플로우를 구축할 수 있습니다, (2) 혹은 Origin-Pull mode 를 활성화해서 텐센트 클라우드가 아닌 라이브 스트리밍 오리지네이션 서비스와 통합할 수도 있습니다.\nCSS Player 도메인에서는 인증 (Authentication), Referer 및 IP/Regional(국가) Access Control 과 같은 라이브 스트리밍에 필수적인 기능들을 제공합니다.\nNOTE : 기본 개념에 대한 추가 정보는 다음 사용자 가이드를 추가적으로 탐색할 수 있습니다.\n",
    "description": "",
    "tags": null,
    "title": "CSS Basics",
    "uri": "/ko/css/_0-what-is-css/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for large events or OTT",
    "content": "OTT 의 24x7 채널 및 대규로 스포츠 스트리밍 이벤트와 같은 미션 크리티컬한 비디오 워크로드를 운용하는 고객들은 다음과 같은 요구사항이 충족되는 것을 원합니다.\n수백만명의 시청자들 Copyrighted 컨텐츠 보호 HLS/DASH 와 같은 범용 스트리밍 포맷 지원 및 H.265 와 같은 효율적인 코덱 Redundancy 텐센트 클라우드의 미디어 서비스는 대규모 이벤트나 24X7 워크로드에 적합한 솔루션을 제공하고 있는데요. 다음과 같은 서비스들을 이용할 수 있습니다. 한 번 하나씩 살펴보도록 하겠습니다.\nCSS CDN Cloud Streaming Service (CSS) 는 UGC (User Gerenrated Content) 혹은 미디어 엔터테인먼트 등의 사용사례에서 완전관리형으로 사용할 수 있는 서비스입니다.\n채널의 템플릿화, 빠른 채널 생성, 쉽고 간편한 조작, 저지연 대기시간 등의 요구사항을 가진 고객분들의 니즈를 해소드릴 수 있는 서비스 인데요.\n이 CSS 는 채널이 도메인 기반으로 구성되며 Push 및 Play 2개의 큰 도메인 컴포넌트로 이루어져 있습니다.\n여기서, CSS 의 Play 도메인은 단독으로 CSS CDN 으로 사용될 수 있습니다. 즉, CSS 와 유기적으로 통합되어 완전관리형 서비스로 사용하거나, 다른 스트리밍 오리지네이션 서비스와 통합해서 Live Streaming 에 적합한 Streaming CDN 으로도 사용될 수 있습니다.\nStreamLive StreamLive는 브로드캐스트 급의 라이브 스트리밍 처리 서비스를 제공하는 스트리밍 처리 서비스 입니다. 이를 통해 고품질 비디오 스트림을 생성하고 이를 다양한 유형의 장치에 배포할 수 있습니다.\nStreamLive는 Tencent Cloud의 독점적인 고성능 비디오 인코딩 및 압축 알고리즘을 사용하여 전송 트래픽 소비를 줄이는 동시에 더 나은 시청 경험을 제공합니다. 또한 24/7 가용성을 보장합니다.\nStreamLive 는 또한 아래와 같은 브로드캐스트 급의 워크플로우를 지원하는 기능을 제공하는 서비스 입니다.\n2개의 독립적인 파이프라인을 통해 고가용성의 이중 파이프라인 워크플로우를 설계할 수 있습니다. RTP, RTMP, UDP, HLS, HTTP-MP4 및 RTP-FEC와 같은 방송급에 준하는 입수 프로토콜 지원 높은 품질의 다중 포맷 트랜스코딩을 지원하며, 다양한 해상도(SD, HD, UHD, 2K, 4K 등), 비트 전송률 및 프레임 속도에서 트랜스코딩을 지원 스트림 보호를 위한 Fairplay, Widevine Encryption 기술 및 DRM (디지털 권한관리) 솔루션을 지원 TSC (Top Speed Codec) 을 이용시 AI 알고리즘은 비즈니스 시나리오를 기반으로 실시간으로 최적의 동적 인코딩 매개 변수를 계산하고 낮은 비트 전송률과 고품질 트랜스코딩 서비스를 구현할 수 있습니다. 또한 SSIM과 VMAF의 이중 표준에 따라 AWS Elemental MediaLive QVBR 보다 나은 성능을 제공합니다. StreamPackage StreamPackage 는 고품질 비디오 Muxing 및 오리지네이션 서비스로, 전문적이고 안정적이며 안전한 비디오 Muxing 및 Delivery 서비스를 제공합니다. 전 세계에 배포된 Tencent Cloud의 풍부한 컴퓨팅 리소스와 독점적인 세계 최고의 비디오 기술을 활용하고 24/7 가용성을 제공하여 비디오 패키징 및 전달을 단순화하고 원본 복원력을 향상시켜 비디오 콘텐츠 제공업체가 비디오를 안전하고 안정적으로 대규모 스트리밍할 수 있도록 합니다.\n",
    "description": "",
    "tags": null,
    "title": "Stream Series with CSS",
    "uri": "/ko/stream_css/_0-what-is-stream-series/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for UGC or M\u0026E",
    "content": "1. Domain Name 텐센트 클라우드의 Cloud Streaming Service 는 스트림의 채널 별로 고객의 도메인을 통해 서비스 되는 형태이며, 라이브 채널 당, 클라우드 입수를 위한 도메인 및 Playback 을 위한 도메인, 2개의 도메인이 필요 합니다.\n즉, 텐센트 클라우드의 Cloud Streaming Service 를 이용하기 위해서는, Push 및 Play Domain 등록 과정에서 도메인 소유자라는 소유권을 알리고 등록하는 절차가 필요합니다. 한번 등록되면 상위 도메인이 동일한 도메인을 추가하는 경우 다시 확인할 필요가 없습니다.\n2. OBS 본 워크샵에서는 OBS Studio 를 사용합니다. 노트북에서 OBS Studio 를 이용해, 텐센트 클라우드 미디어 서비스로 라이브 비디오를 전송합니다. OBS Studio 사용 방법을 설명하는 여러 튜토리얼 비디오가 온라인에서 제공되며, 텐센트 클라우드의 CSS 사용가이드 문서에서도 자세한 내용을 참고하실 수 있습니다.\nOBS Studio 가 설치되지 않은 경우 지금 설치해 주세요. OBS Studio 를 실행합니다. 왼쪽 아래 Scenes 메뉴에서 + 를 클릭하고 test 라는 이름의 Scene 을 생성합니다. Scenes 메뉴 오른쪽 Sources 메뉴에서 + 를 클릭하고 Video Capture Device 옵션을 선택 후 Source 를 생성합니다. 완료되면 내장 카메라 비디오 캡처 입력이 중앙에 표시됩니다. 오른쪽 아래 Controls 메뉴 중 Settings 버튼을 클릭 한 후, Setting 창 왼쪽의 Output 메뉴를 클릭 합니다. Output 메뉴에서 Output Mode 를 Advanced 로 변경 한 후 구성을 아래와 같이 변경해 줍니다. 나머지는 모두 기본값으로 두고 OK 버튼을 눌러 구성을 마무리 합니다. ",
    "description": "",
    "tags": null,
    "title": "Prerequisites",
    "uri": "/ko/css/_1-pre-requisites/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for large events or OTT",
    "content": "1. Domain Name 텐센트 클라우드의 Cloud Streaming Service 는 스트림의 채널 별로 고객의 도메인을 통해 서비스 되는 형태 입니다. 본 실습에서는 CSS CDN 을 사용하기 위해 Playback 도메인이 필요 합니다.\n즉, 텐센트 클라우드의 Cloud Streaming Service CDN 을 이용하기 위해서는, Playback Domain 등록 과정에서 도메인 소유자라는 소유권을 알리고 등록하는 절차가 필요합니다. 한번 등록되면 상위 도메인이 동일한 도메인을 추가하는 경우 다시 확인할 필요가 없습니다.\n2. OBS 본 워크샵에서는 OBS Studio 를 사용합니다. 노트북에서 OBS Studio 를 이용해, 텐센트 클라우드 미디어 서비스로 라이브 비디오를 전송합니다. OBS Studio 사용 방법을 설명하는 여러 튜토리얼 비디오가 온라인에서 제공되며, 텐센트 클라우드의 CSS 사용가이드 문서에서도 자세한 내용을 참고하실 수 있습니다.\nOBS Studio 가 설치되지 않은 경우 지금 설치해 주세요. OBS Studio 를 실행합니다. 왼쪽 아래 Scenes 메뉴에서 + 를 클릭하고 test 라는 이름의 Scene 을 생성합니다. Scenes 메뉴 오른쪽 Sources 메뉴에서 + 를 클릭하고 Video Capture Device 옵션을 선택 후 Source 를 생성합니다. 완료되면 내장 카메라 비디오 캡처 입력이 중앙에 표시됩니다. 오른쪽 아래 Controls 메뉴 중 Settings 버튼을 클릭 한 후, Setting 창 왼쪽의 Output 메뉴를 클릭 합니다. Output 메뉴에서 Output Mode 를 Advanced 로 변경 한 후 구성을 아래와 같이 변경해 줍니다. 나머지는 모두 기본값으로 두고 OK 버튼을 눌러 구성을 마무리 합니다. 3. VLC 본 워크샵에서는 VLC media player 를 사용해서 스트림을 재생합니다. 만약 VLC media player 가 설치되어 있지 않다면 설치를 권장 드립니다.\n",
    "description": "",
    "tags": null,
    "title": "Prerequisites",
    "uri": "/ko/stream_css/_1-pre-requisites/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for large events or OTT",
    "content": "대규모 이벤트 및 24x7 을 위한 비디오 워크로드 설계에서, 제일 처음 구성할 것은 StreamPackage 입니다.\nStreamPackage 을 구성하는 방법을 아래와 같이 하나씩 살펴보겠습니다.\n텐센트 클라우드 콘솔 위쪽에서 Product 버튼에 마우스를 가져다 대고, streampackage 를 검색한 후 StreamPackage 콘솔로 이동합니다. StreamPackage 콘솔 위쪽에 위치한 Create Channel 버튼을 클릭합니다.\nName 에는 str_pkg_workshop 을 입력하고, 다른 값들은 기본값으로 둡니다. Create 버튼을 클릭해서 StreamPackage 구성을 생성 합니다. StreamPackage 구성에서 Endpoints 탭을 클릭하고 Create Endpoint 버튼을 클릭합니다.\nName 에는 str_pkg_endpoint 를 입력하고, 다른 값들은 기본값으로 둡니다. Create 버튼을 클릭해서 StreamPackage Endpoint 구성을 생성 합니다. StreamPackage 구성에서 Information 탭을 클릭하고 ID 값을 메모장에 복사해 둡니다.\n",
    "description": "",
    "tags": null,
    "title": "Configure StreamPackage",
    "uri": "/ko/stream_css/_2-streampackage/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for UGC or M\u0026E",
    "content": " CSS 콘솔 메인 화면 왼쪽 탭에서 Domain 탭을 클릭합니다. 그러면 현재 구성되어 있는 CSS 도메인들을 확인할 수 있습니다.\n메인 메뉴 위쪽에 위치한 Add Domain 버튼을 클릭 합니다. 도메인 추가 팝업이 뜨면, 아래와 같이 Push Domain을 위한 값을 입력해 줍니다. 입력이 완료되면 Add Domain 버튼을 클릭해서 다음으로 이동합니다.\nType : Push domain Domain Name : push 용으로 사용할 도메인 이름 Note : CSS Domain 이 등록이 처음인 경우, 별도의 도메인 소유권 인증 절차가 필요 합니다. 도메인 등록 서비스에 TXT 레코드를 추가해서 도메인의 소유권을 인증한 후 Verify Now 클 클릭해서 도메인 소유권 인증을 마치고 다음 스텝으로 넘어갑니다. CNAME Configuration 메뉴를 참고해서, DNS 서비스에서 host 에 대한 CNAME 값을 추가해 줍니다. CNAME Configuration 메뉴 DNS 에 CNAME 레코드 추가 : 아래는 예시 화면으로, 자료 업데이트 과정에서 도메인 이름이 상이할 수 있습니다. CNAME 레코드 검증 ",
    "description": "",
    "tags": null,
    "title": "Create a push domain",
    "uri": "/ko/css/_2-create-push/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for large events or OTT",
    "content": "대규모 이벤트 및 24x7 을 위한 비디오 워크로드 설계에서, StreamPackage 를 구성한 이후 StreamLive 를 구성하고 StreamPackage 와 연결할 수 있습니다.\nStreamLive 를 구성하는 방법을 아래와 같이 하나씩 살펴보겠습니다.\n텐센트 클라우드 콘솔 위쪽에서 Product 버튼에 마우스를 가져다 대고, streamlive 를 검색한 후 StreamLive 콘솔로 이동합니다. 1. StreamLive Security Group 생성 왼쪽 메뉴에서 Security Group 탭을 클릭 합니다. Create Security Group 버튼을 클릭하고 다음과 같이 값을 입력한 후 Confirm 버튼을 클릭해서 Security Group 생성을 마무리 합니다. Name : str_live_sg_workshop IP Allowlist : 0.0.0.0/0 (allow all) 2. StreamLive Input 생성 왼쪽 메뉴에서 Input 탭을 클릭 합니다. Create Input 버튼을 클릭하고 다음과 같이 값을 입력한 후 Confirm 버튼을 클릭해서 Input 생성을 마무리 합니다. Name : strlive_input_workshop Type : RTMP_PUSH Security Group : str_live_sg_workshop Destination A : app name live / stream name a Destination B : app name live / stream name b 나머지는 기본값 동일하게 Failover 용 Input을 하나 더 추가합니다. Create Input 버튼을 클릭하고 다음과 같이 값을 입력한 후 Confirm 버튼을 클릭해서 Input 생성을 마무리 합니다. Name : strlive_input_workshop_backup Type : RTMP_PUSH Security Group : str_live_sg_workshop Destination A : app name live / stream name c Destination B : app name live / stream name d 나머지는 기본값 Cloud Streaming Service 에서는 Redundancy 를 위해 2개의 파이프라인 뿐만 아니라, 소스 장애에 대비하기 위한 입력 페일오버 기능 또한 제공합니다. 자세한 내용은 사용자가이드 를 참고하실 수 있습니다.\n3. StreamLive Channel 생성 왼쪽 메뉴에서 Channel 탭을 클릭 하고 Create Channel 버튼을 클릭 합니다.\n채널 이름에는 다음과 같은 값을 입력하고 Next 버튼을 클릭합니다.\nChannel name : str_live_ch_workshop Input Setting 에서는, Add 버튼을 클릭하고 strlive_input_workshop, strlive_input_workshop_backup 입력들을 불러옵니다. strlive_input_workshop 입력 오른쪽 Settings 를 클릭하고, 입력 페일오버를 다음과 같이 구성합니다. (3초 동안 입력 다운타임이 발생하면 Input failover 발생하도록 활성화 하는 구성) 입력에 대한 가용성 및 장애조치를 위해 하나의 입력내 파이프라인간 장애조치를 할 수 있는 input pipeline failover 및 input loss behavior 를 구성합니다. Cloud Streaming Service 에서는 서비스의 중단을 방지하기 위해 소스 장애에 대비하기 위한 여러 페일오버 기능들을 제공합니다. Failover 에 대한 자세한 내용은 사용자가이드 를 참고하실 수 있습니다.\nOutput Group Setting 에서는 ADD 버튼을 누른 후, 다음과 같이 값을 입력하고 Next 버튼을 클릭합니다. Output Group name : strlive_output_workshop Output Group type : HLS_STREAMPACKAGE Destination Information \u003e StreamPackage Channel ID : 앞장에서 메모장에 복사해 둔 ID 값 Outputs : 여기서는 총 2개의 Bitrate ladder 을 가지는 output 들을 만들어 보겠습니다. 2개의 Output 을 Add 하고 Transcoding Setting 메뉴의 Setting 버튼을 클릭합니다. 그리고 아래와 같은 값 들을 입력합니다. Output Name 960x540 1280x720 Transcoding Joint Transcoding Joint Transcoding Audio/Video Name 960x540 1280x720 Video Transcoding - Vcodec H264 H264 Video Transcoding - Width 960 1280 Video Transcoding - Height 540 720 Rate Control - Video Bitrate/bps 1200000 2000000 Top Speed Codec Transcoding Enable Enable 다른 구성들 Default value 로 둡니다 Default value 로 둡니다 나머지는 기본값을 유지하고, Done 버튼을 클릭해서 구성을 마무리 합니다.\n구성이 완료한 후 생성된 채널을 확인합니다. 현재 IDLE 상태로 생성된 것을 확인할 수 있습니다. Note : START 버튼을 클릭해서 StreamLive 채널을 구동 시작할 수 있습니다. 채널을 시작하면 실제 스트리밍을 시작하지 않더라도 과금이 시작됩니다. 따라서 본 워크샵을 잠시 중단하거나 계속 진행하지 않을 예정인 경우 불필요한 과금을 방지하기 위해 IDLE 상태를 유지하거나, STOP 해주시길 권장 드립니다.\n",
    "description": "",
    "tags": null,
    "title": "Configure StreamLive",
    "uri": "/ko/stream_css/_3-streamlive/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for UGC or M\u0026E",
    "content": " CSS 콘솔 메인 화면 왼쪽 탭에서 Domain 탭을 클릭합니다. 그러면 현재 구성되어 있는 CSS 도메인들을 확인할 수 있습니다.\n메인 메뉴 위쪽에 위치한 Add Domain 버튼을 클릭 합니다. 도메인 추가 팝업이 뜨면, 아래와 같이 Type 을 Playback Domain 으로 변경하고, 아래와 같은 값을 입력해 줍니다. 입력이 완료되면 Add Domain 버튼을 클릭해서 다음으로 이동합니다.\nType : Play domain Acceleralation region : Outside Chinese mainland Domain Name : playback 용으로 사용할 도메인 이름 CNAME Configuration 메뉴를 참고해서, DNS 서비스에서 host 에 대한 CNAME 값을 추가해 줍니다. CNAME Configuration 메뉴 DNS 에 CNAME 레코드 추가 : 아래는 예시 화면으로, 자료 업데이트 과정에서 도메인 이름이 상이할 수 있습니다. CNAME 레코드 검증 ",
    "description": "",
    "tags": null,
    "title": "Create a play domain",
    "uri": "/ko/css/_3-create-play/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for UGC or M\u0026E",
    "content": "Tencent Cloud 의 Cloud Streaming Service 를 이용하면, 트랜스코딩 타입, 해상도, 비트레이트 등을 별도 지정한 Adaptive Bitrate 구성을 템플릿으로 구성하고 Cloud Streaming Service 의 HLS Stream 및 WebRTC Streaming 에서 사용이 가능합니다.\nNOTE : Tencent Cloud 의 Cloud Streaming Service 에서 HLS, WebRTC Streaming 외 HTTP-FLV, RTMP 스트리밍을 통한 단일 비트레이트 포맷을 사용하는 경우, Adaptive Bitrate 가 아닌 Live Transcoding 기능 구성을 통해 스트림의 상세 스펙을 구성을 지원합니다.\nCSS 콘솔 메인 화면 왼쪽 탭에서 Feature Configuration -\u003e Adaptive Bitrate 탭을 클릭합니다.\nAdaptive Bitrate 콘솔 상단에 Create Template 을 버튼을 클릭 합니다.\nCSS 에서는 Template 을 구성해서 Bitrate, 해상도 등을 구성하고 ABR 래더를 생성할 수 있습니다.\nTemplate Name 은 testABR 을 입력합니다. 이는 임의의 값을 입력 가능 합니다. Streams 메뉴에는 ABR 래더를 구성하고 레더별 트랜스코딩 방법, 해상도, 비트레이트 등을 결정 할 수 있습니다.\n이번 랩에서는 Standard Transcoding 을 활용한 기본 구성으로 진행할 예정 입니다. 다음과 같이 3개의 Stream 을 Adaptive Bitrate 으로 구성하고, 각각의 Stream Name 은 HD, SD, Smooth 로 구성합니다. Video Quality 메뉴에서 은 HD 를 선택합니다. 그러면 자동으로 resolution, bitrate 값들이 지정됩니다. 아래쪽에 Add Stream 버튼을 클릭해서 SD, Smooth 구성을 동일하게 생성합니다. Note: 이번 랩에서는 기본값을 선택하지만, bitrate, resolution, transcoding type 등 유연하게 지정 가능합니다.\nStream 구성까지 완료한 이후 Save 버튼을 클릭 합니다. 구성한 Adaptive Bitrate 템플릿을 Domain 과 Binding 하라는 팝업이 뜨는데요. 아래와 같이, 3번에서 구성한 Playback Domain 을 선택합니다. ",
    "description": "",
    "tags": null,
    "title": "Create a Adaptive Bitrate Config",
    "uri": "/ko/css/_4-create-streamingconfig/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for large events or OTT",
    "content": "대규모 이벤트 및 24x7 을 위한 비디오 워크로드 설계에서, 대규모 시청자 트래픽을 처리하기 위해 CSS 를 CDN 으로 활용할 수 있습니다. StreamPackage 를 구성한 이후 CSS Playback Domain 를 구성하고 StreamPackage 와 연결할 수 있습니다.\nCSS 를 Live Streaming 에 적합한 CDN 으로 구성하는 방법을 아래와 같이 하나씩 살펴보겠습니다.\nCSS Playback Domain 구성 CSS 콘솔 메인 화면 왼쪽 탭에서 Domain 탭을 클릭합니다. 그러면 현재 구성되어 있는 CSS 도메인들을 확인할 수 있습니다.\n메인 메뉴 위쪽에 위치한 Add Domain 버튼을 클릭 합니다. 도메인 추가 팝업이 뜨면, 아래와 같이 Type 을 Playback Domain 으로 변경하고, 아래와 같은 값을 입력해 줍니다. 입력이 완료되면 Add Domain 버튼을 클릭해서 다음으로 이동합니다.\nType : Play domain Acceleralation region : Outside Chinese mainland Domain Name : playback 용으로 사용할 도메인 이름 Note : CSS Domain 이 등록이 처음인 경우, 별도의 도메인 소유권 인증 절차가 필요 합니다. 도메인 등록 서비스에 TXT 레코드를 추가해서 도메인의 소유권을 인증한 후 Verify Now 클 클릭해서 도메인 소유권 인증을 마치고 다음 스텝으로 넘어갑니다. CNAME Configuration 메뉴를 참고해서, DNS 서비스에서 host 에 대한 CNAME 값을 추가해 줍니다. CNAME Configuration 메뉴 DNS 에 CNAME 레코드 추가 (아래는 예시 화면으로, 자료 업데이트 과정에서 도메인 이름이 상이할 수 있습니다.) CNAME 레코드 검증 이제 CSS CDN 의 오리진을 구성합니다. 이 구성은 StreamPackage 콘솔 혹은 CSS 콘솔에서 수행할 수 있습니다. CSS Playback Domain 을 StreamPackage 와 통합 StreamPackage 콘솔로 이동한 후, 앞장에서 구성한 StreamPackage 구성으로 이동합니다. 위쪽 메뉴에서 CDN 탭을 클릭 합니다. Edit Configuration 버튼을 클릭하고, 생성한 CSS Playback 도메인을 선택 합니다. StreamPackage 와 CSS CDN 은 기본적으로 통합되므로 별도의 추가 통합 절차가 필요하지 않습니다. StreamPackage 구성에서 CSS Playback 도메인이 CDN 으로 구성되고, CNAME 및 Status 가 모두 정상인 것을 확인 합니다. 참고. CSS 구성 을 가서 보면 Origin server mode 가 활성화 되어 있고, Origin-pull configuration 에서 StreamPackage Id 만으로 통합이 된 것을 확인 할 수 있습니다.\nCSS 에서 Live Streaming CDN 전용으로 구성하는 경우 혹은 3rd party 라이브 스트리밍 서비스와 통합하는 경우, 다음과 같이 Origin server mode 를 enable 해야 합니다. ",
    "description": "",
    "tags": null,
    "title": "Create CSS CDN",
    "uri": "/ko/stream_css/_4-css/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for UGC or M\u0026E",
    "content": "자, 이제까지 Push, Playback Domain 을 구성하고, Adaptive Bitrate 을 구성 및 Playback Domain 에 바인딩 했습니다. 실제 테스트를 해보겠습니다.\nCSS 콘솔 좌측 메뉴에서 Tools \u003e Address Generator 를 클릭합니다. Address Generator 메뉴로 들어가면, 다음과 같이 값들을 입력해 줍니다. 그리고 Generate 버튼을 클릭합니다. URL Type : Push and playback URLs Stream Name : live ranscoding Template : testABR Push address 를 확인합니다. Push address 로는 RTMP, WebRTC, SRT, RTMP over SRT 를 지원하고, OBS 입력 값은 별도로 출력되는 것을 확인할 수 있습니다. 이번 시간에는 OBS 를 통한 Push 를 실습해 볼 예정입니다. OBS 를 실행시켜서 Settings 버튼을 클릭하고, Stream 메뉴 내에 있는 값을 다음과 같이 입력합니다. 여기서 OBS server 및 OBS Stream key 정보는, 위 3번의 OBS server, stream key 값을 복사해서 붙여 넣은 후 저장 (OK) 버튼을 클릭해서 구성을 저장합니다. 그리고 Start Streaming 버튼을 클릭하면, 카메라의 피드가 OBS 를 통해 CSS Push URL 로 입수되게 됩니다. NOTE : OBS 다운로드 및 CSS 를 위한 환경 세팅 정보는 여기 를 통해 확인할 수 있습니다.\nPlayback address 를 확인하고 HLS URL 을 copy 합니다. Tencent video player demo 사이트를 방문해서 Playback URL 에 붙여넣기 합니다. 그리고 Preview 버튼을 클릭 한 후, 정상적으로 HLS Stream 이 재생 되는지 확인 합니다. (왼쪽은 Player, 오른쪽은 OBS 를 캡쳐한 화면 입니다.) 4번의 Playback address 에서 WebRTC URL 을 copy 합니다. Tencent video player demo 사이트를 방문해서 Playback URL 에 붙여넣기 합니다. 그리고 Preview 버튼을 클릭 한 후, 정상적으로 WebRTC Stream 이 재생 되는지 확인 합니다. (왼쪽은 Player, 오른쪽은 OBS 를 캡쳐한 화면 입니다.) NOTE : CSS (Cloud Streaming Services) 의 Playback Domain 은 CDN 의 역할을 합니다. 만약 HTTPS 프로토콜을 이용해 안전한 연결을 하기 위해서는, (a) CSS Playback domain 에서 HTTPS 를 enable 하고 (b) 인증서를 발급받아 CSS 에 업로드 해야 합니다. 자세한 내용은 링크들을 클릭해서 확인해 주세요.\n",
    "description": "",
    "tags": null,
    "title": "Test \u0026 Verify",
    "uri": "/ko/css/_5-test-verify/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for large events or OTT",
    "content": "자, 이제까지 비디오를 브로드캐스트 급의 품질과 기능을 제공하기 위해 StreamPackage, StreamLive 구성을 완료했고, CSS Playback Domain 을 Live Streaming 용 CDN 구성으로 완료 했습니다.\n이제 실제 테스트를 해보겠습니다.\nStreamLive 세팅 및 정보 확인 StreamLive 콘솔에 방문합니다.\n콘솔 내 왼쪽 메뉴에서 Channel 메뉴를 방문하고, 생성된 채널을 확인 합니다.\n채널의 상태가 IDLE 상태인 경우, 오른쪽 Operation 메뉴에서 Start 버튼을 클릭해서 채널을 구동합니다.\n콘솔 내 왼쪽 메뉴에서 Input 메뉴를 방문하고, 생성된 Input 을 확인 합니다.\nURL A 를 확인합니다. rtmp://xxxxxxx.ap-{region}-x.streamlive.myqcloud.com/{APP_NAME}/{STREAM_NAME} 와 같은 스키마를 가진 URL 을 확인합니다.\nOBS 를 이용해서 라이브 피드를 입수시킬 경우, 아래와 같은 입력이 사용됩니다. OBS Server : rtmp://xxxxxxx.ap-{region}-x.streamlive.myqcloud.com/{APP_NAME}/ OBS Stream Key : {STREAM_NAME} OBS Studio 실행 및 세팅 OBS Studio 를 실행합니다. 이번 시간에는 OBS 를 통한 Push 를 실습해 볼 예정입니다. OBS 를 실행시켜서 Settings 버튼을 클릭하고, Stream 메뉴 내에 있는 값을 다음과 같이 입력합니다. 여기서 OBS server 및 OBS Stream key 정보는, 위 5번의 OBS server, stream key 값을 참고 하십시오. 값들을 입력한 후 저장 (OK) 버튼을 클릭해서 구성을 저장합니다. 그리고 Start Streaming 버튼을 클릭하면, 카메라의 피드가 OBS 를 통해 CSS Push URL 로 입수되게 됩니다. NOTE : OBS 다운로드 및 StreamLive 를 위한 환경 세팅 정보는 여기 를 통해 확인할 수 있습니다.\nPlayback URL 확인 및 테스트 StreamPackage 콘솔을 방문합니다. 구성을 클릭하고 Endpoint 탭에 방문 합니다. 여기서 URL 값을 복사합니다. VLC media player 를 실행합니다. File \u003e Open Network 메뉴를 실행하고 복사한 URL 을 붙여 넣습니다. 정상적으로 StreamPackage URL 이 재생되는지 확인 합니다.\nURL 의 형태는 다음과 비슷할 것입니다. http://xxxxxxx.ap-{region}.mediapackage.srclivepull.myqcloud.com/v1/xxxxxx/xxxx/main.m3u8 VLC media player 에서 File \u003e Open Network 메뉴를 실행하고, 이번에는 복사한 URL 에서 도메인을 CSS Playback Domain (CDN) 으로 변경한 후 재생해 봅니다. 정상적으로 CSS Playback URL 이 재생되는지 확인 합니다. URL 의 형태는 다음과 비슷할 것입니다. http://{YOUR_CSS_PLAYBACK_DOMAIN}/v1/xxxxxx/xxxx/main.m3u8 NOTE : CSS (Cloud Streaming Services) 의 Playback Domain 은 CDN 의 역할을 합니다. 만약 HTTPS 프로토콜을 이용해 안전한 연결을 하기 위해서는, (a) CSS Playback domain 에서 HTTPS 를 enable 하고 (b) 인증서를 발급받아 CSS 에 업로드 해야 합니다. 자세한 내용은 링크들을 클릭해서 확인해 주세요.\n",
    "description": "",
    "tags": null,
    "title": "Test \u0026 Verify",
    "uri": "/ko/stream_css/_5-test-verify/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for UGC or M\u0026E",
    "content": "이제까지 Cloud Streaming Service 를 사용해서 엔드 투 엔드 라이브 스트리밍 워크플로우를 확인해 보았습니다.\n불필요한 과금을 방지하기 위해, 다음과 같은 리소스를 정리합니다.\n1. Feature Configuration 연결 제거 및 삭제 CSS 콘솔 좌츨 메뉴에서 Adaptive Bitrate 를 클릭합니다. 생성한 Adaptive Bitrate 구성을 클릭 합니다. 구성 맨 아래 쪽 Unbind 를 클릭해서, 구성과 도메인의 연결을 해제합니다. 구성 맨 위쪽 Delete 를 클릭해서 Adaptive Bitrate 구성을 삭제합니다. 2. 도메인 구성 및 도메인 삭제 CSS 콘솔 좌측 메뉴에서 Domain 를 클릭합니다. 생성한 Push 및 Play 도메인을 확인하고, 우측 Delete 을 클릭해서 Domain 구성을 삭제합니다. 마지막으로 사용중인 도메인 레지스트라에서 해당 도메인들을 삭제합니다. ",
    "description": "",
    "tags": null,
    "title": "Clean up resources",
    "uri": "/ko/css/_6-cleanup-resources/index.html"
  },
  {
    "breadcrumb": "Live Streaming on Tencent Cloud \u003e Live Streaming for large events or OTT",
    "content": "이제까지 Cloud Streaming Service 의 CDN 기능 및 StreamLive, StreamPackage 를 사용해서 브로드캐스트 급의 엔드 투 엔드 라이브 스트리밍 워크플로우를 확인해 보았습니다.\n불필요한 과금을 방지하기 위해, 다음과 같은 리소스를 정리합니다.\n1. CSS 구성 삭제 CSS 콘솔 좌측 메뉴에서 Domaine 을 클릭합니다. 구성한 CDN playback 도메인을 확인 후 Delete 버튼을 눌러 제거합니다. 2. StreamLive 구성 삭제 StreamLive 콘솔 좌측 메뉴에서 Channel 을 클릭합니다. StreamLive 채널의 상태가 RUNNING 이면 Stop 을 클릭해서 중지합니다. 구성한 StreamLive 채널을 확인하고 Delete 을 클릭해서 제거 합니다. StreamLive 콘솔 좌측 메뉴에서 Input 을 클릭합니다. 구성한 StreamLive 입력을 확인하고 Delete 을 클릭해서 제거 합니다. StreamLive 콘솔 좌측 메뉴에서 Security Group 을 클릭합니다. 구성한 Security Group 을 확인하고 Delete 을 클릭해서 제거 합니다. 3. StreamPackage 구성 삭제 StreamPackage 콘솔 좌측 메뉴에서 Channel Management 을 클릭합니다. 구성한 StreamPackage 채널을 확인하고 클릭해서 상세 설정으로 진입 합니다. Endpoints 탭을 클릭하고, Endpoint 구성을 Delete 을 클릭해서 제거 합니다. 뒤로가기 버튼을 눌러 Channel Management 구성으로 이동해서 구성한 StreamPackage 채널을 제거합니다. ",
    "description": "",
    "tags": null,
    "title": "Clean up resources",
    "uri": "/ko/stream_css/_6-cleanup-resources/index.html"
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
