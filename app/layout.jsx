import Nabvar from './components/nabvar'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> Portafolio </title>
      </head>
      <body>
      <Nabvar/>
        {children}
        </body>
    </html>
  );
}
