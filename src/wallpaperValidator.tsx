import { invoke } from '@tauri-apps/api/tauri'
export  default async function  url(url: string) {
   const recievedUrl =  new Request(url, {
       method: "HEAD",
       mode: 'no-cors'
   })

   console.log(recievedUrl)
   if(recievedUrl) {
    invoke('setWallpaper', { url: url})
    return new Notification('Success!', {
      body: "Successfuly set a new background", 
      icon: 'https://i.imgur.com/YwRpFKh.png'
    })

    
   } else {
    return new Notification('Error!', {
        body: "Invalid URL!!!!", 
        icon: 'https://i.imgur.com/YwRpFKh.png'
      })
   }

   
}