/*CMD
  command: Get Funds 💰
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "add_eth" },
{ title : "LTC" , command : "add_ltc"}],
[{ title : "BTC" , command : "add_btc"},
{ title : "BCH" , command : "add_bch"}],
[{ title : "DOGE" , command : "add_doge" }],
[{ title : "Back To Panel" , command : "panel delete"}]
]
if (user.username==user.username){
Bot.sendInlineKeyboard(button , "Hello Admin Please Select The Currency You Want To Get Funds\n\nAdded Value Are \n• DOGE ~ 1000 DOGE \n• ETH ~ 10 ETH \n• LTC ~ 10 LTC \n• BTC ~ 10 BTC \n• BCH ~ 10 BCH", {on_result : "addmng"})

}else{
Bot.sendMessage("Error : You're Not An Admin 🚫");
}
