+++
title = "Create a play domain"
weight = 23
+++

1. CSS 콘솔 메인 화면 왼쪽 탭에서 **Domain** 탭을 클릭합니다. 그러면 현재 구성되어 있는 CSS 도메인들을 확인할 수 있습니다.


2. 메인 메뉴 위쪽에 위치한 **Add Domain** 버튼을 클릭 합니다.
![도메인추가](/images/css-basic/3-css-console-new-domain.png)


3. 도메인 추가 팝업이 뜨면, 아래와 같이 Type 을 Playback Domain 으로 변경하고, 아래와 같은 값을 입력해 줍니다. 입력이 완료되면 **Add Domain** 버튼을 클릭해서 다음으로 이동합니다.
- Type : Play domain
- Acceleralation region : Outside Chinese mainland 
- Domain Name : playback 용으로 사용할 도메인 이름
![play도메인추가](/images/css-basic/4-2-css-play-domain.png?width=40vw&classes=left)

4. CNAME Configuration 메뉴를 참고해서, DNS 서비스에서 host 에 대한 CNAME 값을 추가해 줍니다.

- **CNAME Configuration 메뉴**
![CNAME Configuration 메뉴](/images/css-basic/4-2-css-play-domain-cname-configuration.png?width=40vw&classes=left)
- **DNS 에 CNAME 레코드 추가** : *아래는 예시 화면으로, 자료 업데이트 과정에서 도메인 이름이 상이할 수 있습니다.*
![도메인추가](/images/css-basic/4-2-css-play-domain-cname.png)
- **CNAME 레코드 검증**
![레코드 검증](/images/css-basic/4-2-css-play-domain-cname-verify.png?width=40vw&classes=left)
