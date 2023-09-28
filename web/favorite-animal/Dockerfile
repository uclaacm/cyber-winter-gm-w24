FROM node:20
ENV NODE_ENV production
RUN mkdir -p /opt/read-my-session/
WORKDIR /opt/read-my-session/
COPY files/ .
RUN npm install
# getting favorite animal flag
COPY getting-favorite-animal-flag.txt ./db/burturt
# stealing favorite animal flag
COPY stealing-favorite-animal-flag.txt /flag.txt
# tricking admin favorite animal flag
COPY tricking-admin-favorite-animal-flag.txt ./db/admin-temp
COPY tricking-admin-favorite-animal-username.txt /tmp/admin-username
RUN /usr/bin/mv db/admin-temp db/$(cat /tmp/admin-username) && rm /tmp/admin-username
EXPOSE 3000
CMD ["bin/www"]