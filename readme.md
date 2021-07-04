# DB commands
truncate table users cascade //clear DB

# Install yarn to run server
$ npm install --global yarn

# Start server 
$ yarn  start

# Download source/ Git Clone the repo
https://github.com/Pound2000/IBearYou_BE.git

# docker-compose command

# docker-compose ps
# docker-compose stop <container name>

# Backup DB 

docker exec -t ibearyoudb pg_dumpall -c -U ibearyou > dump_ibearyou.sql

cat dump_ibearyou.sql | docker exec -i ibearyoudb psql -U ibearyou





