#!/bin/bash

sudo docker-compose -f ./docker-compose.ci.build.yml up
sudo docker-compose up -d --build
sudo docker-compose up