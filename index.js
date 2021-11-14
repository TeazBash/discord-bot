const Discord = require('discord.js');
const { userInfo } = require('os');
const client = new Discord.Client ();
const prefix = "/";

client.on("ready", () => {
    console.log("Le bot est en ligne !")
});

//Welcome Message
client.on("guildMemberAdd", member => {
    let embed = new Discord.RichEmbed ()
        .setDescription(" Bienvenue à toi"  + member.user +  "dans le serveur Roleplay !")
        .setFooter(" Nous somme maintenant  " + member.guild.memberCount)
        .setColor("0000FF")
        .setImage("https://cdn.discordapp.com/attachments/909260998102364272/909275826837659688/unknown.jpg")
        .setTimestamp()
        member.guild.channels.get('909233829179445319').sendMessage(embed)

});

//Custom Statuts
client.on("ready,", () => {
    function randomStatus() {
        let status = ["Allez vous abonner à R4 BAYROO ET Teaz sur Youtube"]
        let rstatus = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[rstatus], {type: "WATCHING", url: "https://twitch.tv/"});
    }; setinterval(randomStatus, 3000)
});

client.login(process.env.TOKEN)

//Commande Lancement de session
client.on("message", message =>  {
    if(message.content === prefix + "LS"){
        let embed = new Discord.RichEmbed ()
            .setDescription("Venez dans le vocal lancement de session " )
            .setColor ("FFFFFF")
            .setTimestamp()
            .setTitle("𝐒𝐄𝐑𝐕𝐈𝐂𝐄 !")
            .setFooter("Mexico's RolePlay")
            .setImage("https://cdn.discordapp.com/attachments/909260998102364272/909290175069302834/IMG_7946.png")
    message.channel.send(embed)  
    

    };
   
});


//Commande fin de session

client.on("message", message => {
    if(message.content === prefix + "FS"){
        let embed = new Discord.RichEmbed ()
        .setDescription("Fin de la session merci de votre participation !" )
                .setColor ("FFFFFF")
                .setTimestamp()
                .setTitle("𝐒𝐄𝐑𝐕𝐈𝐂𝐄 !")
                .setFooter("Mexico's RolePlay")
                .setImage("https://cdn.discordapp.com/attachments/909260998102364272/909293321732624414/IMG_7947.png")
        message.channel.send(embed)
        
    };
});

//Commande Prise de service

client.on("message", message => {
    if(message.content === prefix + "PDS"){
        let embed = new Discord.RichEmbed ()
        .setDescription("Tu as pris ton service !" )
                .setColor ("FFFFFF")
                .setTimestamp()
                .setTitle("𝐒𝐄𝐑𝐕𝐈𝐂𝐄 !")
                .setFooter("Mexico's RolePlay")
                .setImage("https://cdn.discordapp.com/attachments/909260998102364272/909296055303168010/IMG_7963.jpg")
        message.channel.send(embed)
        
    };
});    
        
//Commande Fin de service

client.on("message", message => {
    if(message.content === prefix + "FDS"){
        let embed = new Discord.RichEmbed ()
        .setDescription("Tu as finis ton service !" )
                .setColor ("FFFFFF")
                .setTimestamp()
                .setTitle("𝐒𝐄𝐑𝐕𝐈𝐂𝐄 !")
                .setFooter("Mexico's RolePlay")
                .setImage("https://cdn.discordapp.com/attachments/909260998102364272/909296259620282368/IMG_7964.jpg")
        message.channel.send(embed)
        
    };
});

//Commande Fin de service

client.on("message", message => {
    if(message.content === prefix + "fds"){
        let embed = new Discord.RichEmbed ()
        .setDescription("Tu as finis ton service !" )
                .setColor ("FFFFFF")
                .setTimestamp()
                .setTitle("𝐒𝐄𝐑𝐕𝐈𝐂𝐄 !")
                .setFooter("Mexico's RolePlay")
                .setImage("https://cdn.discordapp.com/attachments/909260998102364272/909296259620282368/IMG_7964.jpg")
        message.channel.send(embed)
    };
});

//Commande Prise de service

client.on("message", message => {
    if(message.content === prefix + "pds"){
        let embed = new Discord.RichEmbed ()
        .setDescription("Tu as pris ton service !" )
                .setColor ("FFFFFF")
                .setTimestamp()
                .setTitle("𝐒𝐄𝐑𝐕𝐈𝐂𝐄 !")
                .setFooter("Mexico's RolePlay")
                .setImage("https://cdn.discordapp.com/attachments/909260998102364272/909296055303168010/IMG_7963.jpg")
        message.channel.send(embed)
        
    };
});  
//Commande candidature accepté

client.on("message", message => {
    if(message.content === prefix + "valider"){
        let embed = new Discord.RichEmbed ()
        .setDescription("Bravo t'as candidature à été accepté, il ne te reste plus qu'à passer l'entretien orale !" )
                .setColor ("FFFFFF")
                .setTimestamp()
                .setTitle("𝐖𝐇𝐈𝐓𝐄𝐋𝐈𝐒𝐓 !")
                .setFooter("Mexico's RolePlay")
        message.channel.send(embed)
        
    };
});  
//Commande candidature refusée

client.on("message", message => {
    if(message.content === prefix + "refuser"){
        let embed = new Discord.RichEmbed ()
        .setDescription("Ta candidature à été refusée merci d'en refaire une en la développant et en améliorant certains points !" )
                .setColor ("FFFFFF")
                .setTimestamp()
                .setTitle("𝐖𝐇𝐈𝐓𝐄𝐋𝐈𝐒𝐓 !")
                .setFooter("Mexico's Roleplay")
        message.channel.send(embed)
        
    };
});  