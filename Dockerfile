# KROK 1: Budowanie aplikacji Vite
FROM node:20-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# KROK 2: Serwowanie statycznych plików za pomocą Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
# Kopiowanie niestandardowej konfiguracji Nginx dla SPA (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Kopiowanie gotowego buildu
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
