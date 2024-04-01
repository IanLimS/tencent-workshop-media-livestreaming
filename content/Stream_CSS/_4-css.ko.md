+++
title = "Create CSS CDN"
weight = 24
+++

대규모 이벤트 및 24x7 을 위한 비디오 워크로드 설계에서, 대규모 시청자 트래픽을 처리하기 위해 CSS 를 CDN 으로 활용할 수 있습니다. StreamPackage 를 구성한 이후 CSS Playback Domain 를 구성하고 StreamPackage 와 연결할 수 있습니다.

CSS 를 Live Streaming 에 적합한 CDN 으로 구성하는 방법을 아래와 같이 하나씩 살펴보겠습니다.

### CSS Playback Domain 구성

1. CSS 콘솔 메인 화면 왼쪽 탭에서 **Domain** 탭을 클릭합니다. 그러면 현재 구성되어 있는 CSS 도메인들을 확인할 수 있습니다.


2. 메인 메뉴 위쪽에 위치한 **Add Domain** 버튼을 클릭 합니다.
![도메인추가](/images/stream-css/3-1-css-console-new-domain.png)


3. 도메인 추가 팝업이 뜨면, 아래와 같이 Type 을 Playback Domain 으로 변경하고, 아래와 같은 값을 입력해 줍니다. 입력이 완료되면 **Add Domain** 버튼을 클릭해서 다음으로 이동합니다.
- Type : Play domain
- Acceleralation region : Outside Chinese mainland 
- Domain Name : playback 용으로 사용할 도메인 이름
![play도메인추가](/images/stream-css/3-1-add-play-domain-1.png?width=40vw&classes=left)

> Note : CSS Domain 이 등록이 처음인 경우, 별도의 도메인 소유권 인증 절차가 필요 합니다. 도메인 등록 서비스에 TXT 레코드를 추가해서 도메인의 소유권을 인증한 후 **Verify Now** 클 클릭해서 도메인 소유권 인증을 마치고 다음 스텝으로 넘어갑니다.
![ALT_IMG](/images/stream-css/3-2-add-play-domain-2-ownership-verify.png?width=40vw&classes=left)

4. CNAME Configuration 메뉴를 참고해서, DNS 서비스에서 host 에 대한 CNAME 값을 추가해 줍니다.

- **CNAME Configuration 메뉴**
![CNAME Configuration 메뉴](/images/stream-css/3-3-add-play-domain-2.png?width=40vw&classes=left)
- **DNS 에 CNAME 레코드 추가**
![도메인추가](/images/css-basic/4-2-css-play-domain-cname.png?width=40vw&classes=left)
- **CNAME 레코드 검증**
![레코드 검증](/images/stream-css/3-5-css-play-domain-cname-verify.png?width=40vw&classes=left)

5. 이제 CSS CDN 의 오리진을 구성합니다. 이 구성은 StreamPackage 콘솔 혹은 CSS 콘솔에서 수행할 수 있습니다.

### CSS Playback Domain 을 StreamPackage 와 통합 

6. **StreamPackage 콘솔로 이동**한 후, 앞장에서 구성한 StreamPackage 구성으로 이동합니다. 위쪽 메뉴에서 CDN 탭을 클릭 합니다.
![ALT_IMG](/images/stream-css/3-6-add-play-connect-strpkg.png?width=60vw&classes=left)

7. **Edit Configuration** 버튼을 클릭하고, 생성한 **CSS Playback 도메인을 선택** 합니다. StreamPackage 와 CSS CDN 은 기본적으로 통합되므로 별도의 추가 통합 절차가 필요하지 않습니다.
![ALT_IMG](/images/stream-css/3-7-add-play-connect-strpkg.png?width=40vw&classes=left)

8. **StreamPackage 구성**에서 **CSS Playback 도메인이 CDN 으로 구성**되고, CNAME 및 Status 가 모두 정상인 것을 확인 합니다.
![ALT_IMG](/images/stream-css/3-8-add-play-connect-strpkg.png?width=40vw&classes=left)

> 참고. **CSS 구성** 을 가서 보면 **Origin server mode** 가 활성화 되어 있고, **Origin-pull configuration** 에서 StreamPackage Id 만으로 통합이 된 것을 확인 할 수 있습니다.
>> 이렇게 CSS 에서 Live Streaming CDN 전용으로 구성하는 경우, **Origin server mode** 를 enable 해야 합니다.
![ALT_IMG](/images/stream-css/3-8-verify-css-oirigin-pull.png?width=40vw&classes=left)

