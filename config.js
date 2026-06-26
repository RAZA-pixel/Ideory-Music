

module.exports = {
  TOKEN: "25093e80f87966b2c661426aa31ed4d27cb4a1bab87eedb9398d1992d14a7698",
  language: "en",
  ownerID: ["1520091947061088468", ""], 
  mongodbUri : "mongodb+srv://root:root@cluster0.iyles.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
