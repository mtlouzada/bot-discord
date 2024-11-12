# 🤖 Bot Discord

Este é um bot para Discord que envia um alerta em um servidor especificado sempre que um novo vídeo é postado em um canal específico do YouTube de skate.

## Funcionalidades

- Conexão com um servidor Discord
- Monitoramento de canais do YouTube para novos vídeos
- Envio de notificações automáticas no servidor quando um novo vídeo é postado

## Pré-requisitos

- Node.js (versão 12 ou superior)
- Uma conta no Discord e acesso para configurar um bot no seu servidor
- Token da API do Discord e credenciais de uma API do YouTube para acessar os dados de vídeos

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
   ```
   cd seu-repositorio
   ```


### Instale as dependências

    ```
    npm install
    ```

### Crie um arquivo .env na raiz do projeto e adicione suas credenciais

    ```
    DISCORD_TOKEN=seu-token-do-discord
    YOUTUBE_API_KEY=sua-chave-de-api-do-youtube
    CHANNEL_ID=o-id-do-canal-youtube

    ```

### Inicie o bot

    ```
    node bot.js
    ```