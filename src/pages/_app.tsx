import '../styles/globals.css'
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <> <ConfigProvider locale={ptBr}><Component {...pageProps} /></ConfigProvider> </>)
 
}

export default MyApp
