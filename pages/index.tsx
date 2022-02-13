import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'

const Home: NextPage = () => {

 


  return (
    <div>
      <Head>
        <title>Apurv Ajay Kumar</title>
        <meta name="description" content="a2krocks' portfolio made using next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h4>Apurv Ajay Kumar</h4>
          <nav>
            <ul>
              <li><a href='/work'>Work</a></li>
              <li><a href='/about'>About</a></li>
            </ul>
          </nav>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
