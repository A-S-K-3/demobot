/*CMD
  command: check_btc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("btc", tgid);

Bot.sendMessage("User "+tgid + " Balance Of BTC is "+res.value().toFixed(8));
