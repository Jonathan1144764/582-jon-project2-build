const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("582-jon-project2-build/public"));

var cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://1144764:Re17AjPv640Uyg@cluster0.tkarxff.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());

app.get("/admin/updateevent/park", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const parks = database.collection("parks");
      const result = await parks.find({}).toArray();
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.delete("/admin/updateevent", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const events = database.collection("events");
      const result = await events.deleteOne({ id: req.body.id });
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.put("/admin/updateevent", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const events = database.collection("events");
      const result = await events.updateOne(
        { id: req.body.id },
        {
          $set: {
            eventName: req.body.eventName,
            eventLocation: req.body.eventLocation,
            eventStartDate: req.body.eventStartDate,
            eventEndDate: req.body.eventEndDate,
            eventDescription: req.body.eventDescription,
          },
        }
      );
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/admin/updateevent", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const events = database.collection("events");
      const result = await events.find({}).toArray();
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/admin/newevent", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const events = database.collection("events");
      const result = await events.find({}).toArray();
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.post("/admin/newevent", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const events = database.collection("events");
      const result = await events.insertOne(req.body);
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.post("/admin/newpark", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const parks = database.collection("parks");
      const result = await parks.insertOne(req.body);
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.put("/admin/updatepark", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const parks = database.collection("parks");
      const result = await parks.updateOne(
        { id: req.body.id },
        {
          $set: {
            parkName: req.body.parkName,
            parkImage: req.body.parkImage,
            parkStatus: req.body.parkStatus,
            soccerFields: req.body.soccerFields,
            baseballDiamonds: req.body.baseballDiamonds,
            parkBathrooms: req.body.parkBathrooms,
            parkPlaygrounds: req.body.parkPlaygrounds,
          },
        }
      );
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.delete("/admin/updatepark", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const parks = database.collection("parks");
      const result = await parks.deleteOne({ id: req.body.id });
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/public/user", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const users = database.collection("users");
      const result = await users.find({}).toArray();
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/public/event", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const events = database.collection("events");
      const result = await events.find({}).toArray();
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.put("/public", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const users = database.collection("users");
      const result = await users.updateOne(
        { username: req.body.user },
        { $push: { bookmarkedEvents: req.body.event } }
      );
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/public", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const parks = database.collection("parks");
      const result = await parks.find({}).toArray();
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/admin", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const parks = database.collection("parks");
      const result = await parks.find({}).toArray();
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const users = database.collection("users");
      const result = await users.find({}).toArray();
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.post("/", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("localparks");
      const users = database.collection("users");
      const result = await users.insertOne(req.body);
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
