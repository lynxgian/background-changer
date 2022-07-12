#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use wallpaper;
use http::{Request, Response};
use try_catch::catch;
use tauri::api::notification::Notification;



fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![setWallpaper])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

}


#[tauri::command]
fn setWallpaper(url: &str){
    let b = wallpaper::set_from_url(url).expect("Error occured");

  
 
  } 