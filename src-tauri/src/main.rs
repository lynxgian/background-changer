#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use wallpaper;
use http::{Request, Response};
use try_catch::catch;




fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![setWallpaper])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}


#[tauri::command]
fn setWallpaper(url: &str){
    wallpaper::set_from_url(url).unwrap();
  }