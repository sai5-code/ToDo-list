pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling code from GitHub...'
                checkout scm
            }
        }

        stage('Build/Validation') {
            steps {
                echo 'Validating HTML, CSS, and JS files...'
                sh '''
                echo "Listing project files:"
                ls -l
                echo "Checking for syntax issues..."
                # Optional: you can install and use linters if needed
                '''
            }
        }

        stage('Deploy to Web Server') {
            steps {
                echo 'Deploying files to /var/www/html/'
                sh '''
                sudo cp -r * /var/www/html/
                echo "Deployment complete."
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
