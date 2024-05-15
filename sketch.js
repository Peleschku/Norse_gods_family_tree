// Adele's To-Do
// switch out Gods
// Figure out which god connects to who
// place holders for the gods


//To-Do
//Build out all the gods
//Make the cursor turn to grabbing on drag
//Make cards prettier
//Make links make more sense
//Make modals more pretty
//Fill in all the data for the greek gods
//Add legend
//Add title screen
//Add god types to card color
//split spouse line in half
//make half spouse line highlight on hover

//Global Variables

let tree;

let margins = {top:50,
               bottom: 50,
               left: 50,
               right:50};

let width = window.innerWidth;
let height = window.innerHeight;

let regularCard = {width: 120,
                   height:180,
                   type:"regular"};

let largeCard = {width: 140,
                 height: 200,
                 type:"large"};

let smallCard = {width: 120,
                 height: 60,
                 type:"small"};

let cardWidth = 40;

let cardTopSpace = 150;

let betweenCards = 20;
let smallCardBetween = 15;

let cardAbove = largeCard.height+cardTopSpace;

let cardSpace = largeCard.width+betweenCards;
let cardSpaceSmall = smallCard.width+smallCardBetween;
let cardSpaceSmallHeight = smallCard.height+smallCardBetween;

let centers ={regular:width/2-regularCard.width/2,
              large:width/2-largeCard.width/2,
              small:width/2-smallCard.width/2,
             };

let familyTree = [];

let lineType = {main:"line-main",
                child:"line-child",
                aesir:"line-aesir",
                vanir:"line-vanir",
                jotunn:"line-jotunn",
                dwarf:"line-dwarf",
                horses:"line-horses"};

let godType = { aesir:"Æsir",
                vanir:"Vanir",
                jotunn:"Jötunn",
                dwarves:"Dwaf",
                horses:"Horse"};

let godMap = {};
let cardIDs = [];
let linkIDs = [];

let domain = {  Ymir:"Forefather of Jötnar",
                Thrudgelmir:"The Strength Yeller",
                Bergelmir:"The Mountain Yeller",
                Bolthorn:"some guy",
                Narfi:"The Father of Night",
                Dellingr:"The Shining One",
                Fornjotr:"Father of the Elements",
                Alvaldi:"The All-Powerful One",
                Farbauti:"The Father of Loki",
                Laufey:"The Mother of Loki",
                Aegir:"Ruler of the Sea",
                Ran:"Placeholder",
                Aurgelmir:"Also Ymir",
                Mimir:"Keeper of the Well",
                Nott:"The Night",
                Naglfari:"Nott's husband",
                Bestia:"The Mother of Odin",
                Borr:"The Father of Odin",
                Dellingr:"Husband of Nott",

             };

//target="_blank"

let description = { Ymir:"Forefather of Jötnar",
                    Thrudgelmir:"The Strength Yeller",
                    Bergelmir:"The Mountain Yeller",
                    Bolthorn:"some guy",
                    Narfi:"The Father of Night",
                    Dellingr:"The Shining One",
                    Fornjotr:"Father of the Elements",
                    Alvaldi:"The All-Powerful One",
                    Farbauti:"The Father of Loki",
                    Laufey:"The Mother of Loki",
                    Aegir:"Ruler of the Sea",
                    Ran:"Placeholder",
                    Aurgelmir:"Placeholder",
                    Mimir:"Placeholder",
                    Nott:"The Night",
                    Naglfari:"Nott's husband",
                    Bestia:"The Mother of Odin",
                    Borr:"The Father of Odin",
                    Dellingr:"Husband of Nott",
             };

//************make a shit ton of gods************//

//level 1 god

let Ymir = new God("Ymir",centers.small,margins.top,null,smallCard.width,smallCard.height,smallCard.type,godType.jotunn,domain.Ymir,description.Ymir);

let level2 = Ymir.y+smallCard.height+10;

//level 2 god

let Thrudgelmir = new God("Þrúðgelmir",centers.small,level2,null,smallCard.width,smallCard.height,smallCard.type,godType.jotunn,domain.Thrudgelmir,description.Thrudgelmir);

