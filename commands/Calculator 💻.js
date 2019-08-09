/*CMD
  command: Calculator 💻
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Hello Send The Amount You Want Us To Calculate 💻*
  keyboard: 
  aliases: 
CMD*/

let msg = parseFloat(data.message);

let hourly = msg*0.010416667;
let daily = msg*0.252;
let profit = msg*0.5;

Bot.sendMessage("*💻 Profit Calculator 💻*\n\n⏳ Hourly Earnings : "+hourly.toFixed(8)+" 💸\n\n📆 Daily Earnings : "+daily.toFixed(8)+" 💸\n\nProfit After 6 Working Days 📉 : "+profit.toFixed(4)+" 💸\n\nInvestment Duration ⏳ : 6 Days / 144 Hours");
