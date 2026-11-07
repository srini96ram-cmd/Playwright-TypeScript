Feature:Login Page Validation
Scenario:Validate the Valid username,password

Given User Launch Application
When User Enters the username "sr" and password "srr1"
And click on the login button
Then validate the Homepage.