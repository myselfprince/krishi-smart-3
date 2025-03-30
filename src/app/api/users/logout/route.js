import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });
    
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),

    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ 
      error: error.messgae +" Logout failed",
      message: error.message 
    }, { status: 500 });
  }
}