# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**

_Write your response here_

1. Function which has to be called many times during application cycle.
2. React actually has an inherent way of doing it for its components called React.memo.

### **What _extra_ test cases can you add to the test file?**

_Add relevant test-cases in the test file_
