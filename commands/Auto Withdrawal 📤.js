/*CMD
  command: Auto Withdrawal 📤
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "auto_withdraw_eth" },
{ title : "LTC" , command : "auto_withdraw_ltc"}],
[{ title : "BTC" , command : "auto_withdraw_btc"},
{ title : "BCH" , command : "auto_withdraw_bch"}],
[{ title : "DOGE" , command : "auto_withdraw_doge" }],
]
if (user.username==user.username){
Bot.sendInlineKeyboard(button , "Hello User Please Select The Currency You Want to Withdraw")

}else{
Bot.sendMessage("Error : You're Not An Admin 🚫");
}
