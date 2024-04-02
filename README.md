# tencent-workshop-media-livestreaming

This is a repository for the workshop.

This workshop is based on Hugo framework, so that installataion of hugo is necessary to start with this workshop.
If you are first to use Hugo, please visit and follow the guide : https://gohugo.io/getting-started/quick-start/

# Directory Structure
1. Contents (markdown file) is located in **/content directory**. 
- Sub-directory will be the big subject that can be displayed in left meny bar.
- In each directory, there should be a _index.md file to introduce the subject.
- Within each directory, the page order will be followed by the **weight** parameter described in the each md file.
2. Attachments or Screenshots are located in **/static directory**.
3. If you compile the workshop by running **hugo** command, you will find the deliverables in **/public directory**.

# How to localize the materials 
1. First of all, you need to duplicate file and add suffix with language code. (i.e. _index.cn.md)
2. Modify content to translated .md file.
3. Once you localize all the contents, you can make the language available by changing configuration option in **hugo.toml** file
- For more detail of multi-lingual, please visit : https://mcshelby.github.io/hugo-theme-relearn/cont/i18n/index.html


> This workshop adopted relearn theme of hugo framework. For the markdowns including attaching images, links, please visit this guide : https://mcshelby.github.io/hugo-theme-relearn/cont/markdown/index.html

# If you make changes for the workshop
0. Install git and hugo
1. Clone repository 
2. run **hugo server** (local environment) command
3. Make changes
4. Verify changes in real time
5. Once change is completed, run **hugo** command
5. Deploy files into COS of respository. (compiled output is located in /public directory)
6. Commit & push changes into the repository.
