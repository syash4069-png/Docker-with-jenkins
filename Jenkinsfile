pipeline {
    agent any

    environment {
        IMAGE_NAME = "docker-node-app"
        CONTAINER_NAME = "docker-node-container"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/syash4069-png/Docker-with-jenkins.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
                   docker stop $CONTAINER_NAME
                fi

                if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
                    docker rm $CONTAINER_NAME
                fi
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "App running at http://13.204.255.68:3000"
        }
    }
}
