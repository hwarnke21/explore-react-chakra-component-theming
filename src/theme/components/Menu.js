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
      px: '4',
      py: '2',
      bg: 'teal.500',
      color: 'gray.200',
      _hover: {
        bg: 'teal.600',
        color: 'white',
      },
    },
    list: {
      py: '4',
      borderRadius: 'xl',
      border: 'none',
      bg: 'teal.500',
    },
    item: {
      py: '2',
      px: '4',
      color: 'gray.200',
      _hover: {
        bg: 'teal.600',
      },
      _focus: {
        bg: 'teal.600',
      },
    },
    groupTitle: {
      textTransform: 'uppercase',
      color: 'white',
      my: '1',
      textAlign: 'center',
      fontWeight: 'semibold',
      letterSpacing: 'wider',
      opacity: '0.7',
    },
    command: {
      opacity: '0.8',
      fontFamily: 'mono',
      fontSize: 'sm',
      letterSpacing: 'tighter',
      pl: '4',
    },
    divider: {
      my: '4',
      borderColor: 'white',
      borderBottom: '2px dotted',
    },
  },
  variants: {
    left: {
      button: {
        borderLeftRadius: 'full',
      },
    },
    right: {
      button: {
        borderRightRadius: 'full',
      },
    },
  },
});

export default Menu;
