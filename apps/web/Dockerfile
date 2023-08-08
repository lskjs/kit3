FROM lskjs/node:20.2.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app
COPY .release /app
# COPY package*.json pnpm-lock.yaml ./
# COPY ./ /app/
# RUN pnpm install --frozen-lockfile --prod

CMD npm start

# FROM node:20-alpine
# WORKDIR /app

# ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1
# ENV PORT 3000

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# COPY --chown=nextjs:nodejs .release/ ./

# USER nextjs

# EXPOSE 3000


# CMD ["node", "apps/web/server.js"]
