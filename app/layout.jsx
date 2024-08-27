import './globals.css';
import Head from 'next/head';
import Navbar from './components/navbar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {children}
      </body>
    </html>
  );
}