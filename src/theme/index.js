import { extendTheme } from '@chakra-ui/react';
import Menu from './components/Menu';

const theme = extendTheme({
  components: {
    Menu,
  },
});

export default theme;
