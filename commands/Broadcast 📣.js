/*CMD
  command: Broadcast 📣
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello Send You're Message.

Reply "Cancel" to cancel. 

You Can Use These For Markdown Text 

BOLD : *Text* 

("*" Should Be Put Before And After The Word Or Sentence) 

ITALICS : _ TEXT _ 

("_" Should Be Put Before And After The Word Or Sentence) 

LINK IN A WORD : [TEXT](Link)

MONO : ` TEXT ` 

("`" Should Be Put Before And After the Word or Sentence )

Reply "Cancel" to cancel.
  ANSWER
  keyboard: Cancel
  aliases: 
CMD*/

let text = data.message;
if (user.username==user.username){
if(text=="Cancel"){
Bot.runCommand("Admin")
}else{
if (request.entities.type=="url"){
Bot.sendMessage(" This Is A Demo Bot No Links Allowed in Broadcast ");
}else{
Bot.sendMessageToAllPrivateChats("📣 Great News 📣\n\n"+text)
Bot.runCommand("Admin");
}
}
}else{
Bot.sendMessage("Error You're Not An Admin 🚫");
}
