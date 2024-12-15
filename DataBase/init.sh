#!/bin/bash

# Save the starting directory
START_DIR=$(pwd)

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

    echo "Running custom SQL scripts from /docker-entrypoint-initdb.d/SD-SPI..."

    # Execute specific scripts in each folder
    if [ -f /docker-entrypoint-initdb.d/SD-SPI/01-CSCI-GLOB/csci_glob_installation.sql ]; then
        echo "Executing folder1_installation.sql..."

        # cd into the correct folder before running the script
        cd /docker-entrypoint-initdb.d/SD-SPI/01-CSCI-GLOB
        sqlplus DOSI/DOSI@localhost:1521/XE <<EOF
        @csci_glob_installation.sql
        COMMIT;
        EXIT;
EOF
    else
        echo "No folder1_installation.sql found in folder1"
    fi

    if [ -f /docker-entrypoint-initdb.d/SD-SPI/02-CSCI-ADM/csci_adm_installation.sql ]; then
        echo "Executing folder2_installation.sql..."

        # cd into the correct folder before running the script
        cd /docker-entrypoint-initdb.d/SD-SPI/02-CSCI-ADM
        sqlplus DOSI/DOSI@localhost:1521/XE <<EOF
        @csci_adm_installation.sql
        COMMIT;
        EXIT;
EOF
    else
        echo "No folder2_installation.sql found in folder2"
    fi

    echo "Initialization and custom scripts executed successfully."

    # Return to the original directory before marking setup as complete
    cd "$START_DIR"

    # Mark setup as complete
    echo "Setup complete!" > /tmp/setup_complete
else
    echo "Database already initialized, skipping setup."
fi
