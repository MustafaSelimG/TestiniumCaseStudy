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
  "status": "passed"
});
formatter.step({
  "name": "increase the number of products",
  "keyword": "And "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.increaseTheNumberOfProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "delete products from basket",
  "keyword": "When "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.deleteProductsFromBasket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "basket should be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "project.step_def.MyStepdefs.basketShouldBeEmpty()"
});
