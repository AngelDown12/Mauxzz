let handler = async (m, { conn, usedPrefix, command }) => {
  const img = 'https://qu.ax/iWwJT.jpg';
  const name = await conn.getName(m.sender);
  const text = `|🍄‍🟫𝐑𝐞𝐲𝐞𝐬 𝐅𝐢𝐞𝐥 𝐄 𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐨|
            𝐌𝐞𝐧𝐮-𝐁𝐲 𝟑𝟑𝟑

┣━━━━━━━━━━━━━━┫
┃⋗ 🗣️ *𝐀𝐛𝐫𝐢𝐫*
┃⋗ 🗣️ *𝐂𝐞𝐫𝐫𝐚𝐫* 
┃⋗ 🗣️ *𝐓𝐨𝐝𝐨𝐬 / 𝐭𝐨𝐝𝐨𝐬*
┃⋗ 🗣️ *𝐋𝐢𝐧𝐤 / 𝐥𝐢𝐧𝐤* 
┃⋗ 🗣️ *𝐏𝐫𝐨𝐦𝐨𝐭𝐞* 
┃⋗ 🗣️ *𝐊𝐢𝐜𝐤 / 𝐤𝐢𝐜𝐤* 
┃⋗ 🗣️ *𝐍 / 𝐧*
┃⋗ 🗣️ *𝐃𝐞𝐥 / 𝐝𝐞𝐥*
┃⋗ 🗣️ *𝐃𝐞𝐦𝐨𝐭𝐞*
┃⋗ 🗣️ *𝐌𝐞𝐧𝐮 / 𝐦𝐞𝐧𝐮*  
┃⋗ 🗣️ 
┗━━━━━━━━━━━━━━┛


  「 *📚 𝘐𝘯𝘧𝘰 📚* 」
┣━━━━━━━━━━━━━━┫
┃⋗ 👤 *.owner*  
┃⋗ 🌟 *.grupos*  
┃⋗ 📜 *.menu*  
┃⋗ 📖 *.menu2*  
┃⋗ 📚 *.menu3* 
┃⋗ 🖇️ *.menu4* 
┃⋗ 🐶 *.menu5*
┃⋗ 🏓 *.ping*  
┃⋗ ⏳ *.runtime*  
┃⋗ 📢 *.reportar*  
┃⋗ 💡 *.sugerencia*
┗━━━━━━━━━━━━━━┛


  「 *🔎 𝘉𝘶𝘴𝘲𝘶𝘦𝘥𝘢𝘴 🔎* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🛒 *.mercadolibre*  
┃⋗ 🖼️ *.pinterest <texto>*  
┃⋗ 📷 *.imagen <texto>*  
┃⋗ 📹 *.imag <texto>*  
┃⋗ 🔍 *.ytsearch <búsqueda>*  
┗━━━━━━━━━━━━━━┛  


    「 *👥 𝘎𝘳𝘶𝘱𝘰𝘴 👥* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 💡 *.record*
┃⋗ 🗑️ *.del*   
┃⋗ 🔗 *.link*  
┃⋗ ❌ *.kick @user*  
┃⋗ 🎯 *.ruletaban*  
┃⋗ 👮 *.admins < Texto >*  
┃⋗ 📣 *.todos*  
┃⋗ 🚫 *.banchat*  
┃⋗ ✅ *.unbanchat*  
┃⋗ 🚫 *.mute*  
┃⋗ ✅ *.unmute*  
┃⋗ ⏰ *.horario*  
┃⋗ 🤫 *.hidetag*  
┃⋗ 📜 *.reglas*  
┃⋗ 👻 *.fantasmas*  
┃⋗ 🔄 *.nuevolink
`.trim();

  await conn.sendMessage(m.chat, { image: { url: img }, caption: text }, { quoted: m });
};

handler.customPrefix = /^(menu|menú|ayuda|help)$/i;
handler.command = new RegExp; // para que funcione sin prefijo
handler.register = true;

export default handler;