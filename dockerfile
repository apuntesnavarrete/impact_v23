# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia todos los archivos de tu aplicación al contenedor
COPY . .

# Expone un puerto (puedes cambiarlo o quitarlo si no es necesario)
EXPOSE 4000
