FROM node:22-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

# copy dependency files first (important for caching)
COPY package.json package-lock.json ./

# use strict install (same as CI/CD systems)
RUN npm ci

# copy rest of code
COPY . .

# build app
RUN npm run build

EXPOSE 4000

CMD ["npm", "start", "--", "-p", "4000"]