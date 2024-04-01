+++
title = "Create an Adaptive Bitrate Configuration"
weight = 24
+++

In Cloud Streaming Service, you can configure an Adaptive Bitrate configuration with separately specified transcoding type, resolution, and bitrate as a template and use it in CSS HLS Stream and WebRTC Streaming.

> **NOTE**: When Tencent Cloud CSS uses a single bitrate format through HTTP-FLV or RTMP streaming in addition to HLS and WebRTC Streaming, detailed specifications of the stream must be configured by configuring the Live Transcoding function in CSS rather than Adaptive Bitrate. 

1. On the left tab of the CSS console main screen, click the **Feature Configuration -> Adaptive Bitrate** tab.
2. Click the **Create Template** button at the top of the Adaptive Bitrate console.
3. In CSS, you can configure **Template** to configure bitrate, resolution, and creating ABR ladder.

4. For Template Name, enter **testABR**. Any value can be entered.
![abr-config](/images/css-basic/5-1-abr-config.png)

5. In the **Streams** menu, you can configure the ABR ladder and determine the transcoding method, resolution, bitrate, etc. for each ladder.
In this lab, we will proceed with the basic configuration using Standard Transcoding.
Configure 3 streams with Adaptive Bitrate as follows,
Each Stream Name consists of HD, SD, and Smooth.
**Stream Quality** selects HD, SD, and Smooth respectively. Then, resolution and bitrate values are automatically specified.
![abr-config-hd](/images/css-basic/5-1-abr-config-hd.png?width=80vw&classes=left)
> **Note**: In this lab, we will select the default value, however, you can flexibly specify bitrate, resolution, transcoding type in the real scenario.

6. After completing the stream configuration, click the **Save** button.
![bind-abr-config-menu](/images/css-basic/5-2-bind-abr-config-menu.png?width=40vw&classes=left)

7. A pop-up will appear asking you to **Domain and Binding** the configured Adaptive Bitrate template. As shown below, select **Playback Domain** configured in step 3.
![bind-abr-config-to-play](/images/css-basic/5-2-bind-abr-config-to-play.png?width=40vw&classes=left)

<!--
![abr-config-sd](/images/css-basic/5-1-abr-config-sd.png?width=40vw&classes=left)
![abr-config-smooth](/images/css-basic/5-1-abr-config-smooth.png?width=40vw&classes=left) -->

