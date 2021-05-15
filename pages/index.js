import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caranguedev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      
        <h1 className="title">
            Seja bem vindo a <a href="#">Caranguedev!</a>
        </h1>
            Ir para a {' '}
            <Link href="/posts/first-post">
                próxima página.
            </Link>
      </main>

      <footer>
            <p>Feito por <bold>Jovi</bold></p>
      </footer>

    </div>
  )
}
