  const { getBuffer } = require('../function.js')
  const groupResponse = async (sock, update) => {
   const metadata = await sock.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await sock.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
         try {
           ppuser = await sock.profilePictureUrl(num, 'image')
         } catch {
           ppuser = 'https://telegra.ph/file/775417d97825f5ee9a96e.jpg'
         }
         if (update.action == 'add') {
          var button = [
             { 
              buttonId: `#arielsp`, 
              buttonText: { 
               displayText: `Welcome & Show Menu👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
         update.id, 
         { 
         caption: `Halo @${num.split("@")[0]} Member Baru Di *${metadata.subject}*\n\nDeskripsi Group *${metadata.subject}* : ${metadata.desc}`, 
         image: { url: ppuser },
         buttons: button, 
         footer: 'Ariel Sandy Permana', mentions: [num] })
         } 
        else 
        if (update.action == 'remove') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Bye👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
           update.id, 
          { 
           caption: `@${num.split("@")[0]} Keluar Dari Group *${metadata.subject}*`, 
           image: { url: ppuser },
           buttons: button, 
           footer: 'Ariel Sandy Permana', 
           mentions: [num] 
             }
             )
             }
            }
        } catch (err) {
        console.log(err)
      }
    }   
  }
module.exports = { groupResponse }  
