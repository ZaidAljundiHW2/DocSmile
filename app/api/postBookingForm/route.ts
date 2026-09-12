import { NextResponse } from "next/server";
import { RateLimiterMemory } from 'rate-limiter-flexible'
import getIP from "@/utils/getIP";
import { createAppointmentRequest } from "@/lib/appointments";

const rateLimiter = new RateLimiterMemory({
    points:3,
    duration:60

});

export async function GET() {

    const ip = await getIP();

    try {
        
        await rateLimiter.consume(ip, 2);
        
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Too many requests, please try again later." }, { status: 429 });
    }
}

export async function POST(request: Request) {

    const ip = await getIP();

    try {
        
        await rateLimiter.consume(ip, 1);

        const data = await request.json();

        await createAppointmentRequest(data);

        return NextResponse.json({ message: "Booking form submitted successfully." }, { status: 200 });
        
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Too many requests, please try again later." }, { status: 429 });
    }

}