FROM node:11.15.0

WORKDIR /Users/loyiso/Desktop/Node/pokemon-truelayer/src

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "src/index.js"]
