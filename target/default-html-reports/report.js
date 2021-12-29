$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CaseStudy.feature");
formatter.feature({
  "name": "Testinium project",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "cookies accepted",
  "keyword": "Given "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.cookiesAccepted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the homepage is open",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.verifyTheHomepageIsOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "case study",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "verify the account section",
  "keyword": "Then "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.verifyTheAccountSection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the favorites section",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.verifyTheFavoritesSection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the basket section",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.verifyTheBasketSection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search for \"pantolan\"",
  "keyword": "When "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.searchFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result page should be seen",
  "keyword": "Then "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.resultPageShouldBeSeen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "scroll to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.scrollToTheEndOfThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the show more button",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.clickTheShowMoreButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the product randomly",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.selectTheProductRandomly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "add product the basket",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.addProductTheBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the product price",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.verifyTheProductPrice()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".m-productPrice__salePrice\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.0\u0027, revision: \u002787802e897b\u0027\nSystem info: host: \u0027DESKTOP-SJ8EOIL\u0027, ip: \u0027192.168.68.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_312\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [80bdbc09f115f7a219c03aecd6e10d05, findElement {using\u003dcss selector, value\u003d.m-productPrice__salePrice}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\musta\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61087}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61087/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 80bdbc09f115f7a219c03aecd6e10d05\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy26.getText(Unknown Source)\r\n\tat project.pages.ProductPage.verifyProductPrice(ProductPage.java:47)\r\n\tat project.step_def.MyStepdefs.verifyTheProductPrice(MyStepdefs.java:93)\r\n\tat ✽.verify the product price(file:///C:/Users/musta/Documents/GitHub/TestiniumCaseStudy/src/test/resources/features/CaseStudy.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "increase the number of products",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.increaseTheNumberOfProducts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "delete products from basket",
  "keyword": "When "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.deleteProductsFromBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "basket should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.basketShouldBeEmpty()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});