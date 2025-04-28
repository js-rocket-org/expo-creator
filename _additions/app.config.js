

// Production is the default flavor
let BUNDLEID='io.rokt.mobiletrainer'
switch (process.env.FLAVOR) {
  case 'dev': BUNDLEID='io.rokt.mobiletrainer.dev'; break;
  case 'stg': BUNDLEID='io.rokt.mobiletrainer.stg'; break;
}

export default {
  "owner": "js-rocket",
  "expo": {
    "name": "template_expo",
    "slug": "expotesta",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./src/assets/png/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "splash": {
      "image": "./src/assets/png/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": BUNDLEID
    },
    "android": {
      "package": BUNDLEID,
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/png/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./src/assets/png/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "eas": {
        "projectId": "94dd26b2-13fd-4131-8c5a-c34207417617"
      }
    }
  }
}
