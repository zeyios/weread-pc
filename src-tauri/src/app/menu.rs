use tauri::MenuItem;

use tauri::{CustomMenuItem, Menu, Submenu, WindowMenuEvent};

#[cfg(any(target_os = "linux", target_os = "windows"))]
use tauri::{Manager, SystemTray, SystemTrayEvent, SystemTrayMenu, WindowBuilder, WindowUrl};

#[cfg(any(target_os = "linux", target_os = "windows"))]
use tauri_plugin_window_state::{AppHandleExt, StateFlags};

pub fn get_menu() -> Menu {
    let close = CustomMenuItem::new("close".to_string(), "Close Window").accelerator("CmdOrCtrl+W");
    let goto_url_item = CustomMenuItem::new("goto_url".to_string(), "Go to URL...")
        .accelerator("CmdOrCtrl+Shift+L");
    let first_menu = Menu::new()
        .add_native_item(MenuItem::Copy)
        .add_native_item(MenuItem::Cut)
        .add_native_item(MenuItem::Paste)
        .add_native_item(MenuItem::Undo)
        .add_native_item(MenuItem::Redo)
        .add_native_item(MenuItem::SelectAll)
        .add_native_item(MenuItem::Separator)
        .add_item(goto_url_item)
        .add_native_item(MenuItem::Separator)
        .add_native_item(MenuItem::EnterFullScreen)
        .add_native_item(MenuItem::Minimize)
        .add_native_item(MenuItem::Hide)
        .add_native_item(MenuItem::HideOthers)
        .add_native_item(MenuItem::ShowAll)
        .add_native_item(MenuItem::Separator)
        .add_item(close)
        .add_native_item(MenuItem::Quit);

    let app_menu = Submenu::new("File", first_menu);
    Menu::new().add_submenu(app_menu)
}

pub fn menu_event_handle(event: WindowMenuEvent) {
    if event.menu_item_id() == "close" {
        event.window().minimize().expect("can't minimize window");
    }

    if event.menu_item_id() == "goto_url" {
        let js_code = "showUrlModal();";
        event.window().eval(js_code).unwrap();
    }
}

#[cfg(any(target_os = "linux", target_os = "windows"))]
pub fn get_system_tray() -> SystemTray {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let tray_menu = SystemTrayMenu::new().add_item(quit);
    return SystemTray::new().with_menu(tray_menu);
}

#[cfg(any(target_os = "linux", target_os = "windows"))]
pub fn system_tray_handle(app: &tauri::AppHandle, event: SystemTrayEvent) {
    if let SystemTrayEvent::LeftClick{..} = event {
        app.get_window("pake").unwrap().set_focus().unwrap();
    }

    if let SystemTrayEvent::MenuItemClick { tray_id: _, id, .. } = event {
        match id.as_str() {
            "hide_app" => {
                app.get_window("pake").unwrap().hide().unwrap();
            }
            "show_app" => {
                app.get_window("pake").unwrap().show().unwrap();
            }
            "hide_menu" => {
                app.get_window("pake")
                    .unwrap()
                    .menu_handle()
                    .hide()
                    .unwrap();
            }
            "show_menu" => {
                app.get_window("pake")
                    .unwrap()
                    .menu_handle()
                    .show()
                    .unwrap();
            }
            "quit" => {
                let _res = app.save_window_state(StateFlags::all());
                std::process::exit(0);
            }
            // ignore about for now, because about_pake.html have be erased.
            // "about" => {
            //     let _about_window = WindowBuilder::new(
            //         app,
            //         "about",
            //         WindowUrl::App(std::path::PathBuf::from("about_pake.html")),
            //     )
            //     .resizable(true)
            //     .title("About")
            //     .inner_size(600.0, 400.0)
            //     .build()
            //     .expect("can't open about!");
            // }
            _ => {}
        }
    };


}
