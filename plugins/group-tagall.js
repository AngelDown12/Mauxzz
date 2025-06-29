const wm = '•       𝐌𝐚𝐮/ 𝟑𝟑𝟑';

const handler = async (m, { conn, participants, isAdmin, isOwner }) => {
  if (!isAdmin && !isOwner) return conn.reply(m.chat, '*⚠️ Este comando es solo para admins.*', m);

  const texto = (m.text || '').trim();
  const mensaje = texto.replace(/^(\.|)?(tagall|invocar|invocacion|invocación|todos|talibanes)\s*/i, '');

  const emojis = ['💩', '🤡'];
  const lista = participants.map((u, i) => `${emojis[i % emojis.length]} @${u.id.split('@')[0]}`).join('\n');

  const textoFinal = [
    '🗣️ *𝐈𝐍𝐕𝐎𝐂𝐀𝐍𝐃𝐎 𝐏𝐄𝐑𝐑𝐈𝐓𝐀𝐒* 🗣️',
    mensaje ? `\n*𝐀𝐕𝐈𝐒𝐎:* ${mensaje}` : '',
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
handler.command = new RegExp();

handler.group = true;
handler.admin = true;

export default handler;