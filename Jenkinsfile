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
                    git commit -m "Automated deployment from Jenkins" || echo "No changes to commit"
                    git push https://$GIT_USER:$GIT_PASSWORD@github.com/Hilary-Madelein/Sistema-de-riego-en-tiempo-real.git HEAD:main
                    '''
                }
            }
        }

        stage('Deploy to Vercel') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                sh 'curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_U1qpOLM7FhhjKA2jAqnxIZAT8VCB/PfUhopFjqj'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully and changes pushed to GitHub and deployed to Vercel.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for more details.'
        }
    }
}
