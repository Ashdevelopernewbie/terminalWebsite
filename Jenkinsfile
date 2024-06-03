/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'golang:1.22.3-alpine3.20' } }
    stages {
        stage('build') {
            steps {
                sh 'go version'
            }
        }
    }
}