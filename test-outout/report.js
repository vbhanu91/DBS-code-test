$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vbhanu/eclipse-workspace/DBSCodeTest/src/main/java/Features/home.feature");
formatter.feature({
  "line": 1,
  "name": "Search flight feature",
  "description": "",
  "id": "search-flight-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Select flight from itinery",
  "description": "",
  "id": "search-flight-feature;select-flight-from-itinery",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "launch make my trip application and user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" city",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user searched for available flight",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user selects the chepest flight from itinery",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search-flight-feature;select-flight-from-itinery;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "search-flight-feature;select-flight-from-itinery;;1"
    },
    {
      "cells": [
        "San",
        "Jfk"
      ],
      "line": 13,
      "id": "search-flight-feature;select-flight-from-itinery;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Select flight from itinery",
  "description": "",
  "id": "search-flight-feature;select-flight-from-itinery;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "launch make my trip application and user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"San\" and \"Jfk\" city",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user searched for available flight",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user selects the chepest flight from itinery",
  "keyword": "And "
});
formatter.match({
  "location": "HomePagestepDefinition.launch_make_my_trip_application_and_user_is_on_Home_page()"
});
formatter.result({
  "duration": 12704453700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "San",
      "offset": 13
    },
    {
      "val": "Jfk",
      "offset": 23
    }
  ],
  "location": "HomePagestepDefinition.user_enters_sorce_and_destination_city(String,String)"
});
formatter.result({
  "duration": 4750091100,
  "status": "passed"
});
formatter.match({
  "location": "HomePagestepDefinition.user_searched_for_available_flight()"
});
formatter.result({
  "duration": 533658900,
  "status": "passed"
});
formatter.match({
  "location": "HomePagestepDefinition.user_selects_the_chepest_flight_from_itinery()"
});
formatter.result({
  "duration": 170196800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//span[@class\u003d\u0027db clearfix\u0027]//input[@value\u003d\u0027BOOK\u0027])[1]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN66007571\u0027, ip: \u0027172.20.10.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\vbhanu\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:51394}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e3f3a5169b55e35a5136506358a751d2\n*** Element info: {Using\u003dxpath, value\u003d(//span[@class\u003d\u0027db clearfix\u0027]//input[@value\u003d\u0027BOOK\u0027])[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.HomePagestepDefinition.user_selects_the_chepest_flight_from_itinery(HomePagestepDefinition.java:73)\r\n\tat ✽.And user selects the chepest flight from itinery(C:/Users/vbhanu/eclipse-workspace/DBSCodeTest/src/main/java/Features/home.feature:8)\r\n",
  "status": "failed"
});
});