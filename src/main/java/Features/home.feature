Feature: Search flight feature 

Scenario Outline: Select flight from itinery 

Given launch make my trip application and user is on Home page 
When user enters "<username>" and "<password>" city 
Then user searched for available flight 
And  user selects the chepest flight from itinery 


Examples: 
	| username | password |
	| San      | Jfk      |
	
	
	