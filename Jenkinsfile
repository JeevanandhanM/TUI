pipeline {
    agent any
 
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/JeevanandhanM/TUI.git'
            }
        }
 
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
 
        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright install --with-deps'
                bat 'npx playwright test'
            }
        }
 
        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report'
                ])
            }
        }
    }
}