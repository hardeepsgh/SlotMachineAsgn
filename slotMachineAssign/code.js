var stage;
var rollBitmap1 ;
var count = 0 ;
function init() {
    stage = new createjs.Stage(document.getElementById('canvas'));
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    start();
}
function handleTick(e) {
    stage.update();
}


///BOOK EXAMPLE
///MOVE BUTTERFLY WITH EASEL
function start() {
    drawSlotMachine();
}
function drawSlotMachine() {
    var slotMachineHeadPath = 'images/slotMachineHead.png';
    var slotMachineBottomPath = 'images/slotMachineBottom.png';
    var slotMachineLeftFramePath = 'images/slotMachineLeftFrame.png';
    var slotMachineRightFramePath = 'images/slotMachineRightFrame.png';
    var rollPath = 'images/roll.png';
    var coverPath = 'images/upperCover.png';
    var winPath = 'images/win.png'
    
    slotMachineHeadBitmap = new createjs.Bitmap(slotMachineHeadPath);
    slotMachineBottomBitmap = new createjs.Bitmap(slotMachineBottomPath);
    slotMachineLeftFrameBitmap = new createjs.Bitmap(slotMachineLeftFramePath);
    slotMachineRightFrameBitmap = new createjs.Bitmap(slotMachineRightFramePath);
    rollBitmap1 = new createjs.Bitmap(rollPath);
    rollBitmap2 = new createjs.Bitmap(rollPath);
    rollBitmap3 = new createjs.Bitmap(rollPath);
    coverBitmap = new createjs.Bitmap(coverPath);
    lowerCoverBitmap = new createjs.Bitmap(coverPath);
    winBitmap = new createjs.Bitmap(winPath);

    slotMachineHeadBitmap.x = 400;
    slotMachineHeadBitmap.y = 100 ;
    slotMachineHeadBitmap.z = 1000;
    slotMachineLeftFrameBitmap.x = 400;
    slotMachineLeftFrameBitmap.y = 226 ;
    slotMachineRightFrameBitmap.x = 785;
    slotMachineRightFrameBitmap.y = 226 ;
    slotMachineBottomBitmap.x = 400;
    slotMachineBottomBitmap.y = 359 ;



    rollBitmap1.x = 450;
    rollBitmap1.y = 0;
    rollBitmap1.z = -1;
    rollBitmap2.x = 570;
    rollBitmap2.y = -750;
    rollBitmap2.z = -1;
    rollBitmap3.x = 690;
    rollBitmap3.y = 0;
    rollBitmap3.z = -1;
    winBitmap.x = 400;
    winBitmap.y =0 ;

    coverBitmap.x = 400;
    coverBitmap.y = 0;
    
    lowerCoverBitmap.x = 400;
    lowerCoverBitmap.y = 500;

    
    stage.addChild(rollBitmap1,rollBitmap2,rollBitmap3, slotMachineHeadBitmap , slotMachineLeftFrameBitmap,
         slotMachineRightFrameBitmap, slotMachineBottomBitmap , coverBitmap, lowerCoverBitmap);
    stage.update();

    
    setTimeout(tweenRoll, 1000);
    setTimeout(tweenRollBack, 6000);
    
   

}

function tweenRoll(){
    createjs.Tween.get(rollBitmap1).to({y:-750},5000).to({y:250});
    createjs.Tween.get(rollBitmap2).to({y:250},5000).to({y:-750});
    createjs.Tween.get(rollBitmap3).to({y:-750},5000).to({y:250});
   
}

function winRoll(){
    createjs.Tween.get(rollBitmap1).to({y:-750},5000).to({y:250});
    createjs.Tween.get(rollBitmap2).to({y:-650},5000).to({y:250});
    createjs.Tween.get(rollBitmap3).to({y:-750},5000).to({y:250});
    setTimeout( addWin,5000);

    
    
    setTimeout(removeWin,10000);
}

function addWin(){
    stage.addChild(winBitmap);
}
function removeWin(){
    stage.removeChild(winBitmap);
}

function tweenRollBack(){
    createjs.Tween.get(rollBitmap1).to({y:250},5000).to({y:-750});
    createjs.Tween.get(rollBitmap2).to({y:-750},5000).to({y:250});
    createjs.Tween.get(rollBitmap3).to({y:250},5000).to({y:-750});
}

function spin(){
    count += 1 ;
    if(count%2 == 0 )
    {
        tweenRoll();
        setTimeout(tweenRoll,0);
        setTimeout(tweenRollBack, 5000);
        setTimeout(winRoll,10000);
    }
    else{
        tweenRoll();
        tweenRollBack();
    }
    
}

