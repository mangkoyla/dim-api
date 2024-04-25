#!/bin/bash

# Nama file backup yang ditentukan
backup_file="backup.sql"

# Eksekusi pg_dump
pg_dump --host=floppy.db.elephantsql.com --port=5432 --username=sbabyxcc --password --dbname=sbabyxcc > "$backup_file"

# Mengonfirmasi pesan
echo "Backup database telah dibuat: $backup_file"

# Memindahkan file backup ke direktori result
mkdir result
mv "$backup_file" result/
