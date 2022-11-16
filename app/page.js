'use client'
import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      M{' '}
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center'">
        Hello, I&apos;m a full-stack developer based in San Francisco!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}></Box>
      </Box>
      <Heading as="h2" variant="page-title">
        Nicholas Chandler
      </Heading>
      <p>Software Developer and Cyclist</p>
    </Container>
  )
}

export default Page
