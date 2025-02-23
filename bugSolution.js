```javascript
//Correct usage of $inc operator
let value = 5; //Make sure value is a number
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{"$inc":{"field":value}});
//Alternative approach for updating the field
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{"$set":{"field":field + value}});
```