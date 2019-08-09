/*CMD
  command: /onWithdrawBtc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options)); 
let result = options.body.result;

Bot.sendMessage("Withdrawal Request Sent ✅ \n\nThe Admin Only Needs To Confirm It With One Click \n\nRequest ID : \n"+result.id);
