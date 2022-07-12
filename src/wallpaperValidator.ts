import { invoke } from '@tauri-apps/api/tauri'

export  default async function  url(url: string) {

   let  receivedUrl=  await fetch(url, {
      method: "HEAD",
      mode: 'no-cors'
    }).catch(() => null)


    console.log(receivedUrl)
  
   if(!receivedUrl || (receivedUrl.body && !receivedUrl.body.locked)) {
    return new Notification('Error!', {
      body: "Invalid URL!!!!", 
      icon: 'https://i.imgur.com/YwRpFKh.png'
    })

      
   } else {

      invoke('setWallpaper', { url: url})
      return new Notification('Success!', {
        body: "Successfuly set a new background", 
        icon: 'https://i.imgur.com/YwRpFKh.png'
      })
   } 
 

   
} 