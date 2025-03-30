import { getDataFromToken } from "@/helpers/getDataFromToken";
import {NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import {connect} from "@/dbConfig/dbConfig"
connect()

export async function GET(request) {
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id: userId}).select("-password")
        if(!user){
            return NextResponse.json({error: "User not found"}, {status: 404})
        }
        return NextResponse.json({
            message: "User fetched successfully",
            data: user,
            success: true,
            user
        }, {status: 200})
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}


