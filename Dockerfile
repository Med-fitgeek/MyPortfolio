# ── Stage 1 : Build ──────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2 : Serve ──────────────────────────────────────
FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist/my-portfolio/browser ./dist

EXPOSE 3000

CMD ["serve", "dist", "-l", "3000", "--single"]