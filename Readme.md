List of commands to get this project up and running localy:


Minikube start

docker build -t web-app .

kubectl apply -f volume.yaml

kubectl apply -f pv-claim.yaml

kubectl apply -f deployment.yaml

 kubectl apply -f service.yaml

 minikube service webapp-service --url
