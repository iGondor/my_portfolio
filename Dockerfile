# stage: 2 — the production environment
FROM nginx:alpine AS jessesweb
COPY build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]