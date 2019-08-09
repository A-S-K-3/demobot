/*CMD
  command: Manual Withdrawal 📤
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "withdraw_eth" },
{ title : "LTC" , command : "withdraw_ltc"}],
[{ title : "BTC" , command : "withdraw_btc"},
{ title : "BCH" , command : "withdraw_bch"}],
[{ title : "DOGE" , command : "withdraw_doge" }],
]
if (user.username==user.username){
Bot.sendInlineKeyboard(button , "Hello User Please Select The Currency You Want to Withdraw", {on_result : "wdmsg"})

}else{
Bot.sendMessage("Error : You're Not An Admin 🚫");
}
