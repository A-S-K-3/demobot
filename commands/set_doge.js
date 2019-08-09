/*CMD
  command: set_doge
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello Send You're DOGE Address. 

*Warning ⚠️⚠️

Make Sure The Address You Post Is An DOGE Address. *
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
User.setProperty("addressDoge" , msg, "text");
Bot.sendMessage(" Successfully Set You're DOGE Address To \n*"+msg+"* \n\nIf Theres A Mistake Please Redo The Process");
