/*CMD
  command: set_eth
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello Send You're ETH Address. 

*Warning ⚠️⚠️

Make Sure The Address You Post Is An ETH Address. *
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
User.setProperty("addressEth" , msg, "text");
Bot.sendMessage(" Successfully Set You're ETH Address To \n*"+msg+"* \n\nIf Theres A Mistake Please Redo The Process");
