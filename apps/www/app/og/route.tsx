import { ImageResponse } from 'next/og'
export const runtime = 'edge'
export async function GET() {
  return new ImageResponse(
    (<div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg,#fce7f3,#fff1f2)',fontSize:60,fontFamily:'serif'}}>Thread Meditation</div>),
    { width: 1200, height: 630 }
  )
}
