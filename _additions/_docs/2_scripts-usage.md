# Description

This document lists some of the scripts and tools in this project.

The two main scripts `run` and `appsign` are configured through the `env.settings` file and environment variables

## run script

The run script is the main script you will be using to interact with the project.
You can make a copy and customize to your needs, but don't commit back to the repository until you have checked with other team members
It provides a layer of abstraction so that you can use the same command to do the same task across different platforms.

For instance, the `start` command is used to run the code locally for interactive development.

In this mobile project:

`./run start.i` will run the code in a local IOS simulator

`./run start.a` will run the code in a local Android simulator

`./run start.w` to start a web frontend locally

You can customize it to start the emulator of your choice.


Here are some of the other commands for this React Native project.
Note, some commands are only suitable to be run in a CI/CD pipeline as your local machine may not have the required
secret environment variables

`./run format` - checks the styling of your code

`./run lint` - checks the syntax and validity of your code

`./run typecheck` - run check on typescript code

`./run test` - run unit tests that you have defined

`./run android-version` - show the versionName of an android .apk or .aab file
passing an extra parameter `all` will also show the versionCode

For the next two command configure the settings in the .yaml file before running

`./run update-icon` - updates the application launch icon from an image in the `assets` folder

`./run update-name` - updates the application label under the launch icon

Commands from here are mainly for CI/CD pipeline

`./run bump` - increments the the version number in pubspec.yaml or package.json and commits this to the main branch

`./run build-ios` - build a production release .ipa file suitable for upload with the next command

`./run upload-ios` - uploads a .ipa file at a predetermined location to the IOS Applestore

`./run build-apk` - builds a production release of the Android app for testing

`./run build-aab` - builds a production release of the Android app for upload to the Google Play store

`./run upload-aab` - uploads a given .aab file to the Google play store

`./run slack-send "Message" "filename.apk" "/full/path/to/filename.apk"` - send a slack message with attachment
to a predetermined channel defined in the `env.settings` file

`./run version-set` - Sets the version defined.
#### About ./run version-set
This is a command that lets you set any version of the application. You can do this to bump your version up to a client specified one, or just to roll back to a temporary version. If you run this, and then use a branch that increments the version, It will still increment it. 

Before running this command, change it in the package.json file in the root folder of the project. To do this, open your package.json file, and look for the following at the top:
```
  "version": "1.1.0",
  "versionBuildCode": "36",
```
The top one is the friendly name that the appstores will see, the versionBuildCode is the one that needs to be unique in Android (buildcode). You can change both of these, and likely will need to adjust the version one before releasing it to the appstores so the end user can see that there is a new version. The versionBuildCode aka buildcode is not visible in the app store, only internally, in test flight, and in app information during app submission.

So change the information above as needed, then save your file, then run the above command.


## appsign script

The appsign script is a helper for managing signing of the mobile apps
See the files android-setup and ios-setup on how to use