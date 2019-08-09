/*CMD
  command: /home
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: back 🔙
CMD*/




let status = Bot.getProperty("status");

if (status=="member" || status=="creator"){

let withdrawn = Libs.ResourcesLib.userRes("withdrawn");
let active = Libs.ResourcesLib.userRes("active");
let res = Libs.ResourcesLib.userRes("balance");

let x =User.setProperty("hi",res.value().toFixed(8),"String")
let hi =User.getProperty("hi")
Bot.sendKeyboard("💳 Balance\nDeposit 📥,Withdraw Options ⚙️,\nRe-Invest ♻️,Referral 🚻,\nMy Team🔰,Statistics 📊,\nSettings ⚙️,Investment Plan 📝,\nLogin As Admin,","Hello This Is A Multi Currency Investment DEMO Bot.\n\nThis Is Made So that You Can See How The Bot Works.\n\nThis Bot Cost 10$ \n\nIf You Want To Avail Contact @Dev4434_DevTech / @LilBro_DevTech.\n\n_ You can Also Check\n@DemoDoublerBot");
}else{
Bot.runCommand("/start");
}

