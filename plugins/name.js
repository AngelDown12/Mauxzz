const handler = async (m, { conn, text, isROwner }) => {
  if (!isROwner) return m.reply('🚫 Solo el *dueño real* puede usar este comando.');
  if (!text) return m.reply('✏️ Usa el comando así: *.namebot NuevoNombre*');

  try {
    await conn.updateProfileName(text);
    return m.reply(`✅ El nombre del bot fue actualizado a: *${text}*`);
  } catch (e) {
    console.error('[ERROR AL CAMBIAR NOMBRE]', e);
    return m.reply('❌ No se pudo cambiar el nombre. Posiblemente el cliente no lo permite.');
  }
};

handler.command = /^namebot$/i;
handler.rowner = true;
export default handler;