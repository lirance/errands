#!/usr/bin/env bash
cd $(dirname $0)
cd ../
mvn clean package
echo -e "build: \033[32;49;1m [DONE] \033[39;49;0m"

scp -r -i '~/.ssh/ErrandsPair.pem' ./target/errands-*.jar  ec2-user@18.191.103.130:~/upload/
echo -e "upload: \033[32;49;1m [DONE] \033[39;49;0m"