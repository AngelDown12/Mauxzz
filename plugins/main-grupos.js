const handler = async (m) => {
  const texto = `
𝐇𝐨𝐥𝐚 𝐧𝐨𝐬 𝐢𝐧𝐯𝐢𝐭𝐚𝐦𝐨𝐬 𝐚 𝐧𝐮𝐞𝐬𝐭𝐫𝐨𝐬 
𝐠𝐫𝐮𝐩𝐨𝐬 𝐝𝐞 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩𝐬 𝐚𝐦𝐢𝐠@𝐬💋

1-• 🤴🏽𝐑𝐞𝐲𝐞𝐬/𝟑𝟑𝟑
https://chat.whatsapp.com/ELbgZy9bOZa4IaDyH5UvYP?mode=ac_c

2-• ⭐️Canal:
https://whatsapp.com/channel/0029Vb6PvNgE50UeyUYx1105
`.trim()

  await m.reply(texto)
}

handler.customPrefix = /^(grupos|grupo)$/i
handler.command = new RegExp() // Para que funcione sin prefijo
handler.register = true

export default handler