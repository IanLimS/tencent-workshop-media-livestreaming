+++
title = "Configure StreamLive"
weight = 23
+++

In implementing video workloads for large-scale events and 24x7, after configuring a StreamPackage, you can configure StreamLive and associate it with the StreamPackage.

Let's take a look at how to configure StreamLive as follows : 

1. Hover the mouse over the **Product** button at the top of the Tencent Cloud console, search for streamlive, and then go to the StreamLive console.
![ALT_IMG](/images/stream-css/console-streamlive.png?width=40vw&classes=left)

### Create StreamLive Security Group

2. Click the **Security Group** tab in the left menu.
- Click the **Create Security Group button**, enter the values as follows, and then click the **Confirm** button to finish creating the security group.
- Name: **str_live_sg_workshop**
- IP Allowlist: **0.0.0.0/0 (allow all)**
![ALT_IMG](/images/stream-css/2-1-strlive-sg-config.png?width=40vw&classes=left)

### Create StreamLive Input

3. Click the **Input** tab in the left menu.
- Click the **Create Input** button, enter the values as follows, and then click the **Confirm** button to complete the input creation.
- Name: **strlive_input_workshop**
- Type: **RTMP_PUSH**
- Security Group: **str_live_sg_workshop**
- Destination A: app name **live** / stream name **a**
- Destination B: app name **live** / stream name **b**
- Leave rest to default
![ALT_IMG](/images/stream-css/2-2-strlive-input-config.png?width=40vw&classes=left)

### Create StreamLive Channel

4. Click the **Channel** tab in the left menu and click the **Create Channel** button.

5. Enter the following values for Channel Name and click the **Next** button.
- Channel name: **str_live_ch_workshop**
![ALT_IMG](/images/stream-css/2-3-strlive-ch-config-1.png?width=40vw&classes=left)
- In Input Setting, click the **Add** button and load the **strlive_input_workshop** input.
![ALT_IMG](/images/stream-css/2-3-strlive-ch-config-2.png?width=40vw&classes=left)

6. In Output Group Setting, press the **ADD** button, then enter the values as follows and click the **Next** button.
- Output Group name: **strlive_output_workshop**
- Output Group type: **HLS_STREAMPACKAGE**
- Destination Information > StreamPackage Channel ID: ID value copied to notepad in the previous chapter
- Outputs: Here, we will create outputs with a total of two bitrate ladders. **Add** two outputs** and click the **Setting** button in the Transcoding Setting menu. Then enter the values below.
| Output Name | 960x540 | 1280x720 |
|:-------:|:------:|:---------------:|
| Transcoding | Joint Transcoding | Joint Transcoding |
| Audio/Video Name | 960x540 | 1280x720 |
| Video Transcoding - Vcodec | H264 | H264 |
| Video Transcoding - Width | 960 | 1280 |
| Video Transcoding - Height | 540 | 720 |
| Rate Control - Video Bitrate/bps | 1200000 | 2000000 |
| Top Speed Codec Transcoding | Enable | Enable |
| Other configurations | Leave it as Default value | Leave it as Default value |

7. Leave the rest as default and click the **Done** button to finalize the configuration.

8. After configuration is complete, check the created channels. You can see that it has been created in the current IDLE state.
![ALT_IMG](/images/stream-css/2-4-strlive-ch-verify.png)

> Note: You can start running the StreamLive channel by clicking the **START** button. Once you start a channel, billing starts even if you don't actually start streaming. Therefore, if you plan to temporarily suspend or not continue this workshop, we recommend that you maintain the **IDLE** status or **STOP** to prevent unnecessary charges.
