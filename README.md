# 📺 Discord YouTube Bot

Um bot para Discord que envia automaticamente uma mensagem no servidor sempre que um novo vídeo é publicado em um canal do YouTube.
Ele utiliza a API do YouTube e é executado de forma agendada com node-cron.

## ✨ Funcionalidades

Monitora um canal do YouTube usando a YouTube Data API v3.

Envia uma notificação automática no Discord com o link do vídeo mais recente.

Executa a checagem de forma agendada com cron jobs.

## 📦 Tecnologias utilizadas

Node.js

Discord.js

Google APIs (YouTube)

node-cron

dotenv

## ⚙️ Pré-requisitos

Node.js instalado (>= 16.x).

Uma conta no Discord Developer Portal
 para criar e configurar o bot.

Uma chave de API da YouTube Data API v3
.

🚀 Como rodar o projeto

1. Clone este repositório:
   
``` bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

3. Instale as dependências:
   
``` bash
npm install
```

3. Crie um arquivo .env na raiz do projeto e configure as variáveis:
   
``` env
DISCORD_TOKEN=seu_token_discord
YOUTUBE_API_KEY=sua_api_key_youtube
DISCORD_ID_CHANNEL=id_do_canal_youtube
```

4. Execute o bot:
 
``` bash
node index.js
```
