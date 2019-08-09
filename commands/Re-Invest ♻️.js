/*CMD
  command: Re-Invest ♻️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "invest_eth" },
{ title : "LTC" , command : "invest_ltc"}],
[{ title : "BTC" , command : "invest_btc"},
{ title : "BCH" , command : "invest_bch"}],
[{ title : "DOGE" , command : "invest_doge" }],
[{ title : "Back To Dashboard" , command : "back delete"}]
]
if (user.username==user.username){
Bot.sendInlineKeyboard(button , "Hello Select A Currency You Want to Re-Invest ♻️")

}else{
Bot.sendMessage("Error : You're Not An Admin 🚫");
}
