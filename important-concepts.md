/*
1--> why we need to make the controllers thin like no business logic should be written in controller?
 
 Answer --> if we write the business logic inside the controller
               * the controller is receiving the request and implementing
                   the business logic and serving the request .
                   it is doing three things .
                   so when we do the unit test it will become hard to write unit tests.
                * if the business logic is written in the services not in the 
                     controller than when writting the unit tests it will be 
                     more easy and it was mostly followed way.

*/


---
   there are two level of constraints 
      1--> javascript level  given in the model folder 
      2--> database level    given in the migration folder



---