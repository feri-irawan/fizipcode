import Head from 'next/head'
import Container from './Container'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layouts({title, children}) {
  return (
    <div className="text-slate-700">
      <Head>
        <title>{title && `${title} - `}FiZipcode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Container contents={children} />
      <Footer />
    </div>
  )
}
