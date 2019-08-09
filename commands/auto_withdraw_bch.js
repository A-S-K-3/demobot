/*CMD
  command: auto_withdraw_bch
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello Send The Amount You Want To Withdraw
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("bch");
let withdrawn = Libs.ResourcesLib.userRes("wdBch");
let amount = parseFloat(data.message);
let wallet = User.getProperty("addressBch");
if (wallet==undefined){
Bot.sendMessage("Please Set You're BCH Address To Withdraw");
}else{
if (amount>res.value() || amount<0.00075){
Bot.sendMessage(" Please Check the Requirements to Withdraw ⁉⁉\n\n1.) You Should Have A Sufficient Balance \n\n2.) You Should Withdraw Above The Minimum Withdraw ")
}else{
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: amount,
            currency:"bch",
            address: wallet
},
  onSuccess: '/onWithdrawBch'
}); 
res.remove(amount); 
withdrawn.add(amount); 
}
}
