const Discord = require('discord.js');
const client = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapters = new FileSync('database.json');
const db = low(adapters);

let prefix = "/"
 
db.defaults({ histoires : [], xp: []}).write()

const fs = require('fs');

client.login("NTc1NDQzMDIyODE3MjYzNjE3.XNIBMg.oaLbe_9_UrNSAuN1_2StMRBX67o");
