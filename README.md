# Barteguiden-App
A React Native app for Barteguiden.

## Setup
You'll need `Node.js 4.0 or newer`, `watchman` is also recommended.
For the iOS app, you'll need OSX and Xcode.

Run `npm install -g react-native-cli`

## Run the apps
### iOS
- Open `ios/BarteguidenApp.xcodeproj` and hit run in Xcode
- Hit ⌘-R in the iOS simulator to reload and see changes

### Android
- While in the project root folder
- `react-native run-android`
- Press the menu button (F2 by default, or ⌘-M in Genymotion) and select Reload JS to see your change
- Run `adb logcat *:S ReactNative:V ReactNativeJS:V` in a terminal to see your app's logs

