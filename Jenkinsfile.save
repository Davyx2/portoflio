/*pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}*/
node{
  def app
  stage('Clone') {
      checkout scm
  }
  stage('Build image') {
    app=docker.build("portofolio")
  }
  /*docker.withRegistry('https://docker.io', 'credentials-id') {
        def customImage = docker.build("my-image:${env.BUILD_ID}")
         Push the container to the custom Registry 
        customImage.push()
    }*/
  stage('Run image') {
      docker.image("portofolio").withRun('-p 4002:3000') {
      sh 'docker ps'
 }
  }
