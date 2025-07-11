let handler = async (m, { conn, usedPrefix, command }) => {
  const img = 'https://files.catbox.moe/qkxkw3.jpg';
  const name = await conn.getName(m.sender);
  const text = `╔═════════════════╗
║              ✧ *MENÚ DEL BOT* ✧
╚═════════════════╝

          ✦ ────  ✧  ──── ✦
           𝐅𝐞𝐫𝐬𝐢𝐭𝐚 𝐗 𝐑𝐞𝐲𝐞𝐬 𝐇𝐞𝐡𝐞🫶🏼         
          ✦ ────  ✧  ──── ✦

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
┃⋗ ✅ *.unba`.trim();

  await conn.sendMessage(m.chat, { image: { url: img }, caption: text }, { quoted: m });
};

handler.customPrefix = /^(menu|menú|ayuda|help)$/i;
handler.command = new RegExp; // para que funcione sin prefijo
handler.register = true;

export default handler;