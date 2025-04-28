#!/bin/bash

# Update and upgrade system
sudo apt update
sudo apt upgrade -y

# Install essential packages
sudo apt install -y python3 python3-pip nodejs npm git docker.io

# Install PM2 globally for managing Node.js apps
sudo npm install pm2 -g

# Create a working directory
mkdir -p /home/sentinel
cd /home/sentinel

# Clone Sentinel AI repository
# IMPORTANT: Replace this with your actual repo URL
git clone https://github.com/yourgithubuser/SentinelAI.git
cd SentinelAI

# Install Python dependencies if requirements.txt exists
if [ -f "requirements.txt" ]; then
    pip3 install -r requirements.txt
fi

# Install Node dependencies if package.json exists
if [ -f "package.json" ]; then
    npm install
fi

# Optional: Start the application automatically
# Uncomment the line you need:
# pm2 start app.js  # For Node.js app
# python3 app.py    # For Python app

# Optional: Save PM2 process list and configure startup
# pm2 save
# pm2 startup
