pipeline {
    agent {
        label 'docker-agent-node'
    }
    environment {
        quangdung = 'hello'
        lede = 'conchongu'
        username = 'quangdung2110'
        docker_image = 'my-websocket-app'
    }
    stages {
        stage('show info') {
            steps {
                sh(script: "whoami", label: "show user")
                sh(script: "pwd", label: "show current working folder")
                sh(script: "ls -al", label: "show structure of folder")
            }
        }
        stage('install dependencies') {
            steps {
                sh(script: "npm install", label: "install dependencies")
            }
        }
        stage('run app') {
            steps {
                sh(script: "npm start", label: "run project")
            }
        }
    }
}