

function makeConnections(){
    
    //****** make single Parent ******//
    
    //Chaos kids
    var primordials = [ErosElder,Tartarus,Gaia,Erebus,Nyx];

    for(let god of primordials){
        pathMaker(singleParent,Ymir,god,lineType.main,"child","Ymir"+god.greekName,0,20);
    }
   
    //Gaia kids
    pathMaker(singleParent,Gaia,Ourea,lineType.earth,"child","GaiaOurea",-40,25);
    pathMaker(singleParent,Gaia,Pontus,lineType.water,"child","GaiaPontus",40,25);
    pathMaker(singleParent,Gaia,Uranus,lineType.sky,"child","GaiaUra",0,25);
    
    //Nyx kids
    var NyxKids = [Moros,Keres,Thanatos,Hypnos,Oneriroi];
    
    for(let god of NyxKids){
        pathMaker(singleParent2,Nyx,god,lineType.underworld,"child","Nyx"+god.greekName,0,160);
    }
    
    var NyxKids2 = [Momus,Geras,Oizys,Nemesis,Philotes];
    
    for(let god of NyxKids2){
        pathMaker(singleParent2,Nyx,god,lineType.underworld,"child","Nyx"+god.greekName,0,350);
    }
    
    var NyxKids3 = [Apate,Eris,Hesperides];
    
    for(let god of NyxKids3){
        pathMaker(singleParent2,Nyx,god,lineType.underworld,"child","Nyx"+god.greekName,0,510);
    }
    
    //Uranus kids
    
    var UranusKids = [Giantes,Erinyes,Meliae];
    
    for(let god of UranusKids){
        pathMaker(singleParent3,Uranus,god,lineType.monster,"child","Uranus"+god.greekName,40,0);
    }
    zeusKids(Uranus,Aphrodite,lineType.personification,"UranusAphrodite",60,100,160,400);
    
    //Thamus kids
    pathMaker(singleParent,Thamus,Iris,lineType.water,"child","ThamusIris",0,20);
    pathMaker(singleParent,Thamus,Harpies,lineType.water,"child","ThamusHarpies",0,20);
    
    //Zeus kids
    var kidsZeusMortal = [Perseus,Heracles,Helen,Minos,Dionysus];
    for(let god of kidsZeusMortal){
        zeusKids(Zeus,god,lineType.mortal,"Zeus"+god.greekName,-10,240,-510,760);
    }
    
    //Poseidon kid
    pathMaker(singleParent,Poseidon,Theseus,lineType.water,"child","PoseidonTheseus",20,800);
    
    //Pasiphae
    pathMaker(singleParent,Pasiphae,Minotaur,lineType.monster,"child","AsteriaHecate",20,100);

    //****** make spouse connections ******//
    pathMaker(spousePath,Gaia,Tartarus,lineType.monster,"spouse","GaiaTar",-50,10);
    pathMaker(spousePath,Nyx,Erebus,lineType.underworld,"spouse","NyxEre",0,10);
    pathMaker(spousePath,Oceanus,Tethys,lineType.water,"spouse","OceTeth",0,20);
    pathMaker(spousePath,Hyperion,Theia,lineType.sky,"spouse","HypTheia",0,20);
    pathMaker(spousePath,Coeus,Phoebe,lineType.sky,"spouse","CoeusPhoebe",0,20);
    pathMaker(spousePath,Kronos,Rhea,lineType.main,"spouse","KroRhea",0,20);
    pathMaker(spousePath,Typhon,Echidna,lineType.monster,"spouse","TyphonEchidna",0,20);
    pathMaker(spousePath,Aether,Hemera,lineType.sky,"spouse","AetherHemera",0,20);
    pathMaker(spousePath,Pontus,Thalassa,lineType.water,"spouse","PontusThalassa",20,20);
    pathMaker(spousePath,Phorcys,Ceto,lineType.monster,"spouse","PhorcysCeto",0,20);
    pathMaker(spousePath,Crius,Eurybia,lineType.sky,"spouse","CriusEurybia",0,20);
    pathMaker(spousePath,Eos,Astraeus,lineType.sky,"spouse","EosAstraeus",0,20);
    pathMaker(spousePath,Asia,Iapetus,lineType.personification,"spouse","AsiaIapetus",0,regularCard.height-40);
    pathMaker(spousePath,Pleione,Atlas,lineType.sky,"spouse","PleioneAtlas",0,regularCard.height/2-45);
    pathMaker(spousePath,Epimetheus,Pandora,lineType.personification,"spouse","EpimetheusPandora",0,20);
    pathMaker(spousePath,Styx,Pallas,lineType.personification,"spouse","StyxPallas",0,20);
    pathMaker(spousePath,Perse,Helios,lineType.sky,"spouse","PerseHelios",0,30);
    pathMaker(spousePath,Nereus,Doris,lineType.water,"spouse","NereusDoris",0,20);
    pathMaker(spousePath,Poseidon,Amphitrite,lineType.water,"spouse","PoseidonAmphitrite",0,20);
    pathMaker(spousePath,Thetis,Peleus,lineType.mortal,"spouse","ThetisPeleus",0,20);
    pathMaker(spousePath,Aphrodite,Adonis,lineType.mortal,"spouse","AdonisAphrodite",20,20);
    pathMaker(spousePath,Eros,Psyche,lineType.mortal,"spouse","ErosPsyche",0,20);
    pathMaker(spousePath,Ariadne,Dionysus,lineType.earth,"spouse","AriadneDionysus",0,20);
    pathMaker(spousePath,Minos,Pasiphae,lineType.personification,"spouse","MinosPasiphae",0,20);
    
    incestSpouse(Gaia,Uranus,lineType.main,"GaiaUra2",-20,40,60,20);
    incestSpouse(Gaia,Pontus,lineType.water,"GaiaPontus",20,40,20,20);
    incestSpouse(Zeus,Themis,lineType.personification,"ZeusThemis",30,40,10,20);
    incestSpouse(Zeus,Mnemosyne,lineType.personification,"ZeusMnemosyne",20,60,70,20);
    incestSpouse(Zeus,Demeter,lineType.earth,"ZeusDemeter",-40,100,-(largeCard.width/2),0);
    incestSpouse(Zeus,Methis,lineType.water,"ZeusMethis",-30,120,-(smallCard.width/2),0);
    incestSpouse(Zeus,Eurynome,lineType.water,"ZeusEurynome",-20,220,-(smallCard.width/2),0);
    incestSpouse(Zeus,Hera,lineType.main,"ZeusHera",40,20,-(smallCard.width/2)-10,0);
    incestSpouse(Zeus,Maia,lineType.sky,"ZeusMaia",10,150,40,20);
    incestSpouse(Zeus,Leto,lineType.sky,"ZeusLeto",0,230,-(smallCard.width/2),0);
    incestSpouse(Perses,Asteria,lineType.sky,"Perses,Asteria",0,150,(smallCard.width/2)-20,20);
    incestSpouse(Hades,Persephone,lineType.underworld,"HadesPersephone",0,255,-(smallCard.width)-40,20);
    incestSpouse(Aphrodite,Ares,lineType.personification,"AresAphrodite",-20,20,-(smallCard.width),20);
    incestSpouse(Aphrodite,Hermes,lineType.personification,"AphroditeHermes",0,40,-(smallCard.width)+30,20);

    //****** make family connections ******//
    
    //Gaia and Tartarus Kids
    familyMaker(parentsChild,Gaia,Tartarus,Typhon,-(Gaia.x-Tartarus.x)/2,10,100,lineType.monster,"GaiaTartarusTyphon");
    
    familyMaker(parentsChild,Gaia,Tartarus,Echidna,-(Gaia.x-Tartarus.x)/2,10,100,lineType.monster,"GaiaTartarusEchidna");
    
    //Typhon and Echidna Kids
    var monsters = [Orthrus,Cerebus,Colchian,Chimera,Hydra,Sphinx];
    
    for (let monster of monsters){
       familyMaker(parentsChild,Typhon,Echidna,monster,-20,20,40,lineType.monster,"TyphonEchidna"+monster.greekName); 
    }

    //Gaia and Uranus kids
    var titans = [Rhea,Kronos,Crius,Theia,Hyperion,Tethys,Oceanus,Themis,Iapetus,Mnemosyne,Coeus,Phoebe];

    for(let god of titans){
        familyMaker(parentsChild,Gaia,Uranus,god,-50,20,400,lineType.main,"GaiaUranus"+god.greekName);
    }
    
    familyMaker(parentsChild2,Gaia,Uranus,Cyclops,-30,20,50,lineType.monster,"GaiaUranusCyclops");
    familyMaker(parentsChild2,Gaia,Uranus,Hecatoncheires,-30,20,50,lineType.monster,"GaiaUranusHecatonc");
    
    //Kronos and Rhea kids
    var olympians = [Zeus,Hera,Demeter,Poseidon,Hades,Hestia];

    for(let god of olympians){
        familyMaker(parentsChild,Kronos,Rhea,god,-30,20,380,lineType.main,"RheaKronos"+god.greekName);
    }
    
    //Erebus and Nyx Kids
    familyMaker(parentsChild,Erebus,Nyx,Aether,((Erebus.x+regularCard.width)-Nyx.x)/2-40,10,40,lineType.underworld,"NyxErebusAether");
    
    familyMaker(parentsChild,Erebus,Nyx,Hemera,((Erebus.x+regularCard.width)-Nyx.x)/2-40,10,40,lineType.underworld,"NyxErebusHemera");
    
    familyMaker(parentsChild,Erebus,Nyx,Charon,((Erebus.x+regularCard.width)-Nyx.x)/2+40,10,40,lineType.underworld,"NyxErebusCharon");
    
    //Aether and Hemera
    familyMaker(parentsChild,Aether,Hemera,Thalassa,((Aether.x+smallCard.width)-Hemera.x)/2,20,40,lineType.sky,"AetherHemeraThalassa");
    
    //Pontus and Gaia Kids
    var oceanKids1 = [Thamus,Phorcys,Ceto];
    for(let god of oceanKids1){
        familyMaker(parentsChild,Gaia,Pontus,god,20,20,20,lineType.water,"GaiaPontus"+god.greekName);
    }
    familyMaker(parentsChild,Gaia,Pontus,Eurybia,120,40,420,lineType.water,"GaiaPontusEurybia");
    familyMaker(parentsChild,Gaia,Pontus,Nereus,80,40,380,lineType.water,"GaiaPontusNereus");
    
    //Phorcys and Ceto
    var PhorcycsCetoKids = [Gorgons,Graeae,Scylla];
    for(let god of PhorcycsCetoKids){
        familyMaker(parentsChild,Phorcys,Ceto,god,-30,20,20,lineType.monster,"PhorcysCeto"+god.greekName);
    }
    
    //Oceanus and Tethys Kids
    var oceanids = [Doris,Tyche,Perse];
    for(let god of oceanids){
        familyMaker(parentsChild,Oceanus,Tethys,god,-20,20,120,lineType.water,"OceanusTethys"+god.greekName);
    }
    familyMaker(parentsChild,Oceanus,Tethys,Eurynome,-40,140,250,lineType.water,"OceanusTethysEurynome");
    familyMaker(parentsChild,Oceanus,Tethys,Styx,20,140,160,lineType.water,"OceanusTethysStyx");
    familyMaker(parentsChild,Oceanus,Tethys,Methis,0,140,200,lineType.water,"OceanusTethysMethis");
    familyMaker(parentsChild3,Oceanus,Tethys,Pleione,40,140,140,lineType.water,"OceanusTethysPleione");
    
    familyMaker6lines(Oceanus,Tethys,Asia,-20,20,120,100,120,-220,20,lineType.water,"OceanusTethysAsia")
    
    //Hyperion and Theia kids
    var skyKids = [Helios,Selene,Eos];
    for(let god of skyKids){
        familyMaker(parentsChild,Hyperion,Theia,god,-20,20,30,lineType.sky,"HyperionTheia"+god.greekName);
    }
    
    //Crius and Eurybia kids
    familyMaker(parentsChild,Crius,Eurybia,Astraeus,120,20,20,lineType.sky,"CriusEurybiaAstraeus");
    familyMaker(parentsChild,Crius,Eurybia,Pallas,120,20,20,lineType.sky,"CriusEurybiaPallas");
    familyMaker6lines(Crius,Eurybia,Perses,120,20,20,100,20,20,20,lineType.sky,"CriusEurybiaPerses")
    
    //Eos and Astraeus kids
    familyMaker(parentsChild,Eos,Astraeus,Anemoi,-20,20,20,lineType.sky,"EosAstraeusAnemoi");
    familyMaker(parentsChild,Eos,Astraeus,Astra,-20,20,20,lineType.sky,"EosAstraeusAstra");
    
    //Asia and Iapetus kids
    var asiaIapetus = [Atlas,Prometheus,Epimetheus];
    for(let god of asiaIapetus){
        familyMaker(parentsChild,Asia,Iapetus,god,-20,20,30,lineType.personification,"AsiaIapetus"+god.greekName);
    }
    
    //Coeus and Phoebe kids
    familyMaker(parentsChild,Coeus,Phoebe,Leto,-20,20,500,lineType.sky,"CoeusPhoebeLeto");
    familyMaker(parentsChild,Coeus,Phoebe,Asteria,-20,20,500,lineType.sky,"CoeusPhoebeAsteria");
    
    //Pleione and Atlas kid
    familyMaker(parentsChild,Pleione,Atlas,Maia,-20,20,80,lineType.sky,"PleioneAtlasMaia");
    
    //Styx and Pallas kids
    var styxPallas = [Kratos,Nike,Zelus,Bia];
    for(let god of styxPallas){
        familyMaker(parentsChild2,Pallas,Styx,god,smallCard.width-10,20,30,lineType.personification,"StyxPallas"+god.greekName);
    }
    
    //Perse and Helio kids
    familyMaker(parentsChild,Perse,Helios,Pasiphae,100,30,1200,lineType.sky,"PerseHeliosPasiphae");
    familyMaker(parentsChild,Perse,Helios,Circe,100,30,1200,lineType.sky,"PerseHeliosCirce");
    
    //Nereus and Doris kid
    familyMaker(parentsChild,Nereus,Doris,Amphitrite,20,20,100,lineType.water,"NereusDorisAmphitrite");
    familyMaker(parentsChild,Nereus,Doris,Thetis,20,20,100,lineType.water,"NereusDorisThetis");
    
    //Amphitrite and Poseidon kid
    familyMaker(parentsChild,Amphitrite,Poseidon,Triton,((Amphitrite.x+regularCard.width)-Poseidon.x)/2,20,40,lineType.water,"AmphitritePoseidonTriton");
    
    //Thetis and Peleus kid
    familyMaker(parentsChild,Thetis,Peleus,Achilles,((Thetis.x+smallCard.width)-Peleus.x)/2,20,100,lineType.mortal,"ThetisPeleusAchilles");
    
    //Eurynome and Zeus
    familyMaker(parentsChild,Eurynome,Zeus,Charities,80,10,320,lineType.water,"EurynomeZeusCharities");
    
    //Methis and Zeus
    familyMaker(parentsChild,Methis,Zeus,Athena,210,30,60,lineType.water,"MetisZeusAthena");
    
    //Zeus and Hera kids
    var zeusHera = [Hebe,Hephaestus,Ares];
    for(let god of zeusHera){
        familyMaker(parentsChild,Zeus,Hera,god,20,20,250,lineType.main,"ZeusHera"+god.greekName);
    }
    
    //Zeus and Themis kids
    var zeusThemis = [Dike,Eunomia,Eirene,Moirai];
    for(let god of zeusThemis){
        familyMaker(parentsChild,Zeus,Themis,god,410,40,600,lineType.personification,"ZeusThemis"+god.greekName);
    }
    
    //Zeus and Mnemosyne 
    familyMaker(parentsChild,Mnemosyne,Zeus,muses,largeCard.width*6+70,60,500,lineType.personification,"MnemosyneZeus9Muses");
    
    //Zeus and Maia 
    familyMaker(parentsChild,Maia,Zeus,Hermes,largeCard.width*5,150,60,lineType.sky,"MaiaZeusHermes");
    
    //Zeus and Leto 
    familyMaker(parentsChild,Leto,Zeus,Apollo,-30,20,60,lineType.sky,"LetoZeusApollo");
    familyMaker(parentsChild,Leto,Zeus,Artemis,-30,20,60,lineType.sky,"LetoZeusArtemis");
    
    //Zeus and Demeter 
    familyMaker(parentsChild,Zeus,Demeter,Persephone,90,100,60,lineType.earth,"DemeterZeusPersephone");
    
    //Ares and Aphrodite 
    familyMaker(parentsChild,Ares,Aphrodite,Eros,20,20,50,lineType.personification,"AresAphroditeEros");
    
    //Aphrodite and Hermes 
    familyMaker(parentsChild,Aphrodite,Hermes,Hermaphrodites,0,40,70,lineType.personification,"AphroditeHermesHermaphrodites");
    
    //Minos and Pasiphae
    familyMaker(parentsChild,Minos,Pasiphae,Ariadne,0,20,40,lineType.mortal,"MinosPasiphaeAriadne");
    
    //Hecate and Perses
    familyMaker(parentsChild,Perses,Asteria,Hecate,0,20,320,lineType.personification,"PersesAsteriaHecate");
}


//************ Make all captions ************//

function createCaptions(){
    caption("The Horai (The Seasons)",Eunomia.x,level9-50);
    caption("Zeus's children by mortal women",Perseus.x+regularCard.width,level10-40);
    caption("by Alcmene",Heracles.x+regularCard.width/2+5,level10-10);
    caption("by Aethra",Theseus.x+regularCard.width/2+5,level10-10);
    caption("by Danae",Perseus.x+regularCard.width/2+5,level10-10);
    caption("by Leda",Helen.x+regularCard.width/2+5,level10-10);
    caption("by Europa",Minos.x+regularCard.width/2+5,level10-10);
    caption("Primorial Gods",Tartarus.x,level2-50);
    caption("The Titans",Crius.x,level5-120);
    caption("The Olympians",Zeus.x,level7-75);
}