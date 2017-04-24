node {
    stage('Build') {
      git branch: 'master', credentialsId: '47b1f6ab-91eb-46ae-8256-709b2053546d', url: 'git@github.com:Naveenshri/sampleProject.git'
      withEnv(["PATH+NODE=${tool name: 'Nodejs1', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"])
      {
        sh "npm install"
        sh "ng build"
      }
    }
  
    stage('Unit Test') {
        withEnv(["PATH+NODE=${tool name: 'Nodejs1', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"])
        {
            sh "ng test --cc --watch false"
        }
    }
  
    stage('Code Analysis') {
        withEnv(["PATH+NODE=${tool name: 'Nodejs1', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"])
        {
            sh "ng lint"
        }
    }
    stage('Tomcat Deployment') {
            sh "cp -Rf dist/*.* /usr/local/tomcat9/webapps/ROOT/demo/"
    }
}
