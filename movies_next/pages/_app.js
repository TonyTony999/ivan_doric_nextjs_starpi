//import '../styles/globals.css'
import Header from '../components/Header'
import { ThemeProvider } from "@emotion/react"
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header isDark={false}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>

  )

}

export default MyApp
