FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000

CMD npm run start