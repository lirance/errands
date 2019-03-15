#!/usr/bin/env bash
ssh -i '~/.ssh/ErrandsPair.pem' ec2-user@18.191.103.130 "
pwd;
rm -rf errands/angularbak
mv errands/angular errands/angularbak;
pwd;
cp -rf upload/static/ errands/angular;
chmod 777 errands/angular
chmod 777 errands/angular/*
pwd;
sudo nginx -s reload;
sudo service nginx restart;
exit;"
echo -e "restart: \033[32;49;1m [DONE] \033[39;49;0m"
