/*CMD
  command: set_btc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello Send You're BTC Address. 

*Warning ⚠️⚠️

Make Sure The Address You Post Is An BTC Address. *
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
User.setProperty("addressBtc" , msg, "text");
Bot.sendMessage(" Successfully Set You're BTC Address To \n*"+msg+"* \n\nIf Theres A Mistake Please Redo The Process");
