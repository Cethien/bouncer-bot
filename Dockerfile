FROM node:lts-slim as builder
WORKDIR /app
COPY . .
RUN corepack enable\
    && pnpm install \
    && pnpm run build

FROM node:lts-slim as runner
WORKDIR /app
COPY --from=builder /app/dist/ dist/
COPY package.json pnpm-lock.yaml ./
ENV NODE_ENV=production
RUN corepack enable\
    && pnpm install --production

CMD [ "pnpm","run","start" ]