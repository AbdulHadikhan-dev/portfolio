//? show databases;
// db.getMongo().getDBs();

//? create database;
// use('hadi');

//? create collection;
// db.createCollection('courses');

//? drop database;

//* first you use database then you should try this command db.dropDatabase.

// use("NEW_DATABASE_NAME");
// db.dropDatabase();

//? drop collection.

// use("rahim");
// db.collection.drop();
// db.hadi.drop();

//! Wellcome to CURD Operations.

//* Create Operation.

//? insert one document;
// db.courses.insertOne({
//     "name": "hadi",
//     "email": "pakistani@gmail.com",
//     "cast": "pathan"
// });

//? insert multiple documents;
// db.courses.insertMany([
//   {
//     course: "sigma web development",
//     author: "harry",
//     title: "hadi web development",
//     price: "35$",
//   },
//   {
//     course: "Web Development",
//     author: "John Smith",
//     title: "Complete Web Development Course",
//     price: "49.99$",
//   },
//   {
//     course: "Data Science",
//     author: "Jane Doe",
//     title: "Introduction to Data Science",
//     price: "39.99$",
//   },
//   {
//     course: "Mobile App Development",
//     author: "Michael Brown",
//     title: "Mastering Mobile Apps",
//     price: "59.99$",
//   },
//   {
//     course: "Machine Learning",
//     author: "Emily Johnson",
//     title: "Advanced Machine Learning Techniques",
//     price: "69.99$",
//   },
//   {
//     course: "Database Management",
//     author: "David Lee",
//     title: "Database Administration Essentials",
//     price: "44.99$",
//   },
//   {
//     course: "Cybersecurity",
//     author: "Sophia Wilson",
//     title: "Ethical Hacking 101",
//     price: "54.99$",
//   },
// ]);

//* Read Operation.

//? find one document.

// db.courses.findOne({});
// db.courses.findOne();

//? find all documents.

// use("test");
// db.courses.findOne(); //this one
// let allDoc = db.courses.find({});  //and this one both have the same.
// console.log(allDoc);

//? find documents with specific condition.
// db.collection.find(condition);
// db.courses.find({author: 'harry'});
// db.courses.find({ author: { $ne: "harry" } }).count();
// db.courses.find({ age: { $gt: 25 } }).limit(1);

//* Update Operation.

//? update one document.

// db.courses.updateOne( <filter> , <Update> );
// db.courses.updateOne({ author: "harry" }, { $set: { price: 100 } });

//? update Many document.

// db.courses.updateMany( <filter> , <Update> );
// use("hadi");
// db.inventory.updateMany({}, { $set: { price: 1000 } });

//? updateMany document with many conditions.

// db.courses.updateMany({ price: { $lt: 1200 } }, { $set: { price: 10000 } });

//* Delete Operation.

//? delete one document.

// db.courses.deleteOne({});
// db.courses.deleteOne({});

//? delete many document.

// db.courses.deleteMany({ age: { $gte: 22 } }); // this is true when document
// use('hadi')
// db.inventory.deleteMany({}); // delete all documents


//* aggregation pipeline.

//? Group by document.


// use('hadi');
// let average = db.inventory.aggregate([
//     {
//       $group: {
//         _id: null, // Grouping all documents into a single group
//         avgRate: { $avg: "$price" }, // Calculate average of the ratefield
//       },
//     },
// ]);

// const variable = average;

// console.log(variable);