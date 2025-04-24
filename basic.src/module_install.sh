#!/bin/sh
# This script specifies and installs the packages required for this project.
# Any packages added to this project should be added here first
#
# Keeping dependancies in this file makes it easier to upgrade since no version numbers are specified here.
# You can simply create a new project, copy the source code over then run this script

# To adjust or set global pnpm store for user
# pnpm config set store-dir $HOME/Library/pnpm/store/v10 --global


INSTALL_CMD="pnpm add "
INSTALL_CMD_DEV="pnpm add -D"
# INSTALL_CMD="npm install"
# INSTALL_CMD_DEV="npm install -D"

# react-native-screens react-native-safe-area-context required by @react-navigation/native
# react-native-gesture-handler required by @react-navigation/stack

$INSTALL_CMD react-native-svg \
   react-native-screens react-native-safe-area-context @react-navigation/native \
   react-native-gesture-handler  @react-navigation/stack \
   @react-native-async-storage/async-storage

$INSTALL_CMD_DEV @svgr/cli

# Good extras to include in projects
# pnpm add moment-timezone
# pnpm add -D @types/moment

# Also install IOS cocoapods
# cd ios ; pod install ; cd ..

# ./run update-app-icon
# ./run update-app-splash 508aa8
