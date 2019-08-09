/*CMD
  command: back
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg_id = User.getProperty("msgid");
if(params=="delete"){
   Api.deleteMessage({
 chat_id : chat.chatid,
 message_id : msg_id});
 Bot.sendMessage("Welcome Back 🎉");
}
