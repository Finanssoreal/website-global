# Etapa 1: Construcción
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY . .

RUN npm install -g pnpm && pnpm install
RUN pnpm run build

# Etapa 2: Servir con http-server
FROM node:20-alpine AS runner
WORKDIR /app

# Instalar pnpm en la etapa runner
RUN npm install -g pnpm

# Solo copiar lo necesario
COPY --from=builder /app/build ./build
RUN pnpm add http-server

EXPOSE 4173

CMD ["pnpm", "exec", "http-server", "build", "-p", "4173", "-c-1"]
