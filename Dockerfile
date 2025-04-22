FROM jenkins/inbound-agent:latest-jdk17

USER root

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

RUN node -v && npm -v

USER jenkins

EXPOSE 3000