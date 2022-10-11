import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers([
  'button',
  'list',
  'item',
  'groupTitle',
  'command',
  'divider',
]);

const Menu = helpers.defineMultiStyleConfig({
  baseStyle: {
    button: {
      fontWeight: 'medium',
      py: '2',
      px: '4',
      _light: {
        color: 'gray.100',
        bg: 'teal.500',
        _hover: {
          bg: 'teal.700',
        },
      },
    },
    list: {
      py: '0',
      borderRadius: 'none',
      _light: {
        bg: 'teal.500',
      },
    },
    item: {
      py: '2',
      px: '4',
      color: 'gray.200',
      fontWeight: 'medium',
      _light: {
        _hover: {
          bg: 'teal.400',
        },
        _focus: {
          bg: 'teal.400',
        },
      },
    },
    groupTitle: {
      textTransform: 'uppercase',
      color: 'gray.100',
      px: '0',
      textAlign: 'center',
      mb: '0',
      fontWeight: 'semibold',
      letterSpacing: 'wider',
    },
    command: {
      opacity: '0.8',
      fontFamily: 'mono',
      fontSize: 'sm',
    },
    divider: {
      opacity: '0.5',
      my: '4',
      borderBottom: '2px dotted',
    },
  },
});

export default Menu;
