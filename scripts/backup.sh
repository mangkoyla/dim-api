#!/bin/bash

# Nama file backup
backup_file="backup_$(date +%Y-%m-%d_%H-%M-%S).sql"

# Eksekusi pg_dump
pg_dump --host=floppy.db.elephantsql.com --port=5432 --username=sbabyxcc --password --dbname=sbabyxcc > "$backup_file"

# Mengonfirmasi pesan
echo "Backup database telah dibuat: $backup_file"
