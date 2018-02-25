const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
    /*
    win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
    }))

    win.loadURL(url.format ({ 
      pathname: 'gaana.com/playlist/gaana-dj-sridevi-hit-songs', 
      protocol: 'https:', 
      slashes: true 
    }))
    */  
   
    win.loadURL(url.format ({ 
        pathname: path.join(__dirname, 'index.html'), 
        protocol: 'file:', 
        slashes: true 
    }))
}  

//app.onload="if (typeof require !=== 'undefined') window.$ = window.jQuery = module.exports;"

app.on('ready', createWindow)