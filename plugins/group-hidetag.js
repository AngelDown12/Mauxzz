const handler = async (m, { conn, text, participants, isAdmin, isBotAdmin, isOwner }) => {
  if (!m.isGroup) {
    global.dfail('group', m, conn)
    throw false
  }
  if (!isAdmin && !isOwner) {
    global.dfail('admin', m, conn)
    throw false
  }
  if (!isBotAdmin) {
    global.dfail('botAdmin', m, conn)
    throw false
  }

  const users = participants.map(p => p.id)
  const commandUsed = m.text?.split(' ')[0] || ''
  const mensaje = text?.replace(new RegExp(`^${commandUsed}`, 'i'), '').trim()

  if (m.quoted) {
    const quoted = m.quoted
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const options = { mentions: users, quoted: m }

    if (isMedia) {
      const media = await quoted.download()
      if (/image/.test(mime)) {
        return await conn.sendMessage(m.chat, { image: media, caption: mensaje, ...options })
      } else if (/video/.test(mime)) {
        return await conn.sendMessage(m.chat, { video: media, caption: mensaje, mimetype: 'video/mp4', ...options })
      } else if (/audio/.test(mime)) {
        return await conn.sendMessage(m.chat, { audio: media, mimetype: 'audio/mpeg', ptt: true, ...options })
      } else if (/sticker/.test(mime)) {
        return await conn.sendMessage(m.chat, { sticker: media, ...options })
      }
    } else {
      const citado = quoted.text || quoted.body || mensaje
      return await conn.sendMessage(m.chat, { text: citado || mensaje, mentions: users }, options)
    }
  }

  if (!mensaje) return
  await conn.sendMessage(m.chat, {
    text: mensaje,
    mentions: users
  }, { quoted: m })
}

handler.help = ['hidetag']
handler.tags = ['group']
handler.command = /^(tagall|notify|noti|notificar|n)$/i
handler.group = true

export default handler