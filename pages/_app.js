import Layout from '../components/Layout'
import '../styles/globals.css'


// we are making layout(navbar and footer to be in every page)
// here componenet means index.js page
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
