Feature: Add a to-do 

Background:  
Given I am on on the Login page

Scenario: Login
When When I login an invalid credentials
| email                                  | password         |
| sample@bizkittechnologies.com | 12345 |

Then I should see an error

When When I login a valid credentials
| email                                  | password         |
| phoelenealcober@bizkittechnologies.com | phoelene_alcober |

Then I should redirect to home page