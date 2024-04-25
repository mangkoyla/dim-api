import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    // Koneksi ke database
    const db = new Client({
      connectionString: process.env.DB_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    await db.connect();
    
    // Menjalankan query
    const query = "SELECT * FROM proxies";
    const { rows } = await db.query(query);
    
    // Mengonversi hasil query menjadi format JSON yang sesuai
    const vmessData = rows.map(row => {
      return {
        server: row.SERVER,
        ip: row.IP,
        port: row.SERVER_PORT,
        uuid: row.UUID,
        password: row.PASSWORD,
        security: row.SECURITY,
        alterId: row.ALTER_ID,
        method: row.METHOD,
        plugin: row.PLUGIN,
        pluginOpts: row.PLUGIN_OPTS,
        protocol: row.PROTOCOL,
        protocolParam: row.PROTOCOL_PARAM,
        obfs: row.OBFS,
        obfsParam: row.OBFS_PARAM,
        host: row.HOST,
        tls: row.TLS,
        transport: row.TRANSPORT,
        path: row.PATH,
        serviceName: row.SERVICE_NAME,
        insecure: row.INSECURE,
        sni: row.SNI,
        remark: row.REMARK,
        connMode: row.CONN_MODE,
        countryCode: row.COUNTRY_CODE,
        region: row.REGION,
        org: row.ORG,
        vpn: row.VPN
      };
    });
    
    // Mengembalikan data dalam format JSON
    res.status(200).json({ proxies: vmessData });
    
    // Menutup koneksi ke database
    await db.end();
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
