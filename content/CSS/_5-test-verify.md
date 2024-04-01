+++
title = "Test & Verify"
weight = 25
+++

Now, we have configured the Push and Playback Domains, and configured Adaptive Bitrate and bound it to the Playback Domain.
Let's do an test and verify the live streaming.

1. On the left menu of the CSS console, click **Tools > Address Generator**.
2. When you visit the **Address Generator** menu, enter the values as follows. And click the **Generate** button.

* URL Type: Push and playback URLs
* Stream Name: live
* rancoding Template: testABR
     ![ALT IMG](/images/css-basic/6-1-test-addr-gen.png?width=60vw&classes=left)
3. Confirm the push address.
![ALT IMG](/images/css-basic/6-2-test-push-addr.png?width=60vw&classes=left)
* RTMP, WebRTC, SRT, and RTMP over SRT are supported as push addresses, and you can see that the OBS input value is output separately.
* In this lab, we will practice Push through OBS.
* Run OBS and click the Settings button.
![ALT IMG](/images/css-basic/6-4-test-push-obs-setting.png?width=10vw&classes=left)
* Enter the values in the **Stream** menu as follows. Here, for the OBS server and OBS Stream key information, copy and paste the OBS server and stream key values in step 3 above and then click the Save (OK) button to save the configuration.
![ALT IMG](/images/css-basic/6-4-test-push-obs-config.png?width=40vw&classes=left)
* And when you click the **Start Streaming** button, the camera's feed will be obtained as a CSS Push URL through OBS.

> NOTE: Information on environment settings for OBS download and CSS can be found [here](https://www.tencentcloud.com/document/product/267/31569?lang=en).

4. Check the playback address and copy the HLS URL.
![ALT IMG](/images/css-basic/6-3-test-play-addr.png?width=60vw&classes=left)

5. Visit the [Tencent video player demo](https://tcplayer.vcube.tencent.com/intl/index.html) site and paste it into **Playback URL**. And after clicking the **Preview** button, check whether the HLS Stream plays normally.
![ALT IMG](/images/css-basic/6-5-test-playback-hls.png)

6. Copy **WebRTC URL** from Playback address in Step 4. Visit the [Tencent video player demo](https://tcplayer.vcube.tencent.com/intl/index.html) site and paste it into **Playback URL**. And after clicking the **Preview** button, check whether the WebRTC Stream is played normally.
![ALT IMG](/images/css-basic/6-5-test-playback-webrtc.png)

> NOTE: The Playback Domain of CSS (Cloud Streaming Services) functions as a CDN. If you want to make a secure connection via the HTTPS protocol, (a) [enable HTTPS](https://www.tencentcloud.com/document/product/267/31066?lang=en) in the CSS Playback domain, and (b) You must [obtain a certificate and upload it to CSS](https://www.tencentcloud.com/document/product/267/41317?lang=en). Please click the links for more details.
