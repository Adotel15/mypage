
import Styles from '../styles/Home.module.css'
import Link from 'next/link';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Home() {

  const urlGuitarLA = "https://guitarla-three.vercel.app/";
  const urlVeterinario = " https://helpful-griffin-e27f66.netlify.app/";
  const urlGastos = "https://silver-praline-f96b7a.netlify.app/";
  const urlCryptos = "https://chipper-maamoul-48a347.netlify.app";

  return (

    <>
      <Header />

      <div className = {Styles.contenedor}>
        <h1 className = {Styles.titulo}>Personal Portafolio</h1>

        <div>
          <h2>GuitarLA</h2>
          <p>Página de venta de guitarras con Next.js, Strapi, MongoDB</p>
          <Link href={urlGuitarLA}>Acceso a la página</Link>
          <Link href={"https:/github.com/Adotel15/GuitarLa_APP"}>Acceso al código en GitHub</Link>

          <h2>Gestión Veterinario</h2>
          <p>Gestiona los pacientes de tu veterinario, con bonitas e interactivas tarjetas</p>
          <Link href={urlVeterinario}>Acceso a la página</Link>

          <h2>Creador de Presupuestos</h2>
          <p>Crea y gestiona tu presupuesto de manera eficiente</p>
          <Link href={urlGastos}>Acceso a la página</Link>

          <h2>Cotizador de Criptos</h2>
          <p>Cotizador de criptomendas, estudia los precios actuales con diferentes monedas!</p>
          <Link href={urlCryptos}>Acceso a la página</Link>
          <Link href={"https:/github.com/Adotel15/Cotizador_Criptos"}>Acceso al código en GitHub</Link>

        </div>
      </div>

      <Footer />
    </>
  )
}
