export const pubspecMockData: any = [
  {
    package: {
      name: "testpackage",
      latest_version: "1.1.1",
      flutter_compatible: true,
    },
    mocks: [
      {
        name: "firebase_messaging pubspec mock",
        source:
          'name: firebase_messaging\r\ndescription: Flutter plugin for Firebase Cloud Messaging, a cross-platform\r\n  messaging solution that lets you reliably deliver messages on Android and iOS.\r\nauthor: Flutter Team <flutter-dev@googlegroups.com>\r\nhomepage: https://github.com/flutter/plugins/tree/master/packages/firebase_messaging\r\nversion: 2.0.0\r\n\r\nflutter:\r\n  plugin:\r\n    androidPackage: io.flutter.plugins.firebasemessaging\r\n    iosPrefix: FLT\r\n    pluginClass: FirebaseMessagingPlugin\r\n\r\ndependencies:\r\n  meta: ^1.0.4\r\n  platform: ^2.0.0\r\n  flutter:\r\n    sdk: flutter\r\n\r\ndev_dependencies:\r\n  test: ^1.3.0\r\n  mockito: ^3.0.0\r\n  flutter_test:\r\n    sdk: flutter\r\n\r\nenvironment:\r\n  sdk: ">=2.0.0-dev.28.0 <3.0.0"\r\n  flutter: ">=0.1.4 <2.0.0"',
        target:
          'name: firebase_messaging\r\ndescription: Flutter plugin for Firebase Cloud Messaging, a cross-platform\r\n  messaging solution that lets you reliably deliver messages on Android and iOS.\r\nauthor: Flutter Team <flutter-dev@googlegroups.com>\r\nhomepage: https://github.com/flutter/plugins/tree/master/packages/firebase_messaging\r\nversion: 2.0.0\r\n\r\nflutter:\r\n  plugin:\r\n    androidPackage: io.flutter.plugins.firebasemessaging\r\n    iosPrefix: FLT\r\n    pluginClass: FirebaseMessagingPlugin\r\n\r\ndependencies:\r\n  meta: ^1.0.4\r\n  platform: ^2.0.0\r\n  flutter:\r\n    sdk: flutter\r\n  testpackage: ^1.1.1\r\n\r\ndev_dependencies:\r\n  test: ^1.3.0\r\n  mockito: ^3.0.0\r\n  flutter_test:\r\n    sdk: flutter\r\n\r\nenvironment:\r\n  sdk: ">=2.0.0-dev.28.0 <3.0.0"\r\n  flutter: ">=0.1.4 <2.0.0"',
      },
      {
        name: "stapps_alpha pubspec mock",
        source:
          'name: alpha\r\ndescription: A new Flutter project.\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  cupertino_icons: ^0.1.2\r\n\r\n  page_transformer:\r\n    git:\r\n      url: https://github.com/FlutterRocks/page-transformer.git\r\n  redux: "^3.0.0"\r\n  flutter_redux: "^0.5.0"\r\n  redux_thunk: "^0.2.0"\r\n  stapps_manager:\r\n    path: "stapps_manager/"\r\n  flutter_launcher_icons: "^0.3.2"\r\n  validator: ">=0.0.4 <0.1.0"\r\n  cloud_firestore: "^0.7.2"\r\n  firebase_auth: "^0.5.10"\r\n  firebase_analytics: "^0.3.3"\r\n  url_launcher: "^3.0.1"\r\n  \r\ndev_dependencies:\r\n  flutter_test:\r\n    sdk: flutter\r\n\r\nflutter_icons:\r\n  image_path: "meta/icon_android.png"\r\n  android: true\r\n  ios: "meta/icon_ios.png"\r\n\r\nflutter:\r\n  uses-material-design: true\r\n\r\n  assets:\r\n   - assets/images/logo/logo.png\r\n   - assets/images/logo/logo_circle.png\r\n   - assets/images/logo/logo_circle_shadow.png\r\n   - assets/images/introduction/sports1.gif\r\n   - assets/images/introduction/sports2.gif\r\n   - assets/images/introduction/sports3.gif\r\n   - assets/images/introduction/privacy.jpg\r\n   - assets/images/introduction/permissions.png\r\n   - assets/images/cesantlogo.png\r\n   - assets/images/thankyou.gif\r\n   - assets/images/animatedlogo.gif\r\n   - meta/splash.png\r\n  #  - ...\r\n\r\n  # An image asset can refer to one or more resolution-specific "variants", see\r\n  # https://flutter.io/assets-and-images/#resolution-aware.\r\n\r\n  # For details regarding adding assets from package dependencies, see\r\n  # https://flutter.io/assets-and-images/#from-packages\r\n\r\n  # To add custom fonts to your application, add a fonts section here,\r\n  # in this "flutter" section. Each entry in this list should have a\r\n  # "family" key with the font family name, and a "fonts" key with a\r\n  # list giving the asset and other descriptors for the font. For\r\n  # example:\r\n  fonts:\r\n    - family: Rubik\r\n      fonts:\r\n        - asset: assets/fonts/Rubik/Rubik-Regular.ttf\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Black.ttf\r\n          weight: 900\r\n        - asset: assets/fonts/Rubik/Rubik-BlackItalic.ttf\r\n          weight: 900\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Bold.ttf\r\n          weight: 700\r\n        - asset: assets/fonts/Rubik/Rubik-BoldItalic.ttf\r\n          weight: 700\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Italic.ttf\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Light.ttf\r\n          weight: 300\r\n        - asset: assets/fonts/Rubik/Rubik-LightItalic.ttf\r\n          weight: 300\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Medium.ttf\r\n          weight: 500\r\n        - asset: assets/fonts/Rubik/Rubik-MediumItalic.ttf\r\n          weight: 500\r\n          style: italic\r\n    - family: icomoon\r\n      fonts:\r\n        - asset: assets/fonts/icomoon/icomoon.ttf\r\n    - family: RobotoMono\r\n      fonts:\r\n        - asset: assets/fonts/RobotoMono/RobotoMono.ttf\r\n  #   - family: Trajan Pro\r\n  #     fonts:\r\n  #       - asset: fonts/TrajanPro.ttf\r\n  #       - asset: fonts/TrajanPro_Bold.ttf\r\n  #         weight: 700\r\n  #\r\n  # For details regarding fonts from package dependencies,\r\n  # see https://flutter.io/custom-fonts/#from-packages',
        target:
          'name: alpha\r\ndescription: A new Flutter project.\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  cupertino_icons: ^0.1.2\r\n  testpackage: ^1.1.1\r\n\r\n  page_transformer:\r\n    git:\r\n      url: https://github.com/FlutterRocks/page-transformer.git\r\n  redux: "^3.0.0"\r\n  flutter_redux: "^0.5.0"\r\n  redux_thunk: "^0.2.0"\r\n  stapps_manager:\r\n    path: "stapps_manager/"\r\n  flutter_launcher_icons: "^0.3.2"\r\n  validator: ">=0.0.4 <0.1.0"\r\n  cloud_firestore: "^0.7.2"\r\n  firebase_auth: "^0.5.10"\r\n  firebase_analytics: "^0.3.3"\r\n  url_launcher: "^3.0.1"\r\n  \r\ndev_dependencies:\r\n  flutter_test:\r\n    sdk: flutter\r\n\r\nflutter_icons:\r\n  image_path: "meta/icon_android.png"\r\n  android: true\r\n  ios: "meta/icon_ios.png"\r\n\r\nflutter:\r\n  uses-material-design: true\r\n\r\n  assets:\r\n   - assets/images/logo/logo.png\r\n   - assets/images/logo/logo_circle.png\r\n   - assets/images/logo/logo_circle_shadow.png\r\n   - assets/images/introduction/sports1.gif\r\n   - assets/images/introduction/sports2.gif\r\n   - assets/images/introduction/sports3.gif\r\n   - assets/images/introduction/privacy.jpg\r\n   - assets/images/introduction/permissions.png\r\n   - assets/images/cesantlogo.png\r\n   - assets/images/thankyou.gif\r\n   - assets/images/animatedlogo.gif\r\n   - meta/splash.png\r\n  #  - ...\r\n\r\n  # An image asset can refer to one or more resolution-specific "variants", see\r\n  # https://flutter.io/assets-and-images/#resolution-aware.\r\n\r\n  # For details regarding adding assets from package dependencies, see\r\n  # https://flutter.io/assets-and-images/#from-packages\r\n\r\n  # To add custom fonts to your application, add a fonts section here,\r\n  # in this "flutter" section. Each entry in this list should have a\r\n  # "family" key with the font family name, and a "fonts" key with a\r\n  # list giving the asset and other descriptors for the font. For\r\n  # example:\r\n  fonts:\r\n    - family: Rubik\r\n      fonts:\r\n        - asset: assets/fonts/Rubik/Rubik-Regular.ttf\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Black.ttf\r\n          weight: 900\r\n        - asset: assets/fonts/Rubik/Rubik-BlackItalic.ttf\r\n          weight: 900\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Bold.ttf\r\n          weight: 700\r\n        - asset: assets/fonts/Rubik/Rubik-BoldItalic.ttf\r\n          weight: 700\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Italic.ttf\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Light.ttf\r\n          weight: 300\r\n        - asset: assets/fonts/Rubik/Rubik-LightItalic.ttf\r\n          weight: 300\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Medium.ttf\r\n          weight: 500\r\n        - asset: assets/fonts/Rubik/Rubik-MediumItalic.ttf\r\n          weight: 500\r\n          style: italic\r\n    - family: icomoon\r\n      fonts:\r\n        - asset: assets/fonts/icomoon/icomoon.ttf\r\n    - family: RobotoMono\r\n      fonts:\r\n        - asset: assets/fonts/RobotoMono/RobotoMono.ttf\r\n  #   - family: Trajan Pro\r\n  #     fonts:\r\n  #       - asset: fonts/TrajanPro.ttf\r\n  #       - asset: fonts/TrajanPro_Bold.ttf\r\n  #         weight: 700\r\n  #\r\n  # For details regarding fonts from package dependencies,\r\n  # see https://flutter.io/custom-fonts/#from-packages',
      },
      {
        name: "PizzaParty pubspec mock",
        source:
          "name: PizzaParty\r\ndescription: Your food at your door.\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  cupertino_icons: ^0.1.2",
        target:
          "name: PizzaParty\r\ndescription: Your food at your door.\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  cupertino_icons: ^0.1.2\r\n  testpackage: ^1.1.1",
      },
    ],
  },
  {
    package: {
      name: "share",
      latest_version: "0.5.3",
      flutter_compatible: true,
    },
    mocks: [
      {
        name: "skybur's shared_preferences pubspec mock",
        source:
          'name: skybur\r\ndescription: The problem reporter.\r\nversion: 2.0.0\r\n\r\nflutter:\r\n  plugin:\r\n    androidPackage: io.flutter.plugins.firebasemessaging\r\n    iosPrefix: FLT\r\n    pluginClass: FirebaseMessagingPlugin\r\n\r\ndependencies:\r\n  meta: ^1.0.4\r\n  shared_preferences: ^0.4.3\r\n  platform: ^2.0.0\r\n  flutter:\r\n    sdk: flutter\r\n\r\ndev_dependencies:\r\n  test: ^1.3.0\r\n  mockito: ^3.0.0\r\n  flutter_test:\r\n    sdk: flutter\r\n\r\nenvironment:\r\n  sdk: ">=2.0.0-dev.28.0 <3.0.0"\r\n  flutter: ">=0.1.4 <2.0.0"',
        target:
          'name: skybur\r\ndescription: The problem reporter.\r\nversion: 2.0.0\r\n\r\nflutter:\r\n  plugin:\r\n    androidPackage: io.flutter.plugins.firebasemessaging\r\n    iosPrefix: FLT\r\n    pluginClass: FirebaseMessagingPlugin\r\n\r\ndependencies:\r\n  meta: ^1.0.4\r\n  shared_preferences: ^0.4.3\r\n  platform: ^2.0.0\r\n  flutter:\r\n    sdk: flutter\r\n  share: ^0.5.3\r\n\r\ndev_dependencies:\r\n  test: ^1.3.0\r\n  mockito: ^3.0.0\r\n  flutter_test:\r\n    sdk: flutter\r\n\r\nenvironment:\r\n  sdk: ">=2.0.0-dev.28.0 <3.0.0"\r\n  flutter: ">=0.1.4 <2.0.0"',
      },
      {
        name: "stapps_alpha pubspec mock",
        source:
          'name: alpha\r\ndescription: A new Flutter project.\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  cupertino_icons: ^0.1.2\r\n\r\n  page_transformer:\r\n    git:\r\n      url: https://github.com/FlutterRocks/page-transformer.git\r\n  redux: "^3.0.0"\r\n  flutter_redux: "^0.5.0"\r\n  redux_thunk: "^0.2.0"\r\n  stapps_manager:\r\n    path: "stapps_manager/"\r\n  flutter_launcher_icons: "^0.3.2"\r\n  validator: ">=0.0.4 <0.1.0"\r\n  cloud_firestore: "^0.7.2"\r\n  firebase_auth: "^0.5.10"\r\n  firebase_analytics: "^0.3.3"\r\n  url_launcher: "^3.0.1"\r\n  \r\ndev_dependencies:\r\n  flutter_test:\r\n    sdk: flutter\r\n\r\nflutter_icons:\r\n  image_path: "meta/icon_android.png"\r\n  android: true\r\n  ios: "meta/icon_ios.png"\r\n\r\nflutter:\r\n  uses-material-design: true\r\n\r\n  assets:\r\n   - assets/images/logo/logo.png\r\n   - assets/images/logo/logo_circle.png\r\n   - assets/images/logo/logo_circle_shadow.png\r\n   - assets/images/introduction/sports1.gif\r\n   - assets/images/introduction/sports2.gif\r\n   - assets/images/introduction/sports3.gif\r\n   - assets/images/introduction/privacy.jpg\r\n   - assets/images/introduction/permissions.png\r\n   - assets/images/cesantlogo.png\r\n   - assets/images/thankyou.gif\r\n   - assets/images/animatedlogo.gif\r\n   - meta/splash.png\r\n  #  - ...\r\n\r\n  # An image asset can refer to one or more resolution-specific "variants", see\r\n  # https://flutter.io/assets-and-images/#resolution-aware.\r\n\r\n  # For details regarding adding assets from package dependencies, see\r\n  # https://flutter.io/assets-and-images/#from-packages\r\n\r\n  # To add custom fonts to your application, add a fonts section here,\r\n  # in this "flutter" section. Each entry in this list should have a\r\n  # "family" key with the font family name, and a "fonts" key with a\r\n  # list giving the asset and other descriptors for the font. For\r\n  # example:\r\n  fonts:\r\n    - family: Rubik\r\n      fonts:\r\n        - asset: assets/fonts/Rubik/Rubik-Regular.ttf\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Black.ttf\r\n          weight: 900\r\n        - asset: assets/fonts/Rubik/Rubik-BlackItalic.ttf\r\n          weight: 900\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Bold.ttf\r\n          weight: 700\r\n        - asset: assets/fonts/Rubik/Rubik-BoldItalic.ttf\r\n          weight: 700\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Italic.ttf\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Light.ttf\r\n          weight: 300\r\n        - asset: assets/fonts/Rubik/Rubik-LightItalic.ttf\r\n          weight: 300\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Medium.ttf\r\n          weight: 500\r\n        - asset: assets/fonts/Rubik/Rubik-MediumItalic.ttf\r\n          weight: 500\r\n          style: italic\r\n    - family: icomoon\r\n      fonts:\r\n        - asset: assets/fonts/icomoon/icomoon.ttf\r\n    - family: RobotoMono\r\n      fonts:\r\n        - asset: assets/fonts/RobotoMono/RobotoMono.ttf\r\n  #   - family: Trajan Pro\r\n  #     fonts:\r\n  #       - asset: fonts/TrajanPro.ttf\r\n  #       - asset: fonts/TrajanPro_Bold.ttf\r\n  #         weight: 700\r\n  #\r\n  # For details regarding fonts from package dependencies,\r\n  # see https://flutter.io/custom-fonts/#from-packages',
        target:
          'name: alpha\r\ndescription: A new Flutter project.\r\n\r\ndependencies:\r\n  flutter:\r\n    sdk: flutter\r\n  cupertino_icons: ^0.1.2\r\n  share: ^0.5.3\r\n\r\n  page_transformer:\r\n    git:\r\n      url: https://github.com/FlutterRocks/page-transformer.git\r\n  redux: "^3.0.0"\r\n  flutter_redux: "^0.5.0"\r\n  redux_thunk: "^0.2.0"\r\n  stapps_manager:\r\n    path: "stapps_manager/"\r\n  flutter_launcher_icons: "^0.3.2"\r\n  validator: ">=0.0.4 <0.1.0"\r\n  cloud_firestore: "^0.7.2"\r\n  firebase_auth: "^0.5.10"\r\n  firebase_analytics: "^0.3.3"\r\n  url_launcher: "^3.0.1"\r\n  \r\ndev_dependencies:\r\n  flutter_test:\r\n    sdk: flutter\r\n\r\nflutter_icons:\r\n  image_path: "meta/icon_android.png"\r\n  android: true\r\n  ios: "meta/icon_ios.png"\r\n\r\nflutter:\r\n  uses-material-design: true\r\n\r\n  assets:\r\n   - assets/images/logo/logo.png\r\n   - assets/images/logo/logo_circle.png\r\n   - assets/images/logo/logo_circle_shadow.png\r\n   - assets/images/introduction/sports1.gif\r\n   - assets/images/introduction/sports2.gif\r\n   - assets/images/introduction/sports3.gif\r\n   - assets/images/introduction/privacy.jpg\r\n   - assets/images/introduction/permissions.png\r\n   - assets/images/cesantlogo.png\r\n   - assets/images/thankyou.gif\r\n   - assets/images/animatedlogo.gif\r\n   - meta/splash.png\r\n  #  - ...\r\n\r\n  # An image asset can refer to one or more resolution-specific "variants", see\r\n  # https://flutter.io/assets-and-images/#resolution-aware.\r\n\r\n  # For details regarding adding assets from package dependencies, see\r\n  # https://flutter.io/assets-and-images/#from-packages\r\n\r\n  # To add custom fonts to your application, add a fonts section here,\r\n  # in this "flutter" section. Each entry in this list should have a\r\n  # "family" key with the font family name, and a "fonts" key with a\r\n  # list giving the asset and other descriptors for the font. For\r\n  # example:\r\n  fonts:\r\n    - family: Rubik\r\n      fonts:\r\n        - asset: assets/fonts/Rubik/Rubik-Regular.ttf\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Black.ttf\r\n          weight: 900\r\n        - asset: assets/fonts/Rubik/Rubik-BlackItalic.ttf\r\n          weight: 900\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Bold.ttf\r\n          weight: 700\r\n        - asset: assets/fonts/Rubik/Rubik-BoldItalic.ttf\r\n          weight: 700\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Italic.ttf\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Light.ttf\r\n          weight: 300\r\n        - asset: assets/fonts/Rubik/Rubik-LightItalic.ttf\r\n          weight: 300\r\n          style: italic\r\n\r\n        - asset: assets/fonts/Rubik/Rubik-Medium.ttf\r\n          weight: 500\r\n        - asset: assets/fonts/Rubik/Rubik-MediumItalic.ttf\r\n          weight: 500\r\n          style: italic\r\n    - family: icomoon\r\n      fonts:\r\n        - asset: assets/fonts/icomoon/icomoon.ttf\r\n    - family: RobotoMono\r\n      fonts:\r\n        - asset: assets/fonts/RobotoMono/RobotoMono.ttf\r\n  #   - family: Trajan Pro\r\n  #     fonts:\r\n  #       - asset: fonts/TrajanPro.ttf\r\n  #       - asset: fonts/TrajanPro_Bold.ttf\r\n  #         weight: 700\r\n  #\r\n  # For details regarding fonts from package dependencies,\r\n  # see https://flutter.io/custom-fonts/#from-packages',
      },
    ],
  },
];
