/*CMD
  command: on_Remove
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
[{ title : "ETH" , command : "re_eth" },
{ title : "LTC" , command : "re_ltc"}],
[{ title : "BTC" , command : "re_btc"},
{ title : "BCH" , command : "re_bch"}],
[{ title : "DOGE" , command : "on_Remove_Doge" }],
[{ title : "Back To Panel" , command : "panel delete"}]
]
if (user.username==user.username){
Bot.sendInlineKeyboard(button , "Hello Admin Choose A Currency You Want to Remove From A User", {on_result : "admng"})

}else{
Bot.sendMessage("Error : You're Not An Admin 🚫");
}
