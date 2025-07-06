import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const groups = Object.entries(conn.chats)
      .filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);

    let txt = '';
    let totalGroups = groups.length;

    for (let i = 0; i < groups.length; i++) {
      const [jid] = groups[i];
      let metadata = conn.chats[jid]?.metadata;
      if (!metadata) {
        metadata = await conn.groupMetadata(jid).catch(() => null);
      }
      if (!metadata) continue;

      const participants = metadata.participants || [];
      const botJid = conn.user.jid;
      const bot = participants.find(p => conn.decodeJid(p.id) === conn.decodeJid(botJid));
      const isBotAdmin = bot?.admin || false;
      const isParticipant = participants.some(p => conn.decodeJid(p.id) === conn.decodeJid(botJid));
      const participantStatus = isParticipant ? '👤 Participante' : '❌ Ex participante';
      const totalParticipants = participants.length;
      const groupName = metadata.subject || await conn.getName(jid);
      let inviteLink = '--- (No admin) ---';

      if (isBotAdmin) {
        try {
          const code = await conn.groupInviteCode(jid);
          inviteLink = `https://chat.whatsapp.com/${code}`;
        } catch {
          inviteLink = '--- (Error al obtener link) ---';
        }
      }

      txt += `*◉ Grupo ${i + 1}*\n` +
             `*➤ Nombre:* ${groupName}\n` +
             `*➤ ID:* ${jid}\n` +
             `*➤ Admin:* ${isBotAdmin ? '✔ Sí' : '❌ No'}\n` +
             `*➤ Estado:* ${participantStatus}\n` +
             `*➤ Total de Participantes:* ${totalParticipants}\n` +
             `*➤ Link:* ${inviteLink}\n\n`;
    }

    if (!txt.trim()) return m.reply('⚠️ No se encontraron grupos o ocurrió un error al procesar la información.');

    await m.reply(`*📋 Lista de grupos donde está el Bot:*\n\n*—◉ Total de grupos:* ${totalGroups}\n\n${txt.trim()}`);
  } catch (e) {
    console.error('❌ Error al listar grupos:', e);
    return m.reply('❌ Error al listar los grupos. Intenta más tarde.');
  }
};

handler.help = ['groups', 'grouplist', 'listagrupos'];
handler.tags = ['owner'];
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listgroup)$/i;
handler.rowner = true;
handler.private = true;

export default handler;