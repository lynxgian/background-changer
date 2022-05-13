import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';


export const theme = extendTheme({
    config: {
        initialColorMode: 'system',
        useSystemColorMode: true,
      },
    colors:{
        button: {
            main: '#FF3A20'
        },
    },
    styles: {
        global: (props: any) => ({
          body: {
            bg: mode('white', '#2C2C54')(props),
          },
        }),
      },
})