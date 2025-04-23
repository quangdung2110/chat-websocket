FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm ci --omit=dev
COPY . .

FROM node:22-alpine

WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=build /app .
RUN chown -R appuser:appgroup /app
USER appuser:appgroup

CMD [ "npm", "start" ]
