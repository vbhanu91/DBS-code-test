Feature: Search flight feature 

Scenario: Select flight from itinery 

Given launch make my trip application and user is on Home page 
When user enters source and destination city 
Then user searched for available flight 
And  user selects the chepest flight from itinery 