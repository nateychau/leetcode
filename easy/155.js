/*
155. Min StackDesign a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

Methods pop, top and getMin operations will always be called on non-empty stacks.
*/

var MinStack = function() {
  this.stack = [];
  this.min = []; //second stack to keep track of min
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if(!this.min.length || x <= this.min[this.min.length-1]){ 
      this.min.push(x) //add value to min stack if its less than the current min
  }
  
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  let popped = this.stack.pop();
  //if the value that was just popped was the current min, pop the current min of the min stack
  if(this.min[this.min.length-1] === popped) this.min.pop(); 

};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min[this.min.length-1];
};