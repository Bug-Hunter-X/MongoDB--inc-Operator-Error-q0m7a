# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment or decrement a numeric field in a document.  However, the value provided to `$inc` must be a number.  This example shows an incorrect usage and the correct way to resolve the issue.

## Bug
The bug lies in the incorrect usage of the `$inc` operator. Passing a string or a variable that resolves to a string, will lead to an error.