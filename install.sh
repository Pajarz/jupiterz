#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs -y
apt-get install libwebp -y
apt-get install mc -y
apt-get install ffmpeg -y
apt-get install wget -y
apt-get install tesseract -y
apt-get install nmap -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "DONE INSTALLING ALL PACKAGE REQUIRE, TINGGAL RUN npm start"
