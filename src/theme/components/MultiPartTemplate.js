// replace "component", "part", "variant", and "prop" placeholders with names.

import { componentAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(componentAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  part: {
    // this will style the {ComponentName} component
    prop: '',
  },
});

// define custom styles
const xl = defineStyle({
  fontSize: 'lg',
});

// define custom sizes
const sizes = {
  // apply custom styles to parts
  xl: definePartsStyle({
    part: xl,
  }),
};

// define custom variants
const variants = {
  variantName: {
    partName: {},
  },
};

// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  size: '',
  variant: '',
  colorScheme: '',
};

// export the component theme
export const componentTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
