import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Dental Reservation | GENOVA",description:"予約、患者管理、継続来院から医院データまで。歯科医院の未来を支えるDental Reservation。",robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}