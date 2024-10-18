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

var ignorePostsFrom = utils.loadAccountsFromFile('ignore_posts.db');
// Function to load accounts from a file into an array
function loadAccountsFromFile(fileName) {
  try {
    // Read file contents
    const fileContent = fs.readFileSync(path.join(__dirname, 'pbdb/'+fileName), 'utf-8');
    // Split by newline and filter out any empty lines
    const accountsArray = fileContent.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    return accountsArray;
  } catch (err) {
    console.error(Error reading file ${fileName}:, err);
    return [];
  }
}
function saveAccountsToFile(accounts, filename){ 
  try {
    fs.writeFileSync(path.join(__dirname, 'pbdb/'+filename), accounts.join('\n'));
    console.log(Saved ${filename}!)
  } catch (error) {
    console.error('Error saving :', error.message);
  }
}
//
  // ignore blacklist or ignore comments from list, like pixbee autocommenting
  //
  if ((theBlackList).includes(data.author) 
      || (ignoreCommentsFrom).includes(data.author)) {
    return;
  }
//
  // ignore blacklist or ignore comments from list, like pixbee autocommenting
  //
  if ((ignoreCommentsFrom).includes(VIDEO_ID)) {
    return;
  }