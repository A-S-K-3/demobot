/*CMD
  command: Referral 🚻
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("MCIDDemoBot","MCIDDemoBot");
Bot.sendMessage("You're Referral Link\n⬇\n"+parther_link+"\n\nShare This Link to Earn 10% Commission From You're Referrals Investment");



