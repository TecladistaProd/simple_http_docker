FROM nginx:latest
COPY ./html /usr/share/nginx/html
EXPOSE 80

LABEL Author="TecladistaProd"

