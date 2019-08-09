/*CMD
  command: on_send
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "send_eth" },
{ title : "LTC" , command : "send_ltc"}],
[{ title : "BTC" , command : "send_btc"},
{ title : "BCH" , command : "send_bch"}],
[{ title : "DOGE" , command : "send_doge" }],
[{ title : "Back To Panel" , command : "panel delete"}]
]
if (user.username==user.username){
Bot.sendInlineKeyboard(button , "Hello Admin Choose A Currency Balance You Want to Send To A User", {on_result : "admng"})

}else{
Bot.sendMessage("Error : You're Not An Admin 🚫");
}
