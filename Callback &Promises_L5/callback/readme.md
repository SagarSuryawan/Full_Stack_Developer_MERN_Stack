
1) Callback is a function that is passed as an argument to another function and is executed onces the main function has finished executing.

2) Callbacks fucntion useful when execute multiple task at the same time.

3) The purpose of callback  is to allow program to perfrom actions asynchornously.


    What is the need for a callback?
    Ans:- Javascript is a single thread language,Which means it execute the code line after another.However,There are some cases Where multiple tasks or operation can be executed parallely without waiting for each other to complete them.This is asynchornous programming. 

    Nested Callback
   i) when callback function is inside anor=ther callback function is called nested callback.

   event Loop - Event loop is constly moniter the callback que and call stack it thr call stack is empty it takes the first callback from the que.