echo "🚀 Iniciando setup do projeto Fruta&Fruto..."

# Instalando dependências
echo "📦 Instalando dependências..."
npm install

# Criando o banco de dados no PostgreSQL
echo "🐘 Criando banco de dados (caso não exista)..."
DB_NAME="frutaefruto"
DB_USER="seu_usuario"
DB_PASS="sua_senha"

psql -U "$DB_USER" -c "CREATE DATABASE $DB_NAME;" 2>/dev/null || echo "📌 Banco já existe!"

# Rodando as migrations
echo "📜 Rodando migrations..."
npm run migration:run
