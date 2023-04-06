Feature: Button

Scenario: Clicking the submit button
    Given I want to submit a form
    When I click the submit button
    Then The form should be submitted

Scenario: Clicking a disabled button
    Given I want to submit a form
    When I click the disabled submit button
    Then Ihope that nothing happens