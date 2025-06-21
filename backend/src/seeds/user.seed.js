import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "user1@example.com",
    fullName: "user1",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/db/c8/a2/dbc8a27aff62b30bdb2d5d15755712a4.jpg",
  },
  {
    email: "user2@example.com",
    fullName: "user2",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/ee/9a/60/ee9a609b4a64d99a6af448577645f467.jpg",
  },
  {
    email: "user3@example.com",
    fullName: "user3",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/31/aa/65/31aa65e0fa973167926f26bd478f3482.jpg",
  },
  {
    email: "user4@example.com",
    fullName: "user4",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/04/58/05/0458055532f29464829b0f5ab776c4de.jpg",
  },
  {
    email: "user5@example.com",
    fullName: "user5",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/dd/ef/ab/ddefabc39e4ef25c81b2e774f45d0401.jpg",
  },
  {
    email: "user6@example.com",
    fullName: "user6",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/79/1c/20/791c20942f58205cc3f1da87274df3e7.jpg",
  },
  {
    email: "user7@example.com",
    fullName: "user7",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/86/3c/3d/863c3dad2ad52085d425c46027bb0b78.jpg",
  },
  {
    email: "user8@example.com",
    fullName: "user8",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/0f/2f/5e/0f2f5eb764239012d9bdfd998577acda.jpg",
  },

  {
    email: "user9@example.com",
    fullName: "user9",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/3d/b5/0c/3db50c6f19cdbc9b8ec9b04c049b367f.jpg",
  },
  {
    email: "user10@example.com",
    fullName: "user10",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/8c/e5/ef/8ce5efe1f95f1ced365f23475560f1e2.jpg",
  },
  {
    email: "user11@example.com",
    fullName: "user11",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/8b/71/fc/8b71fcf8d5835b42558898c9546eac8f.jpg",
  },
  {
    email: "user12@example.com",
    fullName: "user12",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/c4/97/37/c49737faf649df322a206f371ef076ac.jpg",
  },
  {
    email: "user13@example.com",
    fullName: "user13",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/6c/10/5e/6c105ee7e1907934285ba3dcb6c7a33e.jpg",
  },
  {
    email: "user14@example.com",
    fullName: "user14",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/6d/27/12/6d2712be1bafb91a4b9daadff2e1307d.jpg",
  },
  {
    email: "user15@example.com",
    fullName: "user15",
    password: "123456",
    profilePic:
      "https://i.pinimg.com/736x/f1/1c/2d/f11c2de1b5b2ae29bbc4ef1da8216587.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
