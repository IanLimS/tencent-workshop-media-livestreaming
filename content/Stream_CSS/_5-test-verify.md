+++
title = "Test & Verify"
weight = 25
+++

Now, we have completed configuring StreamPackage and StreamLive to provide broadcast-grade video quality and functionality.
You have completed configuring CSS Playback Domain as a CDN for Live Streaming.

Now let's verify the configurations.

## Check StreamLive settings and information

1. Visit the **StreamLive** console.

2. Visit the **Channel** menu in the left menu of the console and check the created channel.

3. If the channel status is **IDLE**, click the **Start** button in the **Operation** menu on the right to run the channel.

4. Visit the **Input** menu in the left menu of the console and check the created input.

5. Check URL A. Check for URLs with a schema like *rtmp://xxxxxxx.ap-{region}-x.streamlive.myqcloud.com/{APP_NAME}/{STREAM_NAME}*.
- When obtaining a live feed using OBS, the following input is used.
- OBS Server: **rtmp://xxxxxxx.ap-{region}-x.streamlive.myqcloud.com/{APP_NAME}/**
- OBS Stream Key: **{STREAM_NAME}**

## Running and setting up OBS Studio

6. Run **OBS Studio**.

* In this lab, we will practice Push through OBS.
* Run OBS and click the Settings button,
![ALT IMG](/images/css-basic/6-4-test-push-obs-setting.png?width=10vw&classes=left)
* Enter the values in the **Stream** menu as follows. For OBS server and OBS Stream key information, please refer to the OBS server and stream key values in step 5 above. After entering the values, click the Save (OK) button to save the configuration.
![ALT IMG](/images/stream-css/5-test-push-obs-config.png?width=40vw&classes=left)
* And when you click the **Start Streaming** button, the camera's feed will be obtained as a CSS Push URL through OBS.

> NOTE: Information on environment settings for OBS download and StreamLive can be found [here](https://www.tencentcloud.com/document/product/1048/50115).

## Check and test Playback URL

7. Visit the **StreamPackage** console. Click Configure and visit the Endpoint tab. Copy the URL value from here.
![ALT IMG](/images/stream-css/5-strpkg-endpoint.png)

8. Run **VLC media player**. Run the *File > Open Network* menu and paste the copied URL. **Check if the StreamPackage URL is played normally**.
- The format of the URL will be similar to the following.
- *http://xxxxxxx.ap-{region}.mediapackage.srclivepull.myqcloud.com/v1/xxxxxx/xxxx/main.m3u8*
![ALT IMG](/images/stream-css/5-test-strpkg.png?width=40vw&classes=left)

9. Run the *File > Open Network* menu in **VLC media player**, and this time change the domain to CSS Playback Domain (CDN) in the copied URL and try playing. **Check if the CSS Playback URL is played properly**.
- The format of the URL will be similar to the following:
- *http://{YOUR_CSS_PLAYBACK_DOMAIN}/v1/xxxxxx/xxxx/main.m3u8*
![ALT IMG](/images/stream-css/5-test-cssplayback.png?width=40vw&classes=left)

> NOTE: The Playback Domain of CSS (Cloud Streaming Services) feature as a CDN. If you want to make a secure connection using the HTTPS protocol, (a) [enable HTTPS](https://www.tencentcloud.com/document/product/267/31066?lang=en) in the CSS Playback domain, and (b) You must [obtain a certificate and upload it to CSS](https://www.tencentcloud.com/document/product/267/41317?lang=en). Please click the links for more details.
