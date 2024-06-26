class God{
    constructor(nName,x,y,image,width,height,cardType,godType,domain,description){
        this.norseName = nName;
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.cardType = cardType;
        this.godType = godType;
        this.domain = domain;
        this.description = description;
        this.childLink = new Set();
        this.spouse = [];
        this.childRect = new Set();
        this.rectID = nName+"Rect";
        this.children = [];
    }
    
    clickCard(){
        console.log("clicked");
    }
    
    //God cards
    view(){ 
    var picHeight = this.width-20;
    var tooltipText = this.norseName+" has "+this.childRect.size+" children.";
    var tooltip = tree.append("svg")
                      .attr("id",this.norseName+"Tooltip")
                      .style("visibility",'hidden');
    tooltip.append("rect")
           .attr("class","tooltipRect")
           .attr("width",this.width+tooltipText.length*6)
           .attr("height",30)
           .attr("godName",this.norseName)
           .attr("x",this.x-tooltipText.length*3)
           .attr("y",this.y-35)
           .attr("rx", 6)
           .attr("ry", 6);
    tooltip.append("text")
           .text(tooltipText)
           .attr("class",'tooltipText')
           .attr("x",this.x+(this.width/2))
           .attr("y",this.y-20);
    tree.append("rect") //add card
        .attr("x",this.x)
        .attr("y",this.y)
        .attr("rx", 6)
        .attr("ry", 6)
        .attr("godName",this.norseName)
        .attr("id",this.rectID)
        .attr("class",this.godType)
        .attr("width",this.width)
        .attr("height",this.height)
    if(this.cardType === "small"){
        tree.append("text") //text
            .text(this.norseName)
            .attr("class","text-"+this.godType)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+(this.height/2)-5);
         tree.append("text") //text
            .text(this.domain)
            .attr("class","domain-"+this.godType+" "+"domain")
            .attr("id","domain-"+this.norseName)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+(this.height/2)+10);
        tree.append("rect")//hitbox
            .attr("x",this.x-5)
            .attr("y",this.y-5)
            .attr("godName",this.norseName)
            .attr("class","hitbox")
            .attr("domain",this.domain)
            .attr("description",this.description)
            .attr("width",this.width+5)
            .attr("height",this.height+5)
    }else{
        tree.append("svg:image")//image
            .attr("xlink:href",this.image)
            .attr("x", this.x+10)
            .attr("y", this.y+10)
            .attr("height",picHeight);
        tree.append("text") //name text
            .text(this.norseName)
            .attr("class","text-"+this.godType)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+picHeight+30);
        tree.append("text") //domain text
            .text(this.domain)
            .attr("class","domain-"+this.godType+" "+"domain")
            .attr("id","domain-"+this.norseName)
            .attr("x",this.x+(this.width/2))
            .attr("y",this.y+picHeight+50);
        tree.append("rect")//hitbox
            .attr("x",this.x-5)
            .attr("y",this.y-5)
            .attr("godName",this.norseName)
            .attr("class","hitbox")
            .attr("domain",this.domain)
            .attr("description",this.description)
            .attr("width",this.width+10)
            .attr("height",this.height+10)
        }
    }
    
}