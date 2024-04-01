+++
title = "Prerequisites"
weight = 21
+++

## 1. Domain Name

Tencent Cloud CSS is serviced through the customer's domain for each stream channel.
In this lab, **Playback domain** is required to use CSS CDN.

In other words, in order to use Tencent Cloud CSS CDN, registration step is required that **Procedure to inform and register ownership as the domain owner during the Playback Domain registration process** . Once registered, you don't need to verify it again if you add a domain with the same parent domain.

## 2. OBS

In this workshop, [OBS Studio](https://obsproject.com/) is used.
Use OBS Studio on your laptop to transmit live video to Tencent Cloud Media Service. Several tutorial videos explaining how to use OBS Studio are available online, and Tencent Cloud [CSS User Guide Document](https://www.tencentcloud.com/document/product/267/31569?lang=en) also provides detailed information. You can refer to the contents.

1. If [OBS Studio](https://obsproject.com/) is not installed, please install it now.
2. Run OBS Studio.
3. Click **+** in the **Scenes** menu at the bottom left and create a Scene named test.
4. Click **+** in the **Sources** menu on the right side of the Scenes menu, select the **Video Capture Device** option, and create a source. Once complete, the built-in camera video capture input will be centered.
5. Click the **Settings** button in the Controls menu at the bottom right, and then click the **Output** menu on the left side of the Setting window.
6. In the Output menu, change **Output Mode to Advanced** and then **change the configuration** as shown below. Leave everything else as default and click the OK button to complete the configuration.
![ALT IMG](/images/css-basic/obs_setting.png)

## 3. VLC

In this workshop, the stream will be played using [VLC media player](https://www.videolan.org/).
If [VLC media player](https://www.videolan.org/) is not installed, we recommend installing it.

