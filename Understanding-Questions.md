# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
The handleChange event we assigned to the OnClick fires.

In this handleChange we put the dispatch which we recieved from the store.
The store recieved this as an action from the reducer, where the specific case scenario for the action=>dispatch is written.
In this instance it adds one to the state.total

...

* TotalDisplay shows the total plus 1.
