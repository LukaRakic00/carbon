# 1. Korak: koristi Node.js sliku
FROM oven/bun:1.1

# 2. Kreiraj radni direktorijum
WORKDIR /app

# 3. Kopiraj package.json i package-lock.json
COPY package.json bun.lock ./

# 4. Instaliraj zavisnosti
RUN bun install

# 5. Kopiraj ostatak koda
COPY . .

# 6. Pokreni server
EXPOSE 5000
CMD ["bun", "server.js"]