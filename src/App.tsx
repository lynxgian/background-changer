import React, { useState } from 'react';
import './App.css';

import {
  useToast,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Flex,
  Box,
  Heading,
  InputGroup,
} from '@chakra-ui/react';

import url from './wallpaperValidator';
import Footer from './component/Footer';

function App() {
  const [link, setLink] = useState('');

  const isError = link === '';
  const toast = useToast();

  const onSumbit = async () => {
    if (isError) {
      return toast({
        title: 'Error!',
        description: 'Please input an url',
        status: 'error',
        duration: 7000,
        position: 'top',
        isClosable: true,
      });
    }
    await url(link);

    setLink('');
  };

  return (
    <div>
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
          >
            <Heading>Set a custom background</Heading>
            <Box minW={{ base: '90%', md: '468px' }}>
              <form>
                <Stack spacing={4} p="1rem" backgroundColor={"#8075ff"} borderRadius={'15px'} boxShadow="md">

                    <Heading size={'md'}  textAlign={'center'}> Background Url</Heading>
                    <FormControl isInvalid={isError}>
                    <InputGroup>
                    
                    <Input
                      id="link"
                      type="url"
                      value={link}
                      marginTop={'5px'}
                      marginBottom={'10px'}
                      variant={'filled'}
                      placeholder={'https://example.com/image.png'}
                      isInvalid
                      errorBorderColor='#394d86'
                      focusBorderColor='#394d86'
                      onChange={(e) => setLink(e.target.value)}
                    />
                    </InputGroup>
                    </FormControl>
                    <Button
                      bgColor={'#8BB174'}
                      color={'#FFFFF'}
                      variant={'solid'}
                      marginTop={'5'}
                      alignContent={'center'}
                      outlineColor={'#8075ff'}
                      onClick={() => onSumbit()}
                    >
                      Set Background
                    </Button>
                  
                </Stack>
              </form>
            </Box>
            <Footer/>
          </Stack>
        </Flex>
    </div>
  );
}

export default App;
