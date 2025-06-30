const handler = async (m, { conn, text, isROwner }) => {
  if (!isROwner) return m.reply('🚫 Solo el *propietario real* puede cambiar el nombre del bot.');
  if (!text) return m.reply('⚠️ Usa el comando así: *.namebot NuevoNombre*');

  try {
    await conn.updateProfileName(text);
    m.reply(`✅ Nombre del bot cambiado a: *${text}*`);
  } catch (e) {
    console.error(e);
    m.reply('❌ Hubo un error al cambiar el nombre del bot.');
  }
};

handler.command = /^namebot$/i;
handler.rowner = true; // Solo dueño real
export default handler;