/*CMD
  command: Settings ⚙️
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: *Check Our Profit Calculator Below 💻*
  keyboard: Calculator 💻,\nBack 🔙
  aliases: 
CMD*/

var button = [
[{ title : "Set Addresses 💸" , command : "on_address"}],
]
let ref = User.getProperty("referrer");
let eth = User.getProperty("addressEth");
let ltc = User.getProperty("addressLtc");
let btc = User.getProperty("addressBtc");
let bch = User.getProperty("addressBch");
let doge = User.getProperty("addressDoge");


Bot.sendInlineKeyboard(button , "You're Settings ⚙️ \n\n🆔 Id : "+user.telegramid+"\nName 👤 : " + user.first_name + "("+user.username+")"+"\nReferral From : @"+ref+"\n\n*Adresses 📥: *\nDOGE :\n*"+doge+"*\nETH :\n*"+eth+"*\nLTC :\n*"+ltc+"*\nBTC :\n*"+btc+"*\nBCH : \n*"+bch+"*");



