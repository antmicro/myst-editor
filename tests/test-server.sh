#!/usr/bin/env bash
#
# This scripts sets up apache proxy which will serve the
# contents in the build directory (created by npm run build)

set -e

if [ -z "$CI" ]; then 
    echo "This is supposed to run only in CI";
    exit 1;
fi

# Install Apache2
apt-get update
apt-get install -y apache2

# Set up the Apache configuration to serve the /ci/dist directory at port 4173
tee /etc/apache2/sites-available/000-default.conf <<EOF
<VirtualHost *:4173>
    DocumentRoot /ci/dist

    <Directory /ci/dist>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>
</VirtualHost>
EOF

tee /etc/apache2/ports.conf <<EOF
Listen 4173
EOF

# Restart Apache to apply the changes
service apache2 restart

echo "Apache proxy server is running and serving the ./dist directory on port 4173"

cd bin
npm ci
YPERSISTENCE=docs PORT=4455 node server.js&