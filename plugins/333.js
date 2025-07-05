import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  const texto = (m.text || '').trim();

  if (texto !== '27.F>R') return; // solo si el texto es exactamente "27.F>R"

  const mensaje = '𝟐𝟕💛🫶🏼';
  const imgUrl = 'https://files.catbox.moe/24pjs6.jpg';

  try {
    const res = await fetch(imgUrl);
    if (!res.ok) throw new Error('No se pudo obtener la imagen');
    const buffer = await res.buffer();

    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: mensaje
    }, { quoted: m });
  } catch (e) {
    console.error('❌ Error al enviar imagen:', e);
    await m.reply('❌ No se pudo enviar la imagen. Intenta más tarde.');
  }
};

handler.customPrefix = /^27\.F>R$/i; // Coincide solo con el texto "27.F>R"
handler.command = new RegExp(); // sin prefijo

export default handler;