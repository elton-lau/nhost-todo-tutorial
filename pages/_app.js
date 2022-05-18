import { NhostNextProvider, NhostClient } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'

import '../styles/globals.css'

const nhost = new NhostClient({
  backendUrl: 'https://krmxirycculoyiqtfwvq.nhost.run'
})

function MyApp({ Component, pageProps }) {
  return <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
    <NhostApolloProvider nhost={nhost}>
    <Component {...pageProps} />
    </NhostApolloProvider>
  </NhostNextProvider>

}

export default MyApp
