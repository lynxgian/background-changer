import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';


export const theme = extendTheme({
    config: {
        initialColorMode: 'system',
        useSystemColorMode: true,
      },     
    colors:{
        button: {
            main: '#FF3A20',
            _light: '#BCD0C7'
        },
    },
    styles: {
        global: (props: any) => ({
          body: {
            bg: mode('white', '#222E50')(props),
          },
        }),
      },
})