import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// const theme = extendTheme({
//   styles: {
//     global: {
//       font:  "nunito"
//     }
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
