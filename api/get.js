import { Client } from 'pg';

export default async function handler(req, res) {
  try {
    // Membuat koneksi ke database
    const client = new Client({
      connectionString: process.env.DB_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    await client.connect();

    // Menjalankan query SQL untuk mengambil data VMess
    const query = 'SELECT * FROM proxies WHERE VPN = $1';
    const values = ['vmess'];
    const result = await client.query(query, values);

    // Mengirim respons dengan data VMess dalam format JSON
    res.status(200).json(result.rows);

    // Menutup koneksi ke database
    await client.end();
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
