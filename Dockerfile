# Build myapp server Docker container
FROM coreos/apache
MAINTAINER sreeparam
COPY dist /var/www/
