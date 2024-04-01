+++
title = "Configure StreamLive"
weight = 23
+++

대규모 이벤트 및 24x7 을 위한 비디오 워크로드 설계에서, StreamPackage 를 구성한 이후 StreamLive 를 구성하고 StreamPackage 와 연결할 수 있습니다.

StreamLive 를 구성하는 방법을 아래와 같이 하나씩 살펴보겠습니다.

1. 텐센트 클라우드 콘솔 위쪽에서 Product 버튼에 마우스를 가져다 대고, streamlive 를 검색한 후 StreamLive 콘솔로 이동합니다.
![ALT_IMG](/images/stream-css/console-streamlive.png?width=40vw&classes=left)

### 1. StreamLive Security Group 생성

2. 왼쪽 메뉴에서 **Security Group** 탭을 클릭 합니다. 
- **Create Security Group 버튼**을 클릭하고 다음과 같이 값을 입력한 후 **Confirm** 버튼을 클릭해서 Security Group 생성을 마무리 합니다.
- Name : **str_live_sg_workshop**
- IP Allowlist : **0.0.0.0/0 (allow all)**
![ALT_IMG](/images/stream-css/2-1-strlive-sg-config.png?width=40vw&classes=left)

### 2. StreamLive Input 생성

3. 왼쪽 메뉴에서 **Input** 탭을 클릭 합니다. 
- **Create Input** 버튼을 클릭하고 다음과 같이 값을 입력한 후 **Confirm** 버튼을 클릭해서 Input 생성을 마무리 합니다.
- Name : **strlive_input_workshop**
- Type : **RTMP_PUSH**
- Security Group : **str_live_sg_workshop**
- Destination A : app name **live** / stream name **a**
- Destination B : app name **live** / stream name **b**
- 나머지는 기본값
![ALT_IMG](/images/stream-css/2-2-strlive-input-config.png?width=40vw&classes=left)

### 3. StreamLive Channel 생성

4. 왼쪽 메뉴에서 **Channel** 탭을 클릭 하고 **Create Channel** 버튼을 클릭 합니다.

5. 채널 이름에는 다음과 같은 값을 입력하고 **Next** 버튼을 클릭합니다.
- Channel name : **str_live_ch_workshop**
![ALT_IMG](/images/stream-css/2-3-strlive-ch-config-1.png?width=40vw&classes=left)
- Input Setting 에서는, **Add** 버튼을 클릭하고 **strlive_input_workshop** 입력을 불러옵니다.
![ALT_IMG](/images/stream-css/2-3-strlive-ch-config-2.png?width=40vw&classes=left)

6. Output Group Setting 에서는 **ADD** 버튼을 누른 후, 다음과 같이 값을 입력하고  **Next** 버튼을 클릭합니다.
- Output Group name : **strlive_output_workshop**
- Output Group type : **HLS_STREAMPACKAGE**
- Destination Information > StreamPackage Channel ID : 앞장에서 메모장에 복사해 둔 ID 값
- Outputs : 여기서는 총 2개의 Bitrate ladder 을 가지는 output 들을 만들어 보겠습니다. **2개의 Output 을 Add** 하고 Transcoding Setting 메뉴의 **Setting** 버튼을 클릭합니다. 그리고 아래와 같은 값 들을 입력합니다.
| Output Name | 960x540 | 1280x720 |
|:-------:|:------:|:------------:|
| Transcoding   | Joint Transcoding | Joint Transcoding |
| Audio/Video Name | 960x540 | 1280x720 |
| Video Transcoding - Vcodec | H264 | H264 |
| Video Transcoding - Width | 960 | 1280 |
| Video Transcoding - Height | 540 | 720 |
| Rate Control - Video Bitrate/bps | 1200000 | 2000000 |
| Top Speed Codec Transcoding | Enable | Enable |
| 다른 구성들 | Default value 로 둡니다 | Default value 로 둡니다 |

7. 나머지는 기본값을 유지하고, **Done** 버튼을 클릭해서 구성을 마무리 합니다.

8. 구성이 완료한 후 생성된 채널을 확인합니다. 현재 IDLE 상태로 생성된 것을 확인할 수 있습니다. 
![ALT_IMG](/images/stream-css/2-4-strlive-ch-verify.png)

> Note : **START** 버튼을 클릭해서 StreamLive 채널을 구동 시작할 수 있습니다. 채널을 시작하면 실제 스트리밍을 시작하지 않더라도 과금이 시작됩니다. 따라서 본 워크샵을 잠시 중단하거나 계속 진행하지 않을 예정인 경우 불필요한 과금을 방지하기 위해 **IDLE** 상태를 유지하거나, **STOP** 해주시길 권장 드립니다.