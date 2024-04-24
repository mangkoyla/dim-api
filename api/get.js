import { Client } from 'pg';

const client = new Client({
    connectionString: 'postgres://sbabyxcc:HotqM-jeiT5J1w_icQBuaQCjRNo4ezwU@floppy.db.elephantsql.com/sbabyxcc',
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL database:', err);
    });

export function get(filter, callback) {
    const query = `SELECT * FROM proxies ${filter}`;
    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return callback([]);
        }
        
        const result = toJson(res.rows);
        callback(result);
    });
}

function toJson(rows) {
    const result = [];
    
    rows.forEach(row => {
        result.push({
            Server: row.server,
            Ip: row.ip,
            ServerPort: row.serverport,
            UUID: row.uuid,
            Password: row.password,
            Security: row.security,
            AlterId: row.alterid,
            Method: row.method,
            Plugin: row.plugin,
            PluginOpts: row.pluginopts,
            Protocol: row.protocol,
            ProtocolParam: row.protocolparam,
            OBFS: row.obfs,
            OBFSParam: row.obfsparam,
            Host: row.host,
            TLS: row.tls,
            Transport: row.transport,
            Path: row.path,
            ServiceName: row.servicename,
            Insecure: row.insecure,
            SNI: row.sni,
            Remark: row.remark,
            ConnMode: row.connmode,
            CountryCode: row.countrycode,
            Region: row.region,
            Org: row.org,
            VPN: row.vpn
        });
    });
    
    return result;
}
