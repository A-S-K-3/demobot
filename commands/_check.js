/*CMD
  command: /check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options)); 
let user = options.result.status;
if (user=="member"){
Bot.runCommand("/home");
}else{
Bot.runCommand("/start");
}

Bot.setProperty("status" , user, "text");

