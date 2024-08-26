import Link from 'next/link'

export default function Nabvar() {
    return (
      <div>
        <nav>
          <h1>Alina M. Hermon Castro</h1>
        </nav>
        <ul>
          <li>
              <Link href="/">Inicio</Link>
          </li>
          <li>
              <Link href="/proyectos">Proyectos</Link>
          </li>
          <li>
              <Link href="/aboutme">Sobre mi</Link>
          </li>
          <li>
              <Link href="/experiencia">Experiencia</Link>
          </li>
          <li>
              <Link href="/contactos">Contacto</Link>
          </li>
        </ul>
      </div>
    );
  }