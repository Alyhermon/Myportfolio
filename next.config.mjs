/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
    // Configuración para la exportación estática
    trailingSlash: true, // Asegura que las URLs terminen en '/'
    images: {
      unoptimized: true, // Desactiva la optimización de imágenes, ya que GitHub Pages no soporta la optimización de imágenes de Next.js
    },
    // Puedes agregar otras configuraciones aquí si es necesario
  };
export default nextConfig;
