/*CMD
  command: on_address
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "set_eth" },
{ title : "LTC" , command : "set_ltc"}],
[{ title : "BTC" , command : "set_btc"},
{ title : "BCH" , command : "set_bch"}],
[{ title : "DOGE" , command : "set_doge" }],
[{ title : "Back To Panel" , command : "/home"}]
]
if (user.username==user.username){
Bot.sendInlineKeyboard(button , "Hello  Select The Currency You want to set the Address.")

}else{
Bot.sendMessage("Error : You're Not An Admin 🚫");
}
