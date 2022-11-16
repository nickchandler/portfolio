'use client'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Navbar from './components/navbar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ChakraProvider>
          <Navbar />
          <Container maxW="container.md" pt={14}>
            {children}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  )
}
