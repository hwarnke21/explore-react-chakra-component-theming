import React from 'react';
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Center,
} from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" h="100vh" p={12}>
        <Center>
          <Menu variant="left">
            <MenuButton>File</MenuButton>
            <MenuList>
              <MenuItem command="Ctrl + N">New File</MenuItem>
              <MenuItem command="Ctrl + O">Open File</MenuItem>
              <MenuDivider />
              <MenuGroup title="Save">
                <MenuItem command="Ctrl + S">Save</MenuItem>
                <MenuItem command="Ctrl + Shift + S">Save As...</MenuItem>
                <MenuItem command="Ctrl + Alt + S">Save All</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem>Exit</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton>Edit</MenuButton>
            <MenuList>
              <MenuItem command="Ctrl + Z">Undo</MenuItem>
              <MenuItem command="Ctrl + Y">Redo</MenuItem>
              <MenuDivider />
              <MenuGroup>
                <MenuItem command="Ctrl + X">Cut</MenuItem>
                <MenuItem command="Ctrl + C">Copy</MenuItem>
                <MenuItem command="Ctrl + V">Paste</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <Menu variant="right">
            <MenuButton>View</MenuButton>
            <MenuList>
              <MenuItem command="Ctrl + F">Full Screen Mode</MenuItem>
              <MenuItem command="Ctrl + R">Reading Mode</MenuItem>
              <MenuDivider />
              <MenuGroup title="Zoom">
                <MenuItem command="Ctrl + 1">Actual Size</MenuItem>
                <MenuItem command="Ctrl + 2">Fit Width</MenuItem>
                <MenuItem command="Ctrl + 3">Height</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuOptionGroup
                title="Display Size"
                type="radio"
                defaultValue={'standard'}
              >
                <MenuItemOption value="small" closeOnSelect={false}>
                  Small
                </MenuItemOption>
                <MenuItemOption value="standard" closeOnSelect={false}>
                  Standard
                </MenuItemOption>
                <MenuItemOption value="large" closeOnSelect={false}>
                  Large
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Center>
        <ColorModeSwitcher position="absolute" bottom={4} left={4} />
      </Box>
    </ChakraProvider>
  );
}
