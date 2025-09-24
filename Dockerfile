ARG NODE_VERSION=alpine

FROM node:${NODE_VERSION} AS builder

WORKDIR /build

COPY . .

RUN corepack enable && pnpm i && pnpm build

FROM node:${NODE_VERSION}

WORKDIR /app
COPY --from=builder /build/pnpm-lock.yaml /app/
COPY --from=builder /build/package.json /app/
COPY --from=builder /build/node_modules /app/node_modules
COPY --from=builder /build/build /app/build

EXPOSE 3000

CMD ["node", "/app/build/index.js"]
