+++
title = "Clean up resources"
weight = 26
+++

Now, we have confirmed the broadcast-grade end-to-end live streaming workflow using the CDN feature of Cloud Streaming Service, StreamLive, and StreamPackage.

To prevent unnecessary charges, we organize the following resources.

## 1. Delete CSS configuration
1. Click **Domain** on the left menu of the CSS console.
2. Check the configured CDN playback domain and remove it by clicking the Delete button.

## 2. Delete StreamLive configuration
1. Click **Channel** on the left menu of the StreamLive console.
2. If the status of the StreamLive channel is RUNNING, click Stop to stop it.
3. Check the StreamLive channels you have configured and click Delete to remove them.
4. Click **Input** on the left menu of the StreamLive console.
5. Check the StreamLive inputs you configured and click Delete to remove them.
6. Click **Security Group** in the left menu of the StreamLive console.
7. Check the configured Security Group and click Delete to remove it.

## 3. Delete StreamPackage configuration
1. Click **Channel Management** on the left menu of the StreamPackage console.
2. Check the configured StreamPackage channel and click to enter detailed settings.
3. Click the **Endpoints** tab, and then click Delete to remove the Endpoint configuration.
4. Press the back button to go to **Channel Management** configuration and remove the StreamPackage channel you configured.