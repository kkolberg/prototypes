stage 'fetch'
    node {
        git credentialsId: 'e7469b5f-f18f-4380-804b-8b225ac72b35', url: 'git@github.com:kkolberg/prototypes.git'
        sh '''ls'''
        stash name: 'starter'
    }
stage 'build'
    node {
        unstash 'starter'
        dir('starter') {
            sh '''npm install'''
            sh '''npm run jenkins'''
        }
        stash 'starter'
        junit 'starter/testreports/*.xml'
    }
stage 'deploy'
    node {
        withCredentials([
            string(credentialsId: 'AWS_ACCESS_KEY_ID', variable: 'AWS_ACCESS_KEY_ID'), 
            string(credentialsId: 'AWS_SECRET_ACCESS_KEY', variable: 'AWS_SECRET_ACCESS_KEY')]) {
            unstash 'starter'
            dir('starter') {
                sh '''serverless deploy --stage dev'''
            }
        }
    }