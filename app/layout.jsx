import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> My App </title>
      </head>
      <body>
      <Nabvar/>
        {children}
        </body>
    </html>
  );
}
