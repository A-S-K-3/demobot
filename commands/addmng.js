/*CMD
  command: addmng
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msgid = options.result.message_id;

User.setProperty("addmng" , msgid, "integer");
