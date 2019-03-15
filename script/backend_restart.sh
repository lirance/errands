#!/usr/bin/env bash
ssh -i '~/.ssh/ErrandsPair.pem' ec2-user@18.191.103.130 "
pwd;
mv errands/errands-*.jar errands/errands.jar.bak
pwd;
cp upload/errands-*.jar errands/;
pwd;
cd errands/
pwd;
./restartBackend.sh
exit;"
echo -e "restart: \033[32;49;1m [DONE] \033[39;49;0m"