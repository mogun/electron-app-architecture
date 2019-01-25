// レンダラープロセスからBrowserWindowを作る
const { remote } = require('electron')
const { BrowserWindow } = remote
const win = new BrowserWindow();
win.loadFile('hoge.html')

console.log("index.jsを呼んだよ");

const fs = require('fs')
const pwd_files = fs.readdirSync('./')
console.log(pwd_files)
