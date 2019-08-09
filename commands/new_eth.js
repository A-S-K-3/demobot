/*CMD
  command: new_eth
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "ETH",
  label: "User @"+user.username,
  onSuccess: "/walletEth",
  //onIPN: "/onPermanentWalletIPN",
  onIncome: "/paymentEth"
});
