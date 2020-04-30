node('porto'){
  def app
  stage('Clone') {
      checkout scm
  }
 /* docker.withRegistry('https://docker.io', 'dav97') {
    // build image docker hub
    def portfolioImage = docker.build("my-image:${env.BUILD_ID}")
    customImage.push()
  }*/

  stage('Build image') {
    app=docker.build("portofolio")
  }

  stage('Run image') {
      docker.image("portofolio").withRun('-p 4002:3000') {
      sh 'docker ps'
  } 

  }
}