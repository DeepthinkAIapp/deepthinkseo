import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    emailPasswordExists: !!process.env.EMAIL_PASSWORD,
    emailPasswordLength: process.env.EMAIL_PASSWORD?.length || 0,
    allEnvVars: Object.keys(process.env).filter(key => key.includes('EMAIL'))
  })
}
