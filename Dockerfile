FROM node:16-alpine AS builder

WORKDIR /licitam

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install apexcharts
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build 

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app ./

USER nextjs

CMD ["npm", "run", "start"]