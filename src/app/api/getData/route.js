// import { NextResponse } from "next/server";
// import { MongoClient } from "mongodb";

// export async function GET() {
//   const uri = "mongodb://localhost:27017/";
//   const client = new MongoClient(uri);
//   try {
//     let db = client.db("hadi");
//     let inventory = db.collection("inventory");
//     let count = await inventory.find({}).count();
//     // let average = inventory.aggregate([
//     //   {
//     //     $group: {
//     //       _id: "66968924a94e48f8797cf2ff", // Grouping all documents into a single group
//     //       avgRate: { $avg: "$price" }, // Calculate average of the ratefield
//     //     },
//     //   },
//     // ]);

//     let totalDoc = await inventory.find({}).toArray();

//     let convertintoNum = totalDoc.map((doc) => {
//       return parseInt(doc.rate);
//     });

//     let sum = convertintoNum.reduce((accumater, current) => {
//       return accumater + current;
//     }, 0);
//     // console.log(sum);
//     // console.log(totalDoc);
//     // console.log(convertintoNum);

//     const average = () => {
//       if (convertintoNum.length > 0) {
//         return sum / convertintoNum.length;
//       } else {
//         return 0;
//       }
//     };

//     // console.log(average());
//     return NextResponse.json({
//       average: average(),
//       count,
//     });
//   } finally {
//     client.close();
//   }
// }
