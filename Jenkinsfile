node('porto'){
  def app
  stage('Clone') {
      checkout scm
  }

  stage('Build image') {
    app=docker.build("portofolio")
  }

  stage('Run image') {
      docker.image("portofolio").withRun('-p 4002:3000') {
      sh 'docker ps'
 } 
  }
}