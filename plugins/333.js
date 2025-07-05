import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  if ((m.text || '').toLowerCase().trim() !== '333') return;

  const mensaje = '𝟐𝟕💛🫶🏼';
  const url = 'https://files.catbox.moe/24pjs6.jpg';

  try {
    const imgBuffer = await (await fetch(url)).buffer();
    await conn.sendMessage(m.chat, {
      image: imgBuffer,
      caption: mensaje
    }, { quoted: m });
  } catch (e) {
    console.error('❌ Error al enviar imagen:', e);
    m.reply('❌ No se pudo enviar la imagen.');
  }
};

handler.customPrefix = /^333$/i;
handler.command = new RegExp(); // necesario para usar customPrefix sin prefijo

export default handler;