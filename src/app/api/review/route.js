import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
// import Review from "./model/review";

export async function GET() {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);
  try {
    let database = client.db("hadi");
    let inventory = database.collection("inventory");
    let data = await inventory.find().toArray();
    return NextResponse.json(data);
  } finally {
    client.close();
  }
}

export async function POST(request) {
  let body = await request.json();
  let name = false;
  let email = false;
  let message = false;
  let rate = false;

  // let body = await request.json();
  if (body.name.length >= 3) {
    // console.log(body.name);
    name = true;
  }
  if (
    body.email !== undefined &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    email = true;
  }
  if (body.message !== undefined && body.message.length >= 2) {
    message = true;
  }
  if (body.rate !== undefined && typeof body.rate !== "object") {
    rate = true;
  }

  if (!name) {
    console.log("sending next response");
    return NextResponse.json({
      error: "name",
      message:
        "Invalid name, name must be a greater than 3 characters and less than 12 characters",
    });
  } else if (!email) {
    return NextResponse.json({
      error: "email",
      message: "Email is not valid, please try again",
    });
  } else if (!message) {
    return NextResponse.json({
      error: "message",
      message: "Invalid Message, message must be a greater than 3 characters.",
    });
  } else if (!rate) {
    return NextResponse.json({
      error: "rate",
      message: "Please Give him a rating. Between 1 to 5 stars",
    });
  }

  const uri = process.env.MONGO_URI;
  // await mongoose.connect("mongodb://localhost:27017/");

  // Create a new document with the specified data.
  // const review = new Review(body);
  // await review.save();
  // return NextResponse.json({ review, ok: true });
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    // Connect the client to the server (optional starting in v4.7)/
    await client.connect();
    // Send a ping to confirm a successful connection.
    let database = client.db("hadi");
    let inventory = database.collection("inventory");
    await inventory.insertOne(body);
    // await client.db("admin").command({ ping: 1 });
    // console.log(body);
    return NextResponse.json({
      ok: true,
      msg: "thanks for review",
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
