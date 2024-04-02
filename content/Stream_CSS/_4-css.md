+++
title = "Create CSS CDN"
weight = 24
+++

When implementing video workloads for large-scale events and 24x7, CSS can be leveraged as a CDN to handle large viewer traffic. After configuring the StreamPackage, you can configure a CSS Playback Domain and associate it with the StreamPackage.

Let's take a look at how to configure CSS as a CDN which is optimized for Live Streaming as follows.

### CSS Playback Domain Configuration

1. Click the **Domain** tab on the left tab of the CSS console. Then you can check the currently configured CSS domains.

2. Click the **Add Domain** button located at the top of the main menu.
![Add domain](/images/stream-css/3-1-css-console-new-domain.png)

3. When the Add Domain pop-up appears, change the Type to Playback Domain and enter the values as shown below. Once the input is complete, click the **Add Domain** button to move to the next step.
- Type: Play domain
- Acceleration region: Outside Chinese mainland
- Domain Name: Domain name to use for playback
![Add play domain](/images/stream-css/3-1-add-play-domain-1.png?width=40vw&classes=left)

> Note: If this is your first time registering a CSS Domain, a separate domain ownership verification process is required. After verifying ownership of the domain by adding a TXT record to the domain registration service, click **Verify Now** to complete domain ownership verification and move on to the next step.
![ALT_IMG](/images/stream-css/3-2-add-play-domain-2-ownership-verify.png?width=40vw&classes=left)

4. Refer to the CNAME Configuration menu and add the CNAME value for host in the DNS service.

- **CNAME Configuration menu**
![CNAME Configuration menu](/images/stream-css/3-3-add-play-domain-2.png?width=40vw&classes=left)
- **Add CNAME record to DNS** (*This is example screenshot so that the domain name can be differnt*)
![Add domain](/images/css-basic/4-2-css-play-domain-cname.png?width=40vw&classes=left)
- **CNAME record verification**
![Record verification](/images/stream-css/3-5-css-play-domain-cname-verify.png?width=40vw&classes=left)

5. Now configure the origin for CSS CDN. This configuration can be done from the StreamPackage console or CSS console.

### Integration of CSS Playback Domain with StreamPackage

6. **Go to the StreamPackage console** and navigate to the StreamPackage configuration configured in the previous section. Click the CDN tab in the top menu.
![ALT_IMG](/images/stream-css/3-6-add-play-connect-strpkg.png?width=60vw&classes=left)

7. Click the **Edit Configuration** button and select the **CSS Playback domain** you created. StreamPackage and CSS CDN can be natively integrated by default, so no additional integration procedures are required.
![ALT_IMG](/images/stream-css/3-7-add-play-connect-strpkg.png?width=40vw&classes=left)

8. In **StreamPackage configuration**, check that **CSS Playback domain is configured as CDN** and that CNAME and Status are all normal.
![ALT_IMG](/images/stream-css/3-8-add-play-connect-strpkg.png?width=40vw&classes=left)

> Note. If you go to **CSS configuration**, you can see that **Origin server mode** is activated, and in **Origin-pull configuration**, only StreamPackage Id is integrated.
>> When configuring CSS for Live Streaming CDN only or integrating with 3rd party live streaming service, **Origin server mode** must be enabled.
![ALT_IMG](/images/stream-css/3-8-verify-css-oirigin-pull.png?width=40vw&classes=left)
