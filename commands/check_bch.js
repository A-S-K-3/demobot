/*CMD
  command: check_bch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("bch", tgid);

Bot.sendMessage("User "+tgid + " Balance Of BCH is "+res.value().toFixed(8));
