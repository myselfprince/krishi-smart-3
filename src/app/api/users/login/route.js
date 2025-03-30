import {connect} from '@/dbConfig/dbConfig'
import User from "@/models/userModel"
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(request){
    try {

        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log("api/login/route.js: reqBody = ",reqBody)

        //check if user exists
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "User does not exists"}, {status:400});
        }
        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status:400})
        }

        //create token data
        const tokenData = {
            id:user._id,
            username: user.username,
            email: user.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

        // Set the token in an HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: false, // Set to false for development
            sameSite: 'lax', // Changed from 'strict' to 'lax' for development
            path: '/',
            maxAge: 60 * 60 * 24 // 1 day
        });

        return response;


        
    } catch (error) {
        return NextResponse.json({error: error.message},{status:500})
        
    }
}