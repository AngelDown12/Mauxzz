const handler = async (m, { conn, participants, isAdmin, isBotAdmin }) => {
  if (!m.isGroup) {
    global.dfail('group', m, conn)
    throw false
  }
  if (!isAdmin) {
    global.dfail('admin', m, conn)
    throw false
  }
  if (!isBotAdmin) {
    global.dfail('botAdmin', m, conn)
    throw false
  }

  const botJid = conn.user.jid
  const owners = global.owner?.map(([id]) => id) || []

  const expulsar = participants
    .filter(p =>
      !p.admin &&
      p.id !== botJid &&
      p.id !== m.sender &&
      !owners.includes(p.id)
    )
    .map(p => p.id)

  if (!expulsar.length) {
    return m.reply('✅ No hay miembros que se puedan expulsar.')
  }

  try {
    await conn.groupParticipantsUpdate(m.chat, expulsar, 'remove')
    await m.reply(`✅ Se expulsaron a *${expulsar.length}* miembros del grupo.\n\n🔥 *𝐁𝐀𝐒𝐔𝐑𝐀 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐃𝐀* 🧹`)
  } catch (e) {
    console.error('❌ Error al expulsar masivamente:', e)
    await m.reply('⚠️ Hubo un error al intentar expulsar a los miembros. Puede que WhatsApp haya bloqueado la acción masiva.')
  }
}

handler.customPrefix = /^(kickall|banall|kikoall)$/i
handler.command = new RegExp()
handler.group = true
handler.botAdmin = true

export default handler