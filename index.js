import { config } from "dotenv"
import { Client, GatewayIntentBits } from "discord.js"
import { google } from "googleapis"
import { schedule } from "node-cron"

config();

var latestVideoId = '';

const discordClient = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds
    ]
})

const youtubeClient = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
})


discordClient.login(process.env.DISCORD_TOKEN)

discordClient.on('ready', () => {
    console.log(`Bot online, logado como: ${discordClient.user.tag}`)
    checkNewVideos()
    schedule("* * 0 * * *", checkNewVideos)
})

async function checkNewVideos(){
    try{
        // const response = await 
        youtubeClient.search.list ({
            channelId: process.env.DISCORD_ID_CHANNEL,
            order: 'date',
            part: 'snippet',
            type: 'video',
            maxResults: 1
        })
        .then(response => {

            const latestVideo = response.data.items[0]

            if (latestVideo) {
                if (latestVideo.id) {
                    if(latestVideo.id.videoId != latestVideoId){
                        latestVideoId = latestVideo?.id?.videoId
                        const videoUrl = `https://www.youtube.com/watch?v=${latestVideoId}`
                        const message = "Mais um vídeo insano, ta no ar!"
                        const channel = discordClient.channels.cache.get('1267335396241702942')
                        channel.send(message + videoUrl)
                    }

                }
            }

        })
        
    } catch (error) {
        console.log("Vish!, deu ruim em alguma coisa aqui.. :(")
        console.log(error)
    }
}