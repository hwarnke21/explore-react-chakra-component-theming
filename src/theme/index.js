import { extendTheme } from '@chakra-ui/react';
import Menu from './components/Menu';
import Container from './components/Container';

const theme = extendTheme({
  components: {
    Menu,
    Container,
  },
});

export default theme;
