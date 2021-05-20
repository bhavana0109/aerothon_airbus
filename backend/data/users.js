import bcrypt from "bcryptjs";

const users = [
  {
    name: "Hari Kumar Raja",
    email: "patanjalirmnagar@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Bhavana Namburu",
    email: "nblk27@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sharadha Raja",
    email: "sharadhamalepati@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
