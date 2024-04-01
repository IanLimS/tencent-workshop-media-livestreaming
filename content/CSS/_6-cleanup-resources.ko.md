+++
title = "Clean up resources"
weight = 26
+++

이제까지 Cloud Streaming Service 를 사용해서 엔드 투 엔드 라이브 스트리밍 워크플로우를 확인해 보았습니다.

불필요한 과금을 방지하기 위해, 다음과 같은 리소스를 정리합니다.

## 1. Feature Configuration 연결 제거 및 삭제
1. CSS 콘솔 좌츨 메뉴에서 **Adaptive Bitrate** 를 클릭합니다. 
2. 생성한 Adaptive Bitrate 구성을 클릭 합니다.
3. 구성 맨 아래 쪽 **Unbind** 를 클릭해서, 구성과 도메인의 연결을 해제합니다.
4. 구성 맨 위쪽 **Delete** 를 클릭해서 Adaptive Bitrate 구성을 삭제합니다.

## 2. 도메인 구성 및 도메인 삭제
1. CSS 콘솔 좌측 메뉴에서 **Domain** 를 클릭합니다. 
2. 생성한 Push 및 Play 도메인을 확인하고, 우측 **Delete** 을 클릭해서 Domain 구성을 삭제합니다.
3. 마지막으로 사용중인 도메인 레지스트라에서 해당 도메인들을 삭제합니다.
