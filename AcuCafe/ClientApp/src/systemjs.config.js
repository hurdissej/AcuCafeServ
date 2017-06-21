﻿///**
// * System configuration for Angular samples
// * Adjust as necessary for your application needs.
// */
//(function (global) {
//  System.config({
//    paths: {
//      // paths serve as alias
//      'npm:': 'node_modules/'
//    },
//    // map tells the System loader where to look for things
//    map: {
//      // our app is within the app folder
//      'app': 'app',

//      // angular bundles
//      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
//      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
//      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
//      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
//      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
//      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
//      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
//      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

//      // other libraries
//      'rxjs':                      'npm:rxjs',
//      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
//    },
//    // packages tells the System loader how to load when no filename and/or no extension
//    packages: {
//      app: {
//        defaultExtension: "js",
//        meta: {
//          './*.js': {
//            loader: "systemjs-angular-loader.js"
//          }
//        }
//      },
//      rxjs: {
//        defaultExtension: "js"
//      }
//    }
//  });
//})(this);


(function (global) {
  System.config({
    map: {
      'rxjs': 'node_modules/rxjs',
      '@angular': 'node_modules/@angular',
      'app': './app',
      'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
    },
    packages: {
      'app': {
        main: 'main.js',
        defaultExtension: 'js'
      },

      '@angular/platform-browser': {
        main: 'bundles/platform-browser.umd.js'
      },

      '@angular/core': {
        main: 'bundles/core.umd.js'
      },

      '@angular/http': {
        main: 'bundles/http.umd.js'
      },

      '@angular/compiler': {
        main: 'bundles/compiler.umd.js'
      },

      '@angular/compiler-cli': {
        main: 'index.js'
      },

      '@angular/router': {
        main: 'bundles/router.umd.js'
      },

      '@angular/upgrade': {
        main: 'bundles/upgrade.umd.js'
      },

      '@angular/forms': {
        main: 'bundles/forms.umd.js'
      },

      '@angular/common': {
        main: 'bundles/common.umd.js',
        defaultExtension: 'js'
      },

      '@angular/platform-browser-dynamic': {
        main: 'bundles/platform-browser-dynamic.umd.js'
      },

      '@angular/platform-server': {
        main: 'bundles/platform-server.umd.js'
      },

      'rxjs': {
        defaultExtension: 'js'
      },

      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);