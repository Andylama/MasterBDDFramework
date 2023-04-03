$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/Etsyfeautures/Estyhomepage.feature");
formatter.feature({
  "name": "This is the Automated Webpage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "EtsyPageTitle",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Esty Homepage.",
  "keyword": "Given "
});
formatter.match({
  "location": "Etsystepdefinition.Estystepdefinition.i_am_in_Esty_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search product in search Bar",
  "keyword": "When "
});
formatter.match({
  "location": "Etsystepdefinition.Estystepdefinition.i_search_product_in_search_Bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search icon",
  "keyword": "And "
});
formatter.match({
  "location": "Etsystepdefinition.Estystepdefinition.i_click_on_the_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go the product search page",
  "keyword": "Then "
});
formatter.match({
  "location": "Etsystepdefinition.Estystepdefinition.i_go_the_product_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});