+++
title = "Prerequisites"
weight = 21
+++

## 1. Domain Name

Tencent Cloud Cloud Streaming Service is serviced through the customer's domain for each stream channel, and **2 domains are required per live channel, a domain for cloud acquisition and a domain for playback**.

In other words, in order to use Tencent Cloud Cloud Streaming Service, it is necessary to **register ownership and verify of the domain owner during the Push and Play Domain registration process.** 
Once registered, you don't need to verify it again if you add a domain with the same domain.

## 2. OBS

In this workshop, [OBS Studio](https://obsproject.com/) is used.
Use OBS Studio on your laptop to ingest live video feed to Tencent Cloud Media Service. Tutorial videos explaining how to use OBS Studio are available online, and Tencent Cloud [CSS User Guide Document](https://www.tencentcloud.com/document/product/267/31569?lang=en) also provides detailed information. You can refer to the contents.

1. If [OBS Studio](https://obsproject.com/) is not installed, please install it now.
2. Run OBS Studio.
3. Click **+** in the **Scenes** menu at the bottom left and create a Scene named test.
4. Click **+** in the **Sources** menu on the right side of the Scenes menu, select the **Video Capture Device** option, and create a source. Once complete, the built-in camera video capture input will be centered.
5. Click the **Settings** button in the Controls menu at the bottom right, and then click the **Output** menu on the left side of the Setting window.
6. In the Output menu, change **Output Mode to Advanced** and then **change the configuration** as shown below. Leave everything else as default and click the OK button to complete the configuration.
![ALT IMG](/images/css-basic/obs_setting.png)
