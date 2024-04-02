+++
title = "Test & Verify"
weight = 25
+++

자, 이제까지 Push, Playback Domain 을 구성하고, Adaptive Bitrate 을 구성 및 Playback Domain 에 바인딩 했습니다.
실제 테스트를 해보겠습니다.

1. CSS 콘솔 좌측 메뉴에서 **Tools > Address Generator** 를 클릭합니다.
2. **Address Generator** 메뉴로 들어가면, 다음과 같이 값들을 입력해 줍니다. 그리고 **Generate** 버튼을 클릭합니다.

* URL Type : Push and playback URLs
* Stream Name : live
* ranscoding Template : testABR
    ![ALT IMG](/images/css-basic/6-1-test-addr-gen.png?width=60vw&classes=left)
3. Push address 를 확인합니다.
![ALT IMG](/images/css-basic/6-2-test-push-addr.png?width=60vw&classes=left)
* Push address 로는 RTMP, WebRTC, SRT, RTMP over SRT 를 지원하고, OBS 입력 값은 별도로 출력되는 것을 확인할 수 있습니다.
* 이번 시간에는 OBS 를 통한 Push 를 실습해 볼 예정입니다.
* OBS 를 실행시켜서 Settings 버튼을 클릭하고,
![ALT IMG](/images/css-basic/6-4-test-push-obs-setting.png?width=10vw&classes=left)
* **Stream** 메뉴 내에 있는 값을 다음과 같이 입력합니다. 여기서 OBS server 및 OBS Stream key 정보는, 위 3번의 OBS server, stream key 값을 복사해서 붙여 넣은 후 저장 (OK) 버튼을 클릭해서 구성을 저장합니다.
![ALT IMG](/images/css-basic/6-4-test-push-obs-config.png?width=40vw&classes=left)
* 그리고 **Start Streaming** 버튼을 클릭하면, 카메라의 피드가 OBS 를 통해 CSS Push URL 로 입수되게 됩니다.

> NOTE : OBS 다운로드 및 CSS 를 위한 환경 세팅 정보는 [여기](https://www.tencentcloud.com/document/product/267/31569?lang=en) 를 통해 확인할 수 있습니다.

4. Playback address 를 확인하고 HLS URL 을 copy 합니다.
![ALT IMG](/images/css-basic/6-3-test-play-addr.png?width=60vw&classes=left)

5. [Tencent video player demo](http://tcplayer.vcube.tencent.com/intl/index.html) 사이트를 방문해서 **Playback URL** 에 붙여넣기 합니다. 그리고 **Preview** 버튼을 클릭 한 후, 정상적으로 HLS Stream 이 재생 되는지 확인 합니다. (*왼쪽은 Player, 오른쪽은 OBS 를 캡쳐한 화면 입니다.*)
![ALT IMG](/images/css-basic/6-5-test-playback-hls.png)

6. 4번의 Playback address 에서 **WebRTC URL** 을 copy 합니다. [Tencent video player demo](https://tcplayer.vcube.tencent.com/intl/index.html) 사이트를 방문해서 **Playback URL** 에 붙여넣기 합니다. 그리고 **Preview** 버튼을 클릭 한 후, 정상적으로 WebRTC Stream 이 재생 되는지 확인 합니다. (*왼쪽은 Player, 오른쪽은 OBS 를 캡쳐한 화면 입니다.*)
![ALT IMG](/images/css-basic/6-5-test-playback-webrtc.png)

> NOTE : CSS (Cloud Streaming Services) 의 Playback Domain 은 CDN 의 역할을 합니다. 만약 HTTPS 프로토콜을 이용해 안전한 연결을 하기 위해서는, (a)  CSS Playback domain 에서 [HTTPS 를 enable](https://www.tencentcloud.com/document/product/267/31066?lang=en) 하고 (b) [인증서를 발급받아 CSS 에 업로드](https://www.tencentcloud.com/document/product/267/41317?lang=en) 해야 합니다. 자세한 내용은 링크들을 클릭해서 확인해 주세요.
