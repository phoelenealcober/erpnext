Feature: Add a to-do 

Background:  
Given I am on on the Login page

Scenario: Login
When When I login an invalid credentials
| email                                  | password         |
| sample@bizkittechnologies.com          | 12345            |

Then I should see an error

When When I login a valid credentials
| email                                  | password         |
| fayecatalvas@bizkittechnologies.com    | faye_catalvas    |

Then I should redirect to home page

Scenario: Change Password
When I successfully login
| email                                  | password         |
| fayecatalvas@bizkittechnologies.com    | faye_catalvas    |
Then I should be redirected to homepage

When I go to My Settings
Then I should be redirected to settings page

When I enter a sequenced password
| password         |
| abcdefg          |
Then I should see an error message

When I enter a common password
| password              |
| testpassword          |
Then I should see an error msg

When I enter a valid password
| password              |
| testpass123!          |
Then New password should be saved