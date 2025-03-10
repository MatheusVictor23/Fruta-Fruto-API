@echo off
echo 🚀 Iniciando setup do projeto Fruta&Fruto...

:: Instalando dependências
echo 📦 Instalando dependências...
npm install

:: Criando o banco de dados no PostgreSQL
echo 🐘 Criando banco de dados...
set DB_NAME=frutaefruto
set DB_USER=seu_usuario
set DB_PASS=sua_senha

psql -U %DB_USER% -d postgres -c "CREATE DATABASE %DB_NAME%;"

:: Rodando as migrations
echo 📜 Rodando migrations...
npm run migration:run

pause
