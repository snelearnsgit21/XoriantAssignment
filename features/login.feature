Feature: Login to the mobile banking app

  @login
  Scenario: Valid login with different credentials
    Given I am on the login screen
    When I log in with username "company" and password "company"
    Then I should be logged in successfully
