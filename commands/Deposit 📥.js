/*CMD
  command: Deposit 📥
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [
[{ title : "ETH" , command : "eth" },
{ title : "LTC" , command : "ltc"}],
[{ title : "BTC" , command : "btc"},
{ title : "BCH" , command : "bch"}],
[{ title : "DOGE" , command : "doge" }],
[{ title : "Home 🏠" , command : "back delete"}]
]
Bot.sendInlineKeyboard(button, "Please Choose The Currency You Want to Deposit\n\n*For The Earnings Info 💹*\n\n📥 Minimum Invest : 100 DOGE , 0.001 LTC , 0.0005 ETH , 0.0005 BTC , 0.0005 BCH(or You're Decisions How much Is The Minimum Invest )\n\n♻️ Minimum Re-Invest : 100 DOGE , 0.001 LTC , 0.0005 ETH , 0.0005 BTC , 0.0005 BCH( or You're Decision How Much Is the minimum Re-Invest)\n\n Daily Earnings  : 25.2% of You're Investment 📉\n\n Hourly Earnings : 1.04% of You're Investment 📈\n\n Duration Of Investment : 6 Working Days 📆\n\n Profit After 6 Days : 50% Of You're Investment 💸",{on_result: "on_result"});
