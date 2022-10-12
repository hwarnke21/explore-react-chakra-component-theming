import { extendTheme } from '@chakra-ui/react';
import Menu from './components/Menu';
import { inputTheme } from './components/Input';

const theme = extendTheme({
  components: {
    Menu,
    Input: inputTheme,
  },
});

export default theme;
