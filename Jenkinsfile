pipeline {
    agent any

    options {
        ansiColor('xterm')       // Works after AnsiColor plugin installation
        timestamps()             // Optional: shows time in logs
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/JeevanandhanM/TUI.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run eslint'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo "Pipeline completed!"
        }
    }
}
