/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTRootView.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  /**
   * $ npm start
   */

  //jsCodeLocation = [NSURL URLWithString:@"http://localhost:8080/index.ios.bundle"];
  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8080/index.ios.bundle?platform=ios"];

  /**
   * OPTION 2
   * Load from pre-bundled file on disk. To re-generate the static bundle
   * from the root of your project directory, run
   *
   * $ curl 'http://localhost:8080/index.ios.bundle?dev=false&minify=true' -o ios/main.jsbundle
   *
   * see http://facebook.github.io/react-native/docs/runningondevice.html
   */

    //jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];


  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"App"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [[UIViewController alloc] init];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
