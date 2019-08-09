/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
*To Be Able To Use This Bot Join*
@DevTech2K19
  ANSWER
  keyboard: ✅ JOINED
  aliases: 
CMD*/

function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
User.setProperty("referrer" , reUser.username , "text");
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username+"\n\nHe/She Will Earn 10% Commission Of You're Investment");
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You just attract new user: @" + user.username+"\n\nYou Will Earn 10% Commission Of His/Her Investment");
}

function doAlreadyAttracted(){
  Bot.sendMessage("You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

