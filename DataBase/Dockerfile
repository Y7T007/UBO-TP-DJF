FROM oracleinanutshell/oracle-xe-11g

ENV ORACLE_ALLOW_REMOTE=true

COPY ./SD-SPI /docker-entrypoint-initdb.d/SD-SPI/

COPY ./init.sh /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/init.sh

EXPOSE 1521 8080

CMD ["/bin/sh", "-c", "/usr/sbin/startup.sh && /docker-entrypoint-initdb.d/init.sh && tail -f /dev/null"]