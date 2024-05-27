import express from "express";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "user already exists" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({username});

    if (!user) {
        return res.json({message: "User doesn't exist"})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.json({message: "Username or Password is Incorrect!"})

    }

    const token = jwt.sign({id: user._id}, "secret");
    res.json({token, userID: user._id});
    
});

export { router as userRouter };
