+++
title = "Prerequisites"
weight = 21
+++

## 1. Domain Name 

텐센트 클라우드의 Cloud Streaming Service 는 스트림의 채널 별로 고객의 도메인을 통해 서비스 되는 형태이며, **라이브 채널 당, 클라우드 입수를 위한 도메인 및 Playback 을 위한 도메인, 2개의 도메인**이 필요 합니다.

즉, 텐센트 클라우드의 Cloud Streaming Service 를 이용하기 위해서는, **Push 및 Play Domain 등록 과정에서 도메인 소유자라는 소유권을 알리고 등록하는 절차**가 필요합니다. 한번 등록되면 상위 도메인이 동일한 도메인을 추가하는 경우 다시 확인할 필요가 없습니다. 

## 2. OBS

본 워크샵에서는 [OBS Studio](https://obsproject.com/) 를 사용합니다.
노트북에서 OBS Studio 를 이용해, 텐센트 클라우드 미디어 서비스로 라이브 비디오를 전송합니다. OBS Studio 사용 방법을 설명하는 여러 튜토리얼 비디오가 온라인에서 제공되며, 텐센트 클라우드의 [CSS 사용가이드 문서](https://www.tencentcloud.com/document/product/267/31569?lang=en)에서도 자세한 내용을 참고하실 수 있습니다.

1. [OBS Studio](https://obsproject.com/) 가 설치되지 않은 경우 지금 설치해 주세요.
2. OBS Studio 를 실행합니다.
3. 왼쪽 아래 **Scenes** 메뉴에서 **+** 를 클릭하고 test 라는 이름의 Scene 을 생성합니다.
4. Scenes 메뉴 오른쪽 **Sources** 메뉴에서 **+** 를 클릭하고 **Video Capture Device** 옵션을 선택 후 Source 를 생성합니다. 완료되면 내장 카메라 비디오 캡처 입력이 중앙에 표시됩니다.
5. 오른쪽 아래 Controls 메뉴 중 **Settings** 버튼을 클릭 한 후, Setting 창 왼쪽의 **Output** 메뉴를 클릭 합니다.
6. Output 메뉴에서 **Output Mode 를 Advanced 로 변경** 한 후 **구성을 아래와 같이 변경**해 줍니다. 나머지는 모두 기본값으로 두고 OK 버튼을 눌러 구성을 마무리 합니다.
![ALT IMG](/images/css-basic/obs_setting.png)
