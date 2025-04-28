Typical folder structure for Flutter / React Native, Cordova or Ionic projects.  Replace lib with src for non-flutter projects

```
_docs/ - documentation / postman / insomnia

_hooks/ - git hooks
_hooks/pre-commit - minimum to have a pre-commit hook to lint, prettify and run unit test on commit

scripts/ - any scripts to patch native folders for specific changes
storybook/  - storybook or equivalent folder if used
plugins/ - local copy of external plugins for React Native / packages for Flutter

src/
src/app         - expo-router file based routes

src/_templates/ - example template of different types of components used in this project
                 in flutter add a template for stateful and stateless widget
src/assets/     - icons, images, fonts
src/assets/svg
src/assets/png
src/assets/icons
src/assets/fonts

src/theme/ - colors, dark/light modes, theme provider, responsiveness utils, fonts, spacing
src/i18n/  - for internationalization and localization
src/components/ - use widgets for flutter / components for react-native
src/controllers/ - anything related to state management go here.
                   Example: flutter providers/locators, react native (redux, context, hooks)
                   Controllers should change the state of a model

src/graphql/ - if used
src/models/ - abstract representations of objects, e.g database models/ JSON models

src/pages/
src/pages/screen1/ - each page should be in its own folder
src/pages/screen1/components/ - components/widgets specific to this page

src/services/ - abstract interface to all native functionality
src/services/http - api client
src/services/storage - local storage
src/services/camera - camera access
src/services/geolocation - geolocation

src/utils/  - library of functions that use the services, converters, formatters,

src/routes/ - defines all possible routes in the app

src/types.d.ts - type definitions

src/constants.dart / .tsx - contains urls, time intervals, etc
                            This could also be a folder if there are many constants

src/main.dart / index.tsx - main entry point

test/ - unit test for general functions. component test should be within a components folder (for flutter only)
       for other type of projects tests should be located close to where the component is

Files in root folder
env.example - example environment file for secret variables used in the CI/CD process

env.settings - public settings for the helper scripts

README.md - how to quickly download, initialise and run project.  More detailed documents should go into _docs folder

run - shell script to simplify typical project operations, example ./run start, ./run build
```
