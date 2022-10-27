import React from 'react';
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  GridItem,
  Icon,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { QuestionIcon } from '@chakra-ui/icons';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" h="100vh" p={12}>
        <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing="12">
          <GridItem
            border="1px solid"
            borderRadius="xl"
            p={8}
            _light={{ bg: 'gray.200' }}
            _dark={{ bg: 'gray.700' }}
          >
            <Text display="inline-flex" alignItems="baseline">
              Hover the icon for more information.
              <Tooltip
                label="Tooltip with new theme defaults of brand color scheme and medium size."
                placement="top"
              >
                <Icon as={QuestionIcon} mx={2} color="brand.400" />
              </Tooltip>
            </Text>
          </GridItem>
          <GridItem
            border="1px solid"
            borderRadius="xl"
            p={8}
            _light={{ bg: 'gray.200' }}
            _dark={{ bg: 'gray.700' }}
          >
            <Text display="inline-flex" alignItems="baseline">
              Hover the icon for more information.
              <Tooltip
                label="Tooltip with blue color scheme and new large size."
                placement="bottom-end"
                colorScheme="blue"
                size="lg"
              >
                <Icon as={QuestionIcon} mx={2} color="blue.400" />
              </Tooltip>
            </Text>
          </GridItem>
          <GridItem
            border="1px solid"
            borderRadius="xl"
            p={8}
            _light={{ bg: 'gray.200' }}
            _dark={{ bg: 'gray.700' }}
          >
            <Text display="inline-flex" alignItems="baseline">
              Hover the icon for more information.
              <Tooltip
                label="Tooltip with green color scheme and new small size."
                placement="top-start"
                colorScheme="green"
                size="sm"
              >
                <Icon as={QuestionIcon} mx={2} color="green.400" />
              </Tooltip>
            </Text>
          </GridItem>
        </SimpleGrid>
        <ColorModeSwitcher />
      </Box>
    </ChakraProvider>
  );
}
