import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs/dist/bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();
  const hashedPass = await bcrypt.hash(password, 5);

  const newUSer = new User({
    name,
    email,
    password: hashedPass,
  });

  try {
    await newUSer.save();
    return new NextResponse("User created", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
