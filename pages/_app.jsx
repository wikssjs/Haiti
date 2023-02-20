import 'normalize.css/normalize.css'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {Roboto_Flex,Montserrat} from '@next/font/google'
import Layout from '../component/Layout';
import dynamic from 'next/dynamic';
import Scripts from '../component/Scripts';


const roboto = Roboto_Flex({subsets:['latin']});
const montserrat = Montserrat({subsets:['latin']});


export default function App({ Component, pageProps }) {


  return  <>
  <style jsx global>
    {`
     
    `}
  </style>
    <Scripts/>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
}
