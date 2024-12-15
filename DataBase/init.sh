#!/bin/bash

# Check if the initialization is already complete
if [ ! -f /tmp/setup_complete ]; then
    echo "Waiting for Oracle DB to start..."
    sleep 20

    echo "Connecting to Oracle as SYSDBA and setting up the environment..."

    # Running SQL commands to create and configure the user
    sqlplus sys/oracle@localhost:1521/XE as sysdba <<EOF
    CREATE user DOSI identified by DOSI;
    grant all privileges to DOSI;
    alter user SYS identified by dosi;
    alter user system identified by dosi;
    grant all privileges to SYS;
    EXIT;
EOF
    # Mark setup as complete
    echo "Setup complete!" > /tmp/setup_complete
else
    echo "Database already initialized, skipping setup."
fi
