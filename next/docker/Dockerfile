FROM node:18-alpine

WORKDIR /app

COPY ./docker/start.sh /service/start.sh
# Исправляем окончания строк в файле с CRLF (windows) на LF (linux), чтобы скрипт выполнялся корректно в оболочке bash
RUN dos2unix /service/start.sh

RUN chmod +x /service/start.sh

CMD ["/service/start.sh"]
