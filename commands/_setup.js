/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Keys SetUP
  keyboard: 
  aliases: 
CMD*/

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("78f3a698243A3DCd63f0dc73e03e7BEAd0072DbE48E0A216caf3aaa44d3427C7");
Libs.CoinPayments.setPublicKey('acedad6ab9f6dc3af7336ac8c433e697e05e8563c1a6343f8577be58230ddce7');

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('6mBOGBfqA68kbrtnvt9OFF3R5ryDQPM9q4066Hr4');
