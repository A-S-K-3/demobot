/*CMD
  command: new_ltc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.CoinPayments.createPermanentWallet({
  currency: "LTC",
  label: "User @"+user.username,
  onSuccess: "/walletLtc",
  //onIPN: "/onPermanentWalletIPN",
  onIncome: "/paymentLtc"
});
