pipeline {
    agent any

    environment {
        // Variables de entorno globales para asegurar que Git se configure correctamente
        GIT_USER = credentials('github-credentials').username
        GIT_PASSWORD = credentials('github-credentials').password
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout del código desde el SCM
                checkout scm
            }
        }

        stage('Run Lint and Tests') {
            steps {
                sh '''
                echo "Instalando dependencias..."
                npm install
                '''
            }
        }

        stage('Push to GitHub') {
            steps {
                script {
                    // Validar y mostrar variables usadas en la URL de Git
                    echo "Usuario: ${GIT_USER}"
                    sh '''
                    git config user.name "Jenkins CI"
                    git config user.email "jenkins@example.com"
                    
                    echo "Comprobando cambios..."
                    git status

                    echo "Agregando cambios al commit..."
                    git add .
                    git commit -m "Automated deployment from Jenkins" || echo "No changes to commit"

                    echo "Pushing changes to GitHub..."
                    git push https://${GIT_USER}:${GIT_PASSWORD}@github.com/Hilary-Madelein/Sistema-de-riego-en-tiempo-real.git HEAD:main
                    '''
                }
            }
        }

        stage('Deploy to Vercel') {
            when {
                expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo "Desplegando en Vercel..."
                sh '''
                curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_U1qpOLM7FhhjKA2jAqnxIZAT8VCB/2vRL00vyw8
                '''
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
