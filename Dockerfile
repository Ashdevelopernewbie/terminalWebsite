FROM nginx:1.25-bookworm

RUN usermod -u 1000 www-data

WORKDIR /var/www/html/public

COPY . .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80