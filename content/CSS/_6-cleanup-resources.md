+++
title = "Clean up resources"
weight = 26
+++

So far, we have configured and verified an end-to-end live streaming workflow using Cloud Streaming Service.

To prevent unnecessary charges, you need to deprovision the following resources.

## 1. Remove binding and delete Feature Configuration 
1. Click **Adaptive Bitrate** in the CSS console left menu.
2. Click the Adaptive Bitrate configuration you created.
3. Click **Unbind** at the bottom of the configuration to unlink the configuration from the domain.
4. Delete the Adaptive Bitrate configuration by clicking **Delete** at the top of the configuration.

## 2. Delete domain and delete domain
1. Click **Domain** on the left menu of the CSS console.
2. Check the Push and Play domains you created, and click **Delete** on the right to delete the domain configuration.
3. Finally, delete the domains from the domain registrar you are using.