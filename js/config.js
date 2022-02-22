/*    _           _    _                     _ 
	 | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
	version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"https://community.hexane.co/uploads/default/original/1X/ac1dbee9bde71d234ed45a289f88ab1f050e1e2d.webp",
	"https://c4.wallpaperflare.com/wallpaper/426/889/295/half-life-born-half-life-2-wallpaper-preview.jpg",
	"https://c4.wallpaperflare.com/wallpaper/219/105/303/video-game-half-life-alyx-alyx-vance-half-life-hd-wallpaper-preview.jpg",
	"https://c4.wallpaperflare.com/wallpaper/922/547/672/video-games-half-life-2-red-eyes-wallpaper-preview.jpg",
	"https://wallup.net/wp-content/uploads/2016/05/27/299063-Half-Life_2-Combine.jpg",
	"http://images5.fanpop.com/image/photos/29700000/Pick-Up-That-Can-half-life-29797677-1680-1050.jpg",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8423fe15-7e24-44e4-b1ea-4e9cf3581e8b/d7u3ma9-7c3bfb45-36c3-4a71-8a53-2e30a8af3dc4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0MjNmZTE1LTdlMjQtNDRlNC1iMWVhLTRlOWNmMzU4MWU4YlwvZDd1M21hOS03YzNiZmI0NS0zNmMzLTRhNzEtOGE1My0yZTMwYThhZjNkYzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7cIeeTebCqm1iG4j_5dI3KVATiSQxfOGrYFC3-5t5Bo"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ youtube: "StJWojxjlCw", name: "Bieautiful Creature (Trailer)" },
	{ youtube: "fmNzaPkIAg4", name: "Half-Life 2 — Lab Practicum " }
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Vous pouvez rejoindre le serveur : discord.link/hl2",
	"Nous vous remercions de rejoindre le serveur!",
	"Vous saviez que quand j'écris ces messages je me troue la tete pour trouver des idée, et le je viens d'en trouver une ^^",
	"Si vous voyez un Sectorial dans le coin, un conseil, evitez le! Je dit ça pour votre vie hien!",
	"Pour avoir la collection, allez sur le discord , dans lien importants, ou en jeu , faies /collection",
	"Les citoyens on le droit de courir qu'en exteme urgence",
	"Les CWU sont la pour donner du travail!",
	"Ne vas pas commencer a déhoberire a un PC.",
	"Il est 17:21 quand j'écris ce message."
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;