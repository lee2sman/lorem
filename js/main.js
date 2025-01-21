$(document).ready(function(){
  artware = {
  "topic":["Pretzel", "Book Readin'","Field Recordings","Solitaire","Spreadsheet","Sexy #topic#","Advanced #topic#","Double #topic#","peanut butter","quilting","Napping","cutting hair","cuddling","straightening up the house","doing the laundry","prepping dinner","researching modern artists","defrosting the refridgerator", "gardening", "hunting mushrooms", "mulching", "planting fruit trees", "watering lawns/garden", "planting beans", "caring for household pets","feeding squirrels","playing with model trains","donating money","balancing the checkbook","throwing away junk mail","reading email","writing email","organizing a collection of game cartridges","playing the piano","synthesizer","theremin","learning about the Oregon Trail","math","party planning","graphic design","daydreaming","video player","board game","AI","chatbot","sketching","music performance","factory simulation","chess","museum collection management","croquet","cheerleading","curling","pole vaulting","baton twirling","church choir","hiking","banquet","drum machine","soduku","word game","comics","reading","opera","storytelling","drawing","improvisation","word-raising","didgeridoo","bicycle","architecture history","hobbyist","How-to articles","3d printing","sewing","slime mold computing","physical computing","model-making","programming games","assembly language","forth language","3d engineering","ASCII art","fantasy","science fiction","roguelike","broughlike","stamp collecting","weaving","spreadsheet","folk music","art history","anthropology","dirigibles","hot air balloon","yachting","infrequent cleaning","canoeing","snowshoeing","skateboard","jug band"],
  "group":["academy", "guild", "symposium", "school","university", "lab", "library", "association","community","informal group","gang","#group# gang","#group# #group#","company","people","developers","solo dev","group","club","forum","hacker collective","programmer","temporary autonomous zone","affiliate group","congress","collective","art collective","friends","class","dev"],
  "hardware":["Gameboy", "Playdate","Ink and Switch","Pebble watch","Digital pedometer","Old phone","Ancient Android device","Jailbroken iPhone","Homemade hardware device","Arduino", "Raspberry Pi", "XBox360", "Android", "Altair 8800", "Commodore 64", "hacked toaster", "Cyberdeck", "Apple Lisa", "computer running Windows 95","Thinkpad","Sega Jaguar","CCC Badge","Virtual Machine","TIS-100","Picotron Fantasy Hardware","Modular Synth","smartwatch","Flipper Zero"],
  "digitalArtifact":["game","application","program","software","simulator","sim","webgame","digital wizard","app","emulator","webapp", "tabletop RPG","encyclopedia", "open world game", "interactive game", "digitally-enhanced ebook", "hypertext fiction", "chose-your-own-adventure", "text adventure", "Flash-animated story", "interactive website", "Twine game","recipe book","ebook","DVD-Rom game from the 90s","wiki","interactive movie-game","productivity software","edutainment software","command line game","command line tool","debugger"],
  "name":["People","Friends","Up","Pico","Players","#name#dog","Micro#name#","#name##name#","North #name#", "West #name#", "Outer #name#", "New #name#", "Caspian", "Merovingian", "Californian", "Super #name#", "Viennese", "Indonesian", "Zepto", "Gibraltan", "Roman", "Ionian", "Zirconian", "Jungian", "Minnesotan", "Guatemalan", "Cantonese", "Irish", "Caspian", "Eurasian", "Pan-American", "Frankish", "Byzantine", "Macedonian","Alexandrian", "Persian", "Mongolian","Thai","Rural Upland","Zomian","Central American","Jamaican","Pennsylvanian","New Jerseyan","Laotian","Icelandic","Romanian","Central"],
  "from":["from","brought to you by","developed by","created by","a product of","the latest from","most recently of","produced by","the newest from","by"],
  "version":["2","3","4","10","X","2.0","2000","98","1.0","1.1","1.1.2","2","2.1","2.1.1","2.3","2.5","0.2","0.1","0.0.1","3.0","3.5","3.11","3.12","3.13","3.12.1","3.14","5","96","97","2001","alpha"],
  "package":["box","shrink-wrapped box","usb stick","card with download code","cartridge","floppy disc","disc","CD-Rom","catalog","card sleeve","cassette tape","series of punchcards","type-in program zine","zine","URL printed on a sheet of paper","QR code","large box","small box","sleeve attached to a programming book","magazine freebie"],
  "superlative":["exciting","exacting","revolting","sick","substantial","newest","user-friendly","beginner-friendly","low tech","advanced","demanding","satisfying","hyped","written-about","celebrated","novel","innovative","castigated","ridiculous","remarkable","conservative","clunky","hackable","original","reviewed","highly regarded","customizable","customized","true to the developer's vision"],
  "addition":["user guide","manual and #addition#","documentation","original French/English userguide","AOL Online disc","manual","quickstart guide","basic manual","check list","mail-in user registration form","zine","warranty form","coloring book","troll doll","walkthrough guide","support number","activation code and required dongle","collectible stickers","signed poster","beanie baby"],
  "origin":["#topic.capitalize# #version# is a #digitalArtifact# for #hardware#, #from# the #name# #group.capitalize#, packaged in a #package#. The most #superlative# version, it features a #addition# in the package."]
  }

  generate();
  }

);

function generate(){
  let para = $("#para");

  let artwares="";
  for (let i=0;i<8;i++){
    let grammar = tracery.createGrammar(artware);
    let s = grammar.flatten("#origin#");

    artwares+="<p>"+s+"</p>";
  }
  para.html(artwares)
  }



