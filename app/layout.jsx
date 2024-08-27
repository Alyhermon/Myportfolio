import './globals.css'; // Importa los estilos globales
import Head from 'next/head'; // Importa el componente Head
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}