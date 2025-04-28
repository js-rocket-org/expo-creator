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

`./run gen-svg` - generates React Native files for the svg assets

Commands from here are mainly for CI/CD pipeline

`./run bump` - increments the the version number in pubspec.yaml or package.json and commits this to the main branch

`./run build.i prod` - build a production release .ipa file suitable for upload with the next command

`./run upload.i prod` - uploads a .ipa file at a predetermined location to the Apple store

`./run build.a prod` - builds a production release of the Android app for testing

`./run upload.a prod` - uploads a given .aab file to the Google play store

`./run ci-slack "Your message goes here"` - send a slack message


To see the other commands supported, inspect the end of the `run` script