const handler = async (m, { conn }) => {
  if (m.text?.toLowerCase().trim() !== '333') return;

  const mensaje = `𝟐𝟕💛🫶🏼`.trim();

  const imgBuffer = await (await fetch('https://files.catbox.moe/24pjs6.jpg')).buffer();
  await conn.sendMessage(m.chat, { image: imgBuffer, caption: mensaje }, { quoted: m });
};

handler.customPrefix = /^27.F>R$/i;
handler.command = new RegExp; // sin comando

export default handler;