let level3 = Thrudgelmir.y+smallCard.height+10;

//level 3 god

let Bergelmir = new God("Bergelmir",centers.small,level3,null,smallCard.width,smallCard.height,smallCard.type,godType.jotunn,domain.Bergelmir,description.Bergelmir);

let level4 = Bergelmir.y+regularCard.height+10;

//level 4 gods

let Aurgelmir = new God("Aurgelmir", centers.regular,level4,"img/Erebus.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Aurgelmir,description.Aurgelmir);
let Narfi = new God("Narfi",Aurgelmir.x-(cardSpace*2),level4,"img/Erebus.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Narfi,description.Narfi);
let Bolthorn = new God("Bǫlþorn",Narfi.x-(cardSpace*3),level4,"img/Erebus.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Bolthorn,description.Bolthorn);
let Fornjotr = new God("Fornjótr",Aurgelmir.x+(cardSpace*3.5),level4,"img/Gaia.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Fornjotr,description.Fornjotr);
let Alvaldi = new God("Alvaldi", Fornjotr.x+(cardSpace*5),level4,"img/Erebus.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Alvaldi,description.Alvaldi);

let level5 = Fornjotr.y+(cardAbove);

//level 5 gods

let Farbauti = new God("Fárbauti",centers.regular,level5,"img/Tartarus.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Farbauti,description.Farbauti);
let Laufey = new God("Laufey",Farbauti.x+(cardSpace*2),level5,"img/Gaia.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Laufey,description.Laufey);
let Ran = new God('Rán',Laufey.x+(cardSpace*2),level5,"img/Eros_Elder.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Ran,description.Ran);
let Aegir = new God('Ægir',Ran.x+(cardSpace+10),level5,"img/Eros_Elder.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Aegir,description.Aegir);
let Nott = new God('Nótt',Farbauti.x-(cardSpace*2),level5,"img/Tartarus.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Nott,description.Nott);
let Naglfari = new God('Naglfari',Nott.x-(cardSpace),level5-cardSpace,null, smallCard.width,smallCard.height,smallCard.type,godType.jotunn,domain.Naglfari,description.Naglfari);
let Mimir = new God("Mímir",Nott.x-(cardSpace*4),level5,"img/Gaia.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Mimir,description.Mimir);
let Bestia = new God("Bestia",Mimir.x+(cardSpace),level5,"img/Tartarus.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Bestia,description.Bestia);
let Borr = new God("Borr",Bestia.x+(cardSpace),level5,"img/Gaia.png",regularCard.width,regularCard.height,regularCard.type,godType.jotunn,domain.Borr,description.Borr);
let Dellingr = new God("Dellingr", Nott.x+(cardSpace),level5-cardSpace,"img/Gaia.png",regularCard.width,regularCard.height,regularCard.godType,godType.jotunn,domain.Dellingr,description.Dellingr);



//push them into an array
//level 1 god
familyTree.push(Ymir);
//level 2 god
familyTree.push(Thrudgelmir);
//level 3 god
familyTree.push(Bergelmir);
//level 4 gods
familyTree.push(Fornjotr);
familyTree.push(Bolthorn);
familyTree.push(Narfi);
familyTree.push(Aurgelmir);
familyTree.push(Alvaldi);
//level 5 gods
familyTree.push(Laufey);
familyTree.push(Farbauti);
familyTree.push(Aegir);
familyTree.push(Ran);
familyTree.push(Mimir);
familyTree.push(Nott);
familyTree.push(Naglfari);
familyTree.push(Bestia);
familyTree.push(Borr);
familyTree.push(Dellingr);



//Zoom functions (NOT MINE, FROM: https://observablehq.com/@d3/zoom)
function zoomed({transform}) {
    tree.attr("transform", transform);
}

//function dragging() {
//    tree.attr("cursor", "grabbing");
//    console.log("dragging");
//}

function createTree(treeWidth,treeHeight){
    tree = d3.select("#familyTree").append("svg")
             .attr("viewBox", [0, 0, treeWidth, treeHeight*1.5])
             .attr("preserveAspectRatio", "xMidYMid meet")
             .attr("cursor", "grab")
             .call(d3.zoom() //zoom interaction
                .extent([[0, 0], [width, height]])
                .scaleExtent([0, 9])
                .on("zoom", zoomed))
             .append("g");
}

function redraw(){
       
    width = window.innerWidth;
    height = window.innerHeight;
    document.getElementById('familyTree').innerHTML = ''
    createTree(width,height);
    makeConnections();
    makeCards();
    
}

//************Functions to make paths************//

function pathMaker(pathType,source,target,name,union,id,marginX,down){
  let line = tree.append("path")
                  .attr("class",name+" "+union)
                  .attr("id",id)
                  .attr("d",pathType(source,target,marginX,down));
    linkIDs.push(id);
    if(pathType === singleParent){
        source.childLink.add(id);
        source.children.push(target.norseName);
        source.childRect.add(target.rectID);
    }
    if(pathType === singleParent2){
        source.childLink.add(id);
        source.children.push(target.norseName);
        source.childRect.add(target.rectID);
    }
    if(pathType === singleParent3){
        source.childLink.add(id);
        source.children.push(target.norseName);
        source.childRect.add(target.rectID);
    }
    if(pathType === spousePath){
        source.spouse.push(id);
        target.spouse.push(id);
    }
//    if(pathType === spouseIncest){
//        source.spouse.push(id);
//        target.spouse.push(id);
//    }
   return line;
}

function zeusKids(source,target,name,id,marginX,down,side,down2){
  let line = tree.append("path")
                  .attr("class",name+" child")
                  .attr("id",id)
                  .attr("d",singleParent4(source,target,marginX,down,side,down2));
    linkIDs.push(id);
    source.childLink.add(id);
    source.children.push(target.norseName);
    source.childRect.add(target.rectID);
   return line;
}

function incestSpouse(source,target,name,id,marginX,down1,side,down2){
  let line = tree.append("path")
                  .attr("class",name+" spouse")
                  .attr("id",id)
                  .attr("d",spouseIncest(source,target,marginX,down1,side,down2));
        linkIDs.push(id);
        source.spouse.push(id);
        target.spouse.push(id);
   return line;
}

function familyMaker(familyType,wife,husband,child,marginX,down1,down2,name,id){
  let line = tree.append("path")
                  .attr("class",name+" child")
                  .attr("id",id)
                  .attr("d",familyType(wife,husband,child,marginX,down1,down2));
    linkIDs.push(id);
    wife.childLink.add(id);
    wife.children.push(child.norseName);
    wife.childRect.add(child.rectID);
    husband.childLink.add(id);
    husband.children.push(child.norseName);
    husband.childRect.add(child.rectID);
    return line;
}

//Only 1 parent
function singleParent(source,target,marginX,down){
    return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down+
            "H"+(target.x+target.width/2)+
            "V"+target.y
}

function singleParent2(source,target,marginX,side){
    return  "M"+(source.x+marginX+source.width)+","+(source.y+source.height/2)+
            "h"+side+
            "V"+(target.y+target.height/2)+
            "H"+target.x
}

function singleParent3(source,target,marginX,down){
    return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height/2)+
            "V"+(target.y+target.height/2)+
            "H"+target.x
}

function singleParent4(source,target,marginX,down,side,down2){
    return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down+
            "h"+side+
            "v"+down2+
            "H"+(target.x+target.width/2)+
            "V"+target.y
}

//Spouse path function
function spousePath(source,target,marginX,down){
     return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down+
            "H"+(target.x+target.width/2)+
            "V"+(target.y+target.height)
}

//Spouse path function
function spouseIncest(source,target,marginX,down1,side,down2){
     return  "M"+(source.x+marginX+source.width/2)+","+(source.y+source.height)+
            "v"+down1+
            "H"+(target.x-side)+
            "V"+(target.y+target.height+down2)+
            "H"+(target.x+target.width/2)+
            "V"+(target.y+target.height)
}

//2 parents to top of child
function parentsChild(wife,husband,child,marginX,down1,down2){
    var lowerCard = (wife.y+wife.height > husband.y+husband.height) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "v"+down2+
            "H"+(child.x+child.width/2)+
            "V"+(child.y)
}

//bottom parents to side of child - down and side
function parentsChild2(wife,husband,child,marginX,down1,down2){
    var lowerCard = (wife.y+wife.height > husband.y+husband.height) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "V"+(child.y+child.height/2)+
            "H"+child.x
}

//bottom parents to side of child - down, side, vertical, side
function parentsChild3(wife,husband,child,marginX,down1,down2){
    var lowerCard = (wife.y+wife.height > husband.y+husband.height) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "v"+down2+
            "H"+(child.x-marginX)+
            "V"+(child.y+child.height/2)+
            "H"+(child.x)
}

//bottom parents to side of child - down, side, vertical, side
function parentsChild4(wife,husband,child,marginX,down1,down2,bar,side,up,side2){
    var lowerCard = (wife.y+wife.height > husband.y+husband.height) ? wife : husband;
    return "M"+(lowerCard.x+marginX)+","+(lowerCard.y+lowerCard.height+down1)+
            "v"+down2+
            "h"+bar+
            "v"+down2+
            "H"+(child.x-side)+
            "V"+(child.y-up)+
            "H"+(child.x-side2)+
            "V"+(child.y+child.height/2)+
            "H"+(child.x)
}

function familyMaker6lines(wife,husband,child,marginX,down1,down2,bar,side,up,side2,name,id){
  let line = tree.append("path")
                  .attr("class",name+" child")
                  .attr("id",id)
                  .attr("d",parentsChild4(wife,husband,child,marginX,down1,down2,bar,side,up,side2));
    linkIDs.push(id);
    wife.childLink.add(id);
    wife.children.push(child.norseName);
    wife.childRect.add(child.rectID);
    husband.childLink.add(id);
    husband.children.push(child.norseName);
    husband.childRect.add(child.rectID);
    return line;
}
//************ Initializing calls ************//

createTree(width,height);
makeConnections();
createCaptions();
makeCards();

//************ Make links between family members ************//

function makeConnections(){
    
    //Ymir's kid
    pathMaker(singleParent,Ymir,Thrudgelmir,lineType.main,"child","Ymir"+Thrudgelmir.norseName,0,20);

    //Thrugelmir's kid
    pathMaker(singleParent,Thrudgelmir,Bergelmir,lineType.main,"child","Thrudgelmir"+Bergelmir.norseName,0,20);

    //Bergelmir's kids
    var bergKids = [Fornjotr, Bolthorn, Narfi, Aurgelmir, Alvaldi];
    
    for(let god of bergKids){
        pathMaker(singleParent,Bergelmir,god,lineType.main,"child","Bergelmir"+god.norseName,0,20);
    };
    
    //Fornjotr's kids
    var fornKids = [Laufey, Aegir]
    
    for(let god of fornKids){
      pathMaker(singleParent,Fornjotr,god,lineType.main,"child","Fornjotr"+god.norseName,0,20);
    };

    //Bolthorn's kids
    var bolKids = [Mimir,Bestia]

    for(let god of bolKids){
        pathMaker(singleParent,Bolthorn,god,lineType.main,"child","Bǫlþorn"+god.norseName,0,20);
    }

    // Aurgelmir kid
    pathMaker(singleParent,Aurgelmir,Farbauti,lineType.main,"child","Aurgelmir"+Farbauti.norseName,0,20);

    //Narfi Kid
    pathMaker(singleParent,Narfi,Nott,lineType.main,"child","Narfi"+Nott.norseName,0,20);

    //spouses
    pathMaker(spousePath,Farbauti,Laufey,lineType.main,"spouse","LauFar",0,45);
    pathMaker(spousePath,Ran,Aegir,lineType.main,"spouse","AegRan",0,45);
    pathMaker(spousePath,Bestia,Borr,lineType.main,"spouse","BestBor",0,45);
    pathMaker(spousePath,Nott,Naglfari,lineType.main,"spouse","NagNot",0,45);
    pathMaker(spousePath,Nott,Dellingr,lineType.main,"spouse","NotDell",0,45);

}

//************ Make all the cards show up ************//

function makeCards(){
    for(let god of familyTree){
        god.view();
        godMap[god.norseName] = god;
        cardIDs.push(god.rectID);
    }
    tree.selectAll('rect')
        .on('click',createModal)
        .on('mouseover',highlightChildren)
        .on('mouseout',revert);
    makeTextWrap();
}

//************ Make all captions ************//

function createCaptions(){
    caption("The Horai (The Seasons)",Laufey.x,level2-50);
}

//************ Card interactions ************//

function makeTextWrap(){
    var regular = regularCard.width-20;
    var large = largeCard.width-20;
    
    tree.select('#domain-Ymir')
        .call(wrap, regular);
    tree.select('#domain-Laufey')
        .call(wrap, regular);
    tree.select('domain-Farbauti')
        .call(wrap, regular);
}

//click interaction for cards
function createModal(d,i){
    var godData = d.srcElement.attributes;
    var name = godData.godName.value;
    var domain = godData.domain.value;
    var description = godData.description.value;
    var children = godMap[name].children;
    var modal = new Modal(name,domain,description,children);
    d3.select('#modalContainer').html(modal.html);
    document.getElementById(name).style.display='block';
}

//hightlight children for cards
function highlight(parent,event){
    
        var parentColor = (event === 'mouseover') ? 'red' : '';
        var parentStroke = (event === 'mouseover') ? '4px' : '';
        document.getElementById(parent.rectID).style.stroke = parentColor;
        document.getElementById(parent.rectID).style.strokeWidth = parentStroke;
    
    for(let link of linkIDs){
        var color = (event === 'mouseover') ? 'grey' : '';
        var stroke = (event === 'mouseover') ? '4px' : '';
        if(!parent.childLink.has(link)){
            document.getElementById(link).style.stroke = color;
        }
        if(parent.childLink.has(link)){
            document.getElementById(link).style.strokeWidth = stroke;
        }
    }
    
    for(let card of cardIDs){
        var color = (event === 'mouseover') ? 'grey' : '';
        if(!parent.childRect.has(card)){
            if(card===parent.rectID){
                continue;
            }
            document.getElementById(card).style.fill = color;
        }
    }
    
    var toggle = (event === 'mouseover') ? 'visible' : 'hidden';
    var tooltip = parent.norseName+"Tooltip"
    
    d3.select('#'+tooltip).transition()
                         .duration('100')
                         .style("visibility", toggle);
}

function highlightChildren(d,i){
    var godData = d.srcElement.attributes;
    var name = godData.godName.value;
    d3.select(this).style("cursor", "pointer");
    highlight(godMap[name],'mouseover');
    d3.select(this)
      .transition()
      .duration('500');
}

function revert(d,i){
    var godData = d.srcElement.attributes;
        var name = godData.godName.value;
        d3.select(this).style("cursor", "grab");
        highlight(godMap[name],'mouseout');
        d3.select(this)
        .transition()
        .duration('500');
}

//************ Card interactions ************//

function openControls(){
    var modal = new controlsModal();
    d3.select('#modalContainer').html(modal.html);
document.getElementById('controlModal').style.display='block';
}

function openLegend(){
    var modal = new legendModal();
    d3.select('#modalContainer').html(modal.html);
document.getElementById('legend').style.display='block';
}

//make Modal object
function Modal(name,domain,description,children) {
    
//   var source;
//   if(thumbnail === ""){
//        source = 'img/bred_sheeran.jpg'
//    } else{
//        source = thumbnail}; 
    var list = "";
    
    function listmaker(){
        if(children.length === 0){
            list = "<li>"+name+ " doesn't have any children"+"</li>"
        }
        for(let i = 0; i<children.length;i++){
            var child = "<li>"+children[i]+"</li>"
            list += child;
        }
    }
    
    listmaker();
    
    this.html = 
    `<div id="${name}" class="w3-modal">
        <div class="w3-modal-content">
            <header class="w3-container"> 
                <span onclick="document.getElementById('${name}').style.display='none'"class="w3-button w3-display-topright">&times;</span>
                <h2>${name}</h2>
            </header>
          <div class="w3-container">
            <h4>${domain}</h4>
            <p>${description}</p>
            <h4>${name}'s children on this chart include:</h4>
            <ul>${list}</ul>
          </div>
        </div>
    </div>`;
}

//make controls Modal object
function controlsModal() {
  this.html = 
    `<div id="controlModal" class="w3-modal">
        <div class="w3-modal-content">
            <header class="w3-container"> 
                <span onclick="document.getElementById('controlModal').style.display='none'"class="w3-button w3-display-topright">&times;</span>
                <h2>Norse Mythology Family Tree</h2>
            </header>
          <div class="w3-container">
            <h4>Welcome to the messy and incestous world of Norse mythology! Here are the controls you might use to fully explore this weird family</h4>
            <ul>
              <li>Zoom: Use either your trackpad or mouse scroll to zoom in and out of the family tree</li>
              <li>Hover: Hover over a deity with children. All of that deity's children will highlighted.</li>
              <li>Click: Click on the card to read more information about that deity</li>
              <li>Redraw: While the tree is resposive, there is a quirk where the preserved aspect ratio will cut off the tree. Click redraw to redraw the tree to fit your screen better.</li>
            </ul>
            <p>If you ever need a quick refresh of the controls, click the controls button on the top left.</p>
          </div>
        </div>
    </div>`;
}

//make legend Modal object
function legendModal() {
  this.html = 
    `<div id="legend" class="w3-modal">
        <div class="w3-modal-content">
            <header class="w3-container"> 
                <span onclick="document.getElementById('legend').style.display='none'"class="w3-button w3-display-topright">&times;</span>
                <h2>Legend</h2>
            </header>
          <div class="w3-container legendContainer">
            <div>
                <svg height="160px" width="500px">
                    <rect x="0" y="0" width="100" height="160" class="earth" rx="6" ry="6"></rect>
                    <image href="img/corgi.jpeg" x="10" y="10" height="80"></image>
                    <text class="text-earth" x="50" y="110"> Name</text>
                    <text class="domain-earth domain" x="50" y="130"> Gender & </text>
                    <text class="domain-earth domain" x="50" y="145"> Domain </text>
                    <rect x="120" y="0" width="90" height="40" class="earth" rx="6" ry="6"></rect>
                    <text class="text-earth" x="165" y="20"> Earth Gods </text>
                    <rect x="120" y="60" width="90" height="40" class="sky" rx="6" ry="6"></rect>
                    <text class="text-sky" x="165" y="80"> Sky Gods </text>
                    <rect x="120" y="120" width="90" height="40" class="water" rx="6" ry="6"></rect>
                    <text class="text-water" x="165" y="140"> Sea Gods </text>
                    <rect x="230" y="0" width="110" height="40" class="personification" rx="6" ry="6"></rect>
                    <text class="domain-personification domain" x="285" y="20"> Personifications </text>
                    <rect x="230" y="60" width="110" height="40" class="underworld" rx="6" ry="6"></rect>
                    <text class="domain-underworld domain" x="285" y="80"> Underworld Gods </text>
                    <rect x="230" y="120" width="110" height="40" class="monster" rx="6" ry="6"></rect>
                    <text class="text-monster" x="285" y="140"> Monsters </text>
                    <rect x="360" y="0" width="110" height="40" class="mortal" rx="6" ry="6"></rect>
                    <text class="domain-mortal domain" x="415" y="15"> Mortals & </text>
                    <text class="domain-mortal domain" x="415" y="27"> Demigods </text>
                    <text class="domain-monster domain" x="415" y="70"> Spouse relationship</text>
                    <line x1="360" y1="90" x2="470" y2="90" class="line-main spouse"/>
                    <text class="domain-monster domain" x="415" y="130"> Child relationship</text>
                    <line x1="360" y1="150" x2="470" y2="150" class="line-main child"/>
                </svg>
            </div>
          </div>
        </div>
    </div>`;
}

//text wrap (NOT MINE. FROM: https://bl.ocks.org/mbostock/7555321)
function wrap(text, width) {
  text.each(function() {
    let text = d3.select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      x = text.attr("x"),
      y = text.attr("y"),
      dy = 0,
      tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

//write captions
function caption(text,x,y){
    tree.append("text")
        .text(text)
        .attr("class",'caption')
        .attr("x",x)
        .attr("y",y);
}