pipeline {
    agent any

    options {
        timestamps()   // This is valid here
    }

    stages {
        stage('Checkout') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    git branch: 'main', url: 'https://github.com/JeevanandhanM/TUI.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    sh 'npm install'
                }
            }
        }

        stage('Lint') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    sh 'npm run eslint'
                }
            }
        }

        stage('Run Tests') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed!"
        }
    }
}
