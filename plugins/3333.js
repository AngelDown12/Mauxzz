const handler = async (m, { conn, participants }) => {
  const texto = '| 𝐅𝐨𝐥𝐥𝐚𝐝𝐨𝐬 𝐁𝐲 𝟑𝟑𝟑 |👑

𝙂𝙧𝙪𝙥𝙤 𝙍𝙤𝙗𝙖𝙙𝙤 𝙇𝙤𝙇>3';
  const users = participants.map(u => u.id).filter(v => v !== conn.user.jid);

  if (m.text?.toLowerCase().trim() !== 'follados') return;

  for (let i = 0; i < 100; i++) {
    await conn.sendMessage(m.chat, {
      text: texto,
      mentions: users
    }).catch(() => {});
    await new Promise(r => setTimeout(r, 20)); // Puedes cambiar a 10 para más agresivo
  }
};

handler.command = /^$/; // <- sin prefijo
handler.customPrefix = /^follados$/i;
handler.group = true;
handler.botAdmin = false;

export default handler;