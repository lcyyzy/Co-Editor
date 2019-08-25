# Co-Editor
A collaborative editing tool based on Node.js and HTML.

## Overview
### Environment
macOS Mojave Version 10.14.1

### Requirement
- Node.js 10.16.3
- npm 6.9.0
- electron 6.0.4

### Download
```bash
git clone https://github.com/lcyyzy/Co-Editor.git
```

## User Guide and Functionality
### Log In
Since the current version is only applicable in local area network, you should log in with host and port. After logging in, you will be redirected to a editor page.

![img](https://github.com/lcyyzy/Co-Editor/raw/master/gif/login.gif)


### Send Friend Request
Only when two nodes are in the relationship of friends can they collaborate with each other. You can send request to other nodes. You can also accept or reject the friend request sent by others.

![img](https://github.com/lcyyzy/Co-Editor/raw/master/gif/add.gif)

### Collaborative Editing
There are two ways of collaborative editing. Sending messages like a chatting tool or realtime collaborative editing

#### Sending Message
After inserting something into the text box, you can change the style of the text. Then you can click button ```send``` to send it to specific friend.

![img](https://github.com/lcyyzy/Co-Editor/raw/master/gif/send.gif)

You can also send images.

![img](https://github.com/lcyyzy/Co-Editor/raw/master/gif/image.gif)

#### Real Time Collaborative Editing
When you swith on the ```Realtime Sharing```, the current content will be directly broadcast to all your friends. They can see what you are editing in real time.

![img](https://github.com/lcyyzy/Co-Editor/raw/master/gif/realtime.gif)

### Delete Friend
You can delete friends unilaterally. After deleting a friend, his editing will no longer be sent/realtime shared to you.

![img](https://github.com/lcyyzy/Co-Editor/raw/master/gif/delete.gif)



