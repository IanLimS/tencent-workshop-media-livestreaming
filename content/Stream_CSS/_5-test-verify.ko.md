+++
title = "Test & Verify"
weight = 25
+++

자, 이제까지 비디오를 브로드캐스트 급의 품질과 기능을 제공하기 위해 StreamPackage, StreamLive 구성을 완료했고,
CSS Playback Domain 을 Live Streaming 용 CDN 구성으로 완료 했습니다.

이제 실제 테스트를 해보겠습니다.

## StreamLive 세팅 및 정보 확인

1. **StreamLive** 콘솔에 방문합니다.

2. 콘솔 내 왼쪽 메뉴에서 **Channel** 메뉴를 방문하고, 생성된 채널을 확인 합니다.

3. 채널의 상태가 **IDLE** 상태인 경우, 오른쪽 **Operation** 메뉴에서 **Start** 버튼을 클릭해서 채널을 구동합니다. 

4. 콘솔 내 왼쪽 메뉴에서 **Input** 메뉴를 방문하고, 생성된 Input 을 확인 합니다.

5. URL A 를 확인합니다. *rtmp://xxxxxxx.ap-{region}-x.streamlive.myqcloud.com/{APP_NAME}/{STREAM_NAME}* 와 같은 스키마를 가진 URL 을 확인합니다.
- OBS 를 이용해서 라이브 피드를 입수시킬 경우, 아래와 같은 입력이 사용됩니다.
- OBS Server : **rtmp://xxxxxxx.ap-{region}-x.streamlive.myqcloud.com/{APP_NAME}/**
- OBS Stream Key : **{STREAM_NAME}**

## OBS Studio 실행 및 세팅

6. **OBS Studio** 를 실행합니다. 

* 이번 시간에는 OBS 를 통한 Push 를 실습해 볼 예정입니다.
* OBS 를 실행시켜서 Settings 버튼을 클릭하고,
![ALT IMG](/images/css-basic/6-4-test-push-obs-setting.png?width=10vw&classes=left)
* **Stream** 메뉴 내에 있는 값을 다음과 같이 입력합니다. 여기서 OBS server 및 OBS Stream key 정보는, 위 5번의 OBS server, stream key 값을 참고 하십시오. 값들을 입력한 후 저장 (OK) 버튼을 클릭해서 구성을 저장합니다.
![ALT IMG](/images/stream-css/5-test-push-obs-config.png?width=40vw&classes=left)
* 그리고 **Start Streaming** 버튼을 클릭하면, 카메라의 피드가 OBS 를 통해 CSS Push URL 로 입수되게 됩니다.

> NOTE : OBS 다운로드 및 StreamLive 를 위한 환경 세팅 정보는 [여기](https://www.tencentcloud.com/document/product/1048/50115) 를 통해 확인할 수 있습니다.

## Playback URL 확인 및 테스트

7. **StreamPackage** 콘솔을 방문합니다. 구성을 클릭하고 Endpoint 탭에 방문 합니다. 여기서 URL 값을 복사합니다.
![ALT IMG](/images/stream-css/5-strpkg-endpoint.png)

8. **VLC media player** 를 실행합니다. *File > Open Network* 메뉴를 실행하고 복사한 URL 을 붙여 넣습니다. **정상적으로 StreamPackage URL 이 재생**되는지 확인 합니다.
- URL 의 형태는 다음과 비슷할 것입니다. 
- *http://xxxxxxx.ap-{region}.mediapackage.srclivepull.myqcloud.com/v1/xxxxxx/xxxx/main.m3u8*
![ALT IMG](/images/stream-css/5-test-strpkg.png?width=40vw&classes=left)

9. **VLC media player** 에서 *File > Open Network* 메뉴를 실행하고, 이번에는 복사한 URL 에서 도메인을 CSS Playback Domain (CDN) 으로 변경한 후 재생해 봅니다. **정상적으로 CSS Playback URL 이 재생**되는지 확인 합니다.
- URL 의 형태는 다음과 비슷할 것입니다. 
- *http://{YOUR_CSS_PLAYBACK_DOMAIN}/v1/xxxxxx/xxxx/main.m3u8*
![ALT IMG](/images/stream-css/5-test-cssplayback.png?width=40vw&classes=left)

> NOTE : CSS (Cloud Streaming Services) 의 Playback Domain 은 CDN 의 역할을 합니다. 만약 HTTPS 프로토콜을 이용해 안전한 연결을 하기 위해서는, (a)  CSS Playback domain 에서 [HTTPS 를 enable](https://www.tencentcloud.com/document/product/267/31066?lang=en) 하고 (b) [인증서를 발급받아 CSS 에 업로드](https://www.tencentcloud.com/document/product/267/41317?lang=en) 해야 합니다. 자세한 내용은 링크들을 클릭해서 확인해 주세요.
