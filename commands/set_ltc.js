/*CMD
  command: set_ltc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello Send You're LTC Address. 

*Warning ⚠️⚠️

Make Sure The Address You Post Is An LTC Address. *
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
User.setProperty("addressLtc" , msg, "text");
Bot.sendMessage(" Successfully Set You're LTC Address To \n*"+msg+"* \n\nIf Theres A Mistake Please Redo The Process");
