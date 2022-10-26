import React from 'react';
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" h="100vh" p={12}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={12}>
          <GridItem>
            <Tabs>
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab isDisabled>Disabled</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>New default appearance defined by theme</p>
                </TabPanel>
                <TabPanel>
                  <p>Tab panel two</p>
                </TabPanel>
                <TabPanel>
                  <p>Tab panel three</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
          <GridItem>
            <Tabs size="lg" colorScheme="purple">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab isDisabled>Disabled</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Large size with purple color scheme</p>
                </TabPanel>
                <TabPanel>
                  <p>Tab panel two</p>
                </TabPanel>
                <TabPanel>
                  <p>Tab panel three</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
          <GridItem>
            <Tabs size="md" colorScheme="cyan">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab isDisabled>Disabled</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Medium size with cyan color scheme</p>
                </TabPanel>
                <TabPanel>
                  <p>Tab panel two</p>
                </TabPanel>
                <TabPanel>
                  <p>Tab panel three</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
          <GridItem>
            <Tabs size="sm" colorScheme="orange">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
                <Tab isDisabled>Disabled</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Small size with orange color scheme</p>
                </TabPanel>
                <TabPanel>
                  <p>Tab panel two</p>
                </TabPanel>
                <TabPanel>
                  <p>Tab panel three</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
        </SimpleGrid>
        <ColorModeSwitcher />
      </Box>
    </ChakraProvider>
  );
}
