+++
title = "Clean up resources"
weight = 26
+++

이제까지 Cloud Streaming Service 의 CDN 기능 및 StreamLive, StreamPackage 를 사용해서 브로드캐스트 급의 엔드 투 엔드 라이브 스트리밍 워크플로우를 확인해 보았습니다.

불필요한 과금을 방지하기 위해, 다음과 같은 리소스를 정리합니다.

## 1. CSS 구성 삭제
1. CSS 콘솔 좌측 메뉴에서 **Domaine** 을 클릭합니다. 
2. 구성한 CDN playback 도메인을 확인 후 Delete 버튼을 눌러 제거합니다.

## 2. StreamLive 구성 삭제
1. StreamLive 콘솔 좌측 메뉴에서 **Channel** 을 클릭합니다. 
2. StreamLive 채널의 상태가 RUNNING 이면 Stop 을 클릭해서 중지합니다.
3. 구성한 StreamLive 채널을 확인하고 Delete 을 클릭해서 제거 합니다.
4. StreamLive 콘솔 좌측 메뉴에서 **Input** 을 클릭합니다. 
5. 구성한 StreamLive 입력을 확인하고 Delete 을 클릭해서 제거 합니다.
6. StreamLive 콘솔 좌측 메뉴에서 **Security Group** 을 클릭합니다. 
7. 구성한 Security Group 을 확인하고 Delete 을 클릭해서 제거 합니다.

## 3. StreamPackage 구성 삭제
1. StreamPackage 콘솔 좌측 메뉴에서 **Channel Management** 을 클릭합니다. 
2. 구성한 StreamPackage 채널을 확인하고 클릭해서 상세 설정으로 진입 합니다.
3. **Endpoints** 탭을 클릭하고, Endpoint 구성을 Delete 을 클릭해서 제거 합니다.
4. 뒤로가기 버튼을 눌러 **Channel Management** 구성으로 이동해서 구성한 StreamPackage 채널을 제거합니다.