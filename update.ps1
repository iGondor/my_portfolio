docker kill $(docker ps -q) 
yarn build
docker build . -t jessesweb
docker run -d -p 8000:80 jessesweb
start http://localhost:8000