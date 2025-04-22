pipeline {
  agent any

  stages {
    stage('Run inside Docker') {
      steps {
        script {
          docker.image('quangdung2110/dind-test').inside('-u root -v /var/run/docker.sock:/var/run/docker.sock') {
            sh 'whoami'
            sh 'docker compose version'
          }
        }
      }
    }
  }
}