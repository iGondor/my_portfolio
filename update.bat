@ECHO OFF
FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i
yarn build
docker build . -t jessesweb
docker run -p 8000:80 jessesweb
start "" http://localhost:8000