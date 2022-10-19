import React from 'react';
import { ChakraProvider, Box, Center } from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" h="100vh" p={12}>
        <Center></Center>
        <ColorModeSwitcher position="absolute" bottom={4} left={4} />
      </Box>
    </ChakraProvider>
  );
}
