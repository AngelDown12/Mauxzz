const wm = '𝐫𝐞𝐲𝐞𝐬 𝟑𝟑𝟑';

const handler = async (m, { conn, participants, isAdmin, isOwner }) => {
  if (!m.isGroup) {
    global.dfail('group', m, conn);
    throw false;
  }

  if (!isAdmin && !isOwner) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const texto = (m.text || '').trim();
  const mensaje = texto.replace(/^(\.|)?(tagall|invocar|invocacion|invocación|todos|talibanes)/i, '').trim();

  const emojis = ['🤴🏽', '👸🏼'];
  const lista = participants
    .map((u, i) => `${emojis[i % emojis.length]} @${u.id.split('@')[0]}`)
    .join('\n');

  const textoFinal = [
    '|  𝐋𝐄𝐕𝐀𝐍𝐓𝐄𝐍𝐒𝐄 𝐇𝐔𝐄𝐕𝐎𝐍𝐄𝐒🗣️',
    '',
    '|        𝐒𝐢𝐠𝐚𝐧 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥👑',
    'https://whatsapp.com/channel/0029Vb6PvNgE50UeyUYx1105',
    '|          𝐓𝐞𝐚𝐦 𝐀𝐜𝐭𝐢𝐯𝐨👫',
    'https://chat.whatsapp.com/FTzuplw8j1bGKpGk0YQzRA?mode=r_t',
    '',
    mensaje ? `|          *${mensaje}*` : '|          𝐈𝐧𝐯𝐨𝐜𝐚𝐧𝐝𝐨𝐥𝐨𝐬 📞',
    '',
    lista,
    '',
    wm
  ].join('\n');

  await conn.sendMessage(m.chat, {
    text: textoFinal,
    mentions: participants.map(u => u.id)
  });
};

handler.customPrefix = /^(\.|)?(tagall|invocar|invocacion|invocación|todos|talibanes)/i;
handler.command = new RegExp(); // funciona sin prefijo
handler.group = true;
handler.admin = true;

export default handler;