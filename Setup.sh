#!/bin/bash

echo "🚀 Starting Sentinel AI Setup..."

# 1. Update & upgrade
sudo apt-get update && sudo apt-get upgrade -y

# 2. Install Node.js (LTS Version)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install Python 3.11+
sudo apt-get install -y software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa -y
sudo apt-get update
sudo apt-get install -y python3.11 python3.11-venv python3.11-dev

# 4. Install Git
sudo apt-get install -y git

# 5. (Optional) Install Docker
sudo apt-get install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker

# 6. Clone SentinelAI Repo
mkdir -p ~/SentinelAI
cd ~/SentinelAI
git clone https://github.com/YourGitHubUser/SentinelAI-Repo.git || echo "Repo already cloned."

# 7. Basic Firewall Setup
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 3000
sudo ufw allow 5000
sudo ufw --force enable

# 8. Install Fail2ban (optional - protect SSH from brute force)
sudo apt-get install -y fail2ban

echo "✅ Sentinel AI Setup Complete!"
