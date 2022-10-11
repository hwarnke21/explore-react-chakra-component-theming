import React from 'react';
import {
  ChakraProvider,
  Container,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Portal,
  forwardRef,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ChevronDownIcon } from '@chakra-ui/icons';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container minW="container.xl" centerContent>
        <Heading my={8}>React + Chakra Menu Theming</Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
        <HStack spacing={8} mt={8}>
          <Menu closeOnSelect={false} closeOnBlur={false}>
            <MenuButton>Simple Menu</MenuButton>
            <MenuList>
              <MenuItem command="Ctrl + D">Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuOptionGroup title="Country" type="checkbox">
                <MenuItemOption value="email">Email</MenuItemOption>
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="country">Country</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="pink"
              rightIcon={<ChevronDownIcon />}
            >
              Groups Menu
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="blue"
              rightIcon={<ChevronDownIcon />}
            >
              Options Menu
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Country" type="checkbox">
                <MenuItemOption value="email">Email</MenuItemOption>
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="country">Country</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
