# Gunakan image Node resmi
FROM node:24

# Set working directory
WORKDIR /app

# Salin file project
COPY . .

# Install dependencies
RUN npm install

# Jalankan Vite dev server
CMD ["npm", "run", "dev"]
