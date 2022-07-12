import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Box>
        <Flex justify={'center'}>
          <Text fontSize={'xl'} marginTop={'2'} marginRight={'auto'}>made by lynxgian with ❤️ </Text>
          <IconButton
            variant={'ghost'}
            aria-label="Theme Switcher"
            ml={'auto'}
            size={'lg'}
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
          <Link href='https://github.com/lynxgian'>
          
         <IconButton
            variant={'ghost'}
            aria-label="GitHub Link"
            ml={'auto'}
            size={'lg'}
            
            icon={<FaGithub />}
          />
          </Link>
        </Flex>
      </Box>
    </>
  );
}
