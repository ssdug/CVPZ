FROM alexsuch/angular-cli AS restore
WORKDIR /src
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

FROM restore AS build
COPY . ./
RUN ng build


FROM nginx
COPY --from=build /src/dist /usr/share/nginx/html
COPY ./conf/nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
