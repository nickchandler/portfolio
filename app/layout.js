'use client'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Navbar from './components/navbar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ChakraProvider>
          <Navbar />
          <Container
            maxW="100%"
            h="calc(100vh)"
            pt={14}
            backgroundColor={'#e8dfc8'}
          >
            {children}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  )
}
