# Description

This document describes how to use this repository

## Important branches

There are 4 main branches in this repository:

`develop` - This branch is where all features and fixes are merged.
Once you are ready to push a build for testing, then merge this branch into `staging` branch

`dev` - pushing to this branch will build dev versions of the IOS and Android mobile apps for testing
An Android .apk file and IOS .ipa file will be sent to slack for download and installation.
Merging to this branch will also increment the version number
Once you are ready to push a build for wider testing, then merge this branch into `staging` branch

`staging` - pushing to this branch will build staging versions of the IOS and Android mobile apps for testing.
Only update this branch by merging from `dev` branch

`main` - pushing to this branch will build production versions of the IOS and Android mobile apps for release.
Only do so if the build has passed testing from the `staging` branch
Only update this branch by merging from `staging` branch
If this branch is updated, then merge it back into the `develop` branch before continuing any further work

The direction of merges must be in this order

develop -> dev -> staging -> main

anything can be merged into the develop branch after a code review

## Creating new branches

Create a branch for any task you are given

When adding new features or changing something create a new branch with prefix `feat/`. For example:
`feat/ticket-01-example-description`
where `ticket-01` is some kind of ticket number from Jira or other ticketing system

when fixing bug create a new branch with the prefix `fix/`. For example:
`fix/ticket-01-correct-page2-text`