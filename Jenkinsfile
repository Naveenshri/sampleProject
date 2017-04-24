node {
    stage('Build') {
      git url: 'git@github.com:Naveenshri/sampleProject.git'
      sh "npm install"
      sh "ng build"
    }
  
    stage('Unit Test') {
      sh "ng test --cc"
    }
  
    stage('Code Analysis') {
      sh "ng lint"
    }
}
