pipeline {
    agent {
        docker {
            image 'quangdung2110/dind-test'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('show info') {
            steps {
                sh(script: "whoami", label: "show user")
                sh(script: "pwd", label: "show current working folder")
                sh(script: "ls -al", label: "show structure of folder")
            }
        }
        stage('test-docker-compose') {
            steps {
                sh(script: "docker compose version", label: "show info about docker compose")
            }
        }
    }
}