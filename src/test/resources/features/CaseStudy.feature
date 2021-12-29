Feature: Testinium project

  Background:
    Given cookies accepted
    And verify the homepage is open

  Scenario: case study
    Then verify the account section
    And verify the favorites section
    And verify the basket section
    When search for "pantolan"
    Then result page should be seen
    And scroll to the end of the page
    And click the show more button
    And select the product randomly
    And add product the basket
    And verify the product price
    And increase the number of products
    When delete products from basket
    Then basket should be empty