# Usa una imagen base de Node.js
FROM node:18-alpine

# Instala git en la imagen
RUN apk add --no-cache git

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Clona el repositorio desde GitHub (reemplaza la URL con la tuya)
RUN git clone https://github.com/apuntesnavarrete/impact_v23.git .

# Instala las dependencias de la aplicación
RUN npm install

# Expone el puerto que utiliza tu aplicación (ajústalo si es necesario)
EXPOSE 4000

# Comando para mantener el contenedor activo (puedes cambiarlo según necesites)
CMD ["tail", "-f", "/dev/null"]

##crear archivo .env
## crear archivo jwt.constan