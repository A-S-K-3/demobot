/*CMD
  command: minerBch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("bch");
let amount = User.getProperty("minerBch");
amount = parseFloat(amount);
//You Can set the Growth Percentage By Changing the Amount to be Multiplied to "amount"
let hourly = amount*0.0105;
let daily = amount*0.252;
let profit = amount*0.5;
//Max value: 100
let secs_in_hour = 1 * 60 * 60;
res.growth.add({
  value: hourly,
  interval: secs_in_hour,
  max: profit
});
Bot.sendMessage("*Miner Started For BCH 🎉🎉 \n Hourly Earnings : *"+hourly.toFixed(8)+"\n\n*Daily Earnings : *"+daily.toFixed(8)+"\n\n*Profit After 6 Days :*"+profit.toFixed(8)+"\n\n*Investment Will Be Only Active For 6 Days *")
