/*CMD
  command: Test Admin Security
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: test security 🔒
CMD*/

if (user.username=="NonAdmin"){
Bot.sendMessage("🔓 Access Granted 🔓")
Bot.runCommand("Admin")
}else{
Api.sendPhoto({ photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOwrx5x85qWPO9agDfMMOSEt1iGYBhZkDdNqLSh1SwFTD6phlM" , caption : "🚫 Access Denied 🚫\n\nReason : \"Not A Admin\""});
}
