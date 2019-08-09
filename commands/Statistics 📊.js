/*CMD
  command: Statistics 📊
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let total = Bot.getProperty("total");
var msg = "";
let totalEth=Bot.getProperty("totalEth");
let totalLtc=Bot.getProperty("totalLtc");
let totalBtc=Bot.getProperty("totalBtc");
let totalBch=Bot.getProperty("totalBch");

var st = data.statistics;let res = Libs.ResourcesLib.userRes("balance");

let eth = Libs.ResourcesLib.userRes("eth");
let ltc = Libs.ResourcesLib.userRes("ltc");
let btc = Libs.ResourcesLib.userRes("btc");
let bch = Libs.ResourcesLib.userRes("bch");
   

Bot.sendMessage("*Total Members 👥 : *\n"+ st.user_chats_count + "\n\n *Total Investment 💸 :* \nDOGE ~ "+total.toFixed(8)+ " DOGE\nETH ~ "+totalEth.toFixed(8)+" ETH\nLTC ~ "+totalLtc.toFixed(8)+" LTC\nBTC ~ "+totalBtc.toFixed(8)+" BTC\nBCH ~ "+totalBch.toFixed(8)+" BCH\n\n*Community 💬 :* \"Youre Chat Room\" \n\n* Payment Channel 📮 : *\"You're Payment Channel \"\n\nNote : The Value Of the Total Investment Will be Changed When A Deposit Is Made");
