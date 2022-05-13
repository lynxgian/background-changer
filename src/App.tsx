import React, { useState } from 'react';
import './App.css';

import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import url from './wallpaperValidator';
import { invoke } from '@tauri-apps/api';

function App() {
  const [link, setLink] = useState('')

  const isError = link === ''
  const onSumbit = async () => {

  await url(link)


  }

  return (
    <div> 
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor='background-link'>Background Link</FormLabel>
        <Input 
          id='link'
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button onClick={() => onSumbit()}>
          Set Background
        </Button>
      </FormControl>
    </div>
  );
}

export default App;
