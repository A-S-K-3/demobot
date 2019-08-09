/*CMD
  command: set_bch
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello Send You're BCH Address. 

*Warning ⚠️⚠️

Make Sure The Address You Post Is An BCH Address. *
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
User.setProperty("addressBch" , msg, "text");
Bot.sendMessage(" Successfully Set You're BCH Address To \n*"+msg+"* \n\nIf Theres A Mistake Please Redo The Process");
