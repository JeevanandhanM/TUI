pipeline {
  agent any
 
  tools {
    nodejs 'node18'   // matches the NodeJS tool name you added
  }
 
  options {
    timestamps()
    ansiColor('xterm')
  }
 
  parameters {
    choice(name: 'ENV', choices: ['staging', 'prod'], description: 'Target environment for Playwright')
  }
 
  environment {
    CI = 'true'
    // ENV is provided by the parameter above; defaults to first choice (staging) unless you change it in the build
  }
 
  stages {
    stage('Checkout') {
      steps {
        // PUBLIC GitHub: credentials not required
        // PRIVATE GitHub: add 'credentialsId: "github-pat"'
        checkout([$class: 'GitSCM',
          branches: [[name: '*/main']],
          userRemoteConfigs: [[
            url: 'https://github.com/<your-username>/TUI_assignment.git'
            // , credentialsId: 'github-pat'
          ]]
        ])
      }
    }
 
    stage('Install dependencies') {
      steps {
        bat 'npm ci'
      }
    }
 
    stage('Install Playwright browsers') {
      steps {
        // --with-deps is for Linux; omit on Windows
        bat 'npx playwright install'
      }
    }
 
    stage('Run Playwright tests') {
      steps {
        // Pass ENV through to your playwright.config.ts
        bat 'set ENV=%ENV% && npx playwright test'
      }
    }
 
    stage('Publish report') {
      steps {
        // Archive raw report files
        archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
 
        // Show HTML report tab in Jenkins
        publishHTML(target: [
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'playwright-report',
          reportFiles: 'index.html',
          reportName: 'Playwright Report'
        ])
      }
    }
  }
 
  post {
    always {
      // If you enabled JUnit in your Playwright reporter, publish it:
      // junit 'results-*.xml'
      cleanWs()
    }
  }
}