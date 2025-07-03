import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    let grupos = "𝐇𝐨𝐥𝐚 𝐋𝐨𝐬 𝐢𝐧𝐯𝐢𝐭𝐚𝐦𝐨𝐬 𝐚 𝐧𝐮𝐞𝐬𝐭𝐫𝐨𝐬 
𝐠𝐫𝐮𝐩𝐨𝐬 𝐝𝐞 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩𝐬 𝐚𝐦𝐢𝐠@𝐬💋

1-•      🤴🏽𝐑𝐞𝐲𝐞𝐬/𝟑𝟑𝟑
https://chat.whatsapp.com/ELbgZy9bOZa4IaDyH5UvYP?mode=ac_c

2-•     ⭐️Canal :
https://whatsapp.com/channel/0029Vb6PvNgE50UeyUYx1105";

    // Asegúrate de definir 'imagen2' correctamente antes de usarlo
    let imagen2 = 'https://qu.ax/RejMz.jpg';

    // Define los emojis que quieres usar
    let emojis = '🍁';

    await conn.sendFile(m.chat, imagen2, "ian.jpg", grupos, m, null, );
    await m.react(emojis);
}

handler.help = ['grupos'];
handler.tags = ['main'];
handler.command = ['grupos', 'iangrupos', 'gruposian'];

export default handler;