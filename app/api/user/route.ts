import { db } from "@/utils/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt'
import * as z from 'zod'

const userSchema = z.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'email is required').email('Invalid Email'),
    password: z.string().min(1, 'password is required').min(8, 'Password must have more than 8 characters'),
    
})

// export async function GET() {
//     return NextResponse.json({success: true})
// }


export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, username, password } = userSchema.parse(body) 
        
        const existingUSerByEmail = await db.user.findUnique({
            where: {
                email,
            }
        })

        if (existingUSerByEmail) {
            return NextResponse.json({user: null, message: "User with this email already exists"})
        }

        const existingUSerByUsername = await db.user.findUnique({
            where: {
                username,
            }
        })

        if (existingUSerByUsername) {
            return NextResponse.json({user: null, message: "Username already exists"})
        }

        const hashedPassword = await hash(password, 10)
        const newUser = await db.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
            }
        })

        const {password: newUserPassword, ...rest} = newUser
        return NextResponse.json({user: rest, message: "User created successfully"}, {status: 201})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json("Something went wrong", {status: 501})
    }
}
