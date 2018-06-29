
const electron=require("electron");
const url=require("url");
const path=require("path");
const {app,BrowserWindow}=electron
let mainWindow;
app.on('ready',function(){
mainWindow=new BrowserWindow({
     height:800,
     width:700,
     frame:false
});
mainWindow.loadURL(url.format({
    pathname:path.join(__dirname,'MainWindow.html'),
    protocol:'file:',
    slashes:true
}));
});