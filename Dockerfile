FROM node:6.6.0
MAINTAINER Brooks Patton
CMD /bin/bash
ENV DATABASE_URL "mongo_demo/tododb"
EXPOSE 3000
VOLUME /data
WORKDIR /data
