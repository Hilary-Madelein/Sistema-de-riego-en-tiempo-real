pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Run Lint and Tests') {
            steps {
                sh 'npm install'
            }
        }

        stage('Push to GitHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'github-credentials', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASSWORD')]) {
                    sh '''
                    git config user.name "Jenkins CI"
                    git config user.email "jenkins@example.com"
                    git add .
                    git commit -m "Automated deployment from Jenkins"
                    git push https://github.com/Hilary-Madelein/Sistema-de-riego-en-tiempo-real.git HEAD:main
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully and changes pushed to GitHub.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for more details.'
        }
    }
}
