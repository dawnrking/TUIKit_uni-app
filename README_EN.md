# TUIKit uni-app Solution

[简体中文](README.md) | English

## Overview

TUIKit uni-app is a powerful UI component library built on Tencent Cloud's `AtomicXCore` SDK. `AtomicXCore` integrates the core capabilities of Tencent Cloud Real-Time Communication (TRTC), Instant Messaging (IM), Audio/Video Calling (TUICallEngine), and Room Management (TUIRoomEngine), providing a state-driven API design.

TUIKit uni-app provides a set of pre-built user interfaces (UI) on top of the core capabilities provided by `AtomicXCore`, enabling you to quickly integrate video interactive live streaming, voice chat rooms, audio/video calling, and instant messaging features into your uni-app applications without worrying about complex backend logic and state management.

## Usage Guide

Developers should choose the corresponding component directory based on the final **target packaging platform**:

- **iOS/Android App Development**: Use components from `./App` directory
- **WeChat Mini Program Development**: Use components from `./MiniProgram` directory

Through this separation, you can ensure that the components for each platform are **optimally adapted** versions, avoiding compatibility issues caused by cross-platform differences.

## Key Features

TUIKit uni-app provides complete UI implementations for the following core business scenarios based on `AtomicXCore`:

### 🎥 **Video/Audio Live Streaming**
- **Live List Management**: Fetch and display live room lists
- **Broadcasting & Viewing**: Create live rooms, join live streams
- **Seat Management**: Support seat management, audience mic on/off
- **Host Co-hosting**: Support cross-room host connections
- **Host PK Battles**: Support interactive PK battles between hosts
- **Interactive Features**:
  - **Gifts**: Send and receive virtual gifts
  - **Likes**: Live room like interactions
  - **Barrage**: Send and receive barrage messages

### 📞 **Audio/Video Calling**
- **Basic Calling**: Support 1v1 and multi-party audio/video calls
- **Call Management**: Support answer, reject, hang up operations
- **Device Management**: Camera and microphone control during calls
- **Call Records**: Query and delete call history

### 💬 **Instant Messaging (Chat)**
- **Conversation Management**: Fetch and manage conversation lists
- **Message Handling**: Support C2C (private chat) and Group chat scenarios, support text, image, voice, video and other message types
- **Contact Management**: Friend and blacklist management
- **Group Management**: Group profile, member and settings management

## Platform Support

- **App Platforms**: iOS, Android
- **Mini Program Platforms**: WeChat Mini Program
- **Framework Support**: Vue 3
- **Development Tool**: HBuilderX 3.99+

## License

This project is licensed under the [MIT License](LICENSE).