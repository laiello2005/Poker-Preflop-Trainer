
function rand_rank(){
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "Ten", "Jack", "Queen", "King", "Ace"];
    const idx = Math.floor(Math.random()*13);
    return ranks[idx];
}

function rand_suit(){
    const suits = ["diamonds","hearts","clubs","spades"];
    const idx = Math.floor(Math.random()*4);
    return suits[idx];
}

function new_card1(){
    const card = document.getElementById("C1");
    card.setAttribute("suit",rand_suit());
    card.setAttribute("rank",rand_rank());
    const card2 = document.getElementById("C2");
    card2.setAttribute("suit",rand_suit());
    card2.setAttribute("rank",rand_rank());
}
    
function shorthand(){
    const card1 = document.getElementById("C1");
    const card2 = document.getElementById("C2");

    const rank1 = card1.getAttribute("rank");
    const rank2 = card2.getAttribute("rank");
    const suit1 = card1.getAttribute("suit");
    const suit2 = card2.getAttribute("suit");

    if (suit1 == suit2){
        suited = "s";
    }
    else {
        suited = "o";
    }

    if(rank1 == rank2){
        suited = "";
    }

    const listed = {"2": 1,"3": 2,"4": 3,"5": 4,"6": 5,"7": 6,"8": 7,"9": 8,"Ten": 9,"Jack": 10,"Queen": 11,"King": 12,"Ace": 13};

    if(listed[rank1]>listed[rank2]){
        sh1 = rank1[0]+rank2[0];
    }
    else{
        sh1 = rank2[0]+rank1[0];
    }



    const sh = sh1+suited;

    const text = document.getElementById("text");
    text.innerHTML = "Shorthand: "+sh;
    return (sh);
}



function preflop_btn(){
    sh = shorthand();

    const decision = document.getElementById("decision");
    decision.innerHTML = "Decision: "+(poker_preflop_decisions["BTN"])[sh];
    return (poker_preflop_decisions["BTN"])[sh];
}

function preflop_sb(){
    sh = shorthand();

    const decision = document.getElementById("decision");
    decision.innerHTML = "Decision: "+(poker_preflop_decisions["SB"])[sh];
    return (poker_preflop_decisions["SB"])[sh];

}

function preflop_utg(){
    sh = shorthand();

    const decision = document.getElementById("decision");
    decision.innerHTML = "Decision: "+(poker_preflop_decisions["UTG"])[sh];
    return (poker_preflop_decisions["UTG"])[sh];

}

function preflop_hj(){
    sh = shorthand();

    const decision = document.getElementById("decision");
    decision.innerHTML = "Decision: "+(poker_preflop_decisions["HJ"])[sh];
    return (poker_preflop_decisions["HJ"])[sh];

}



function st_btn(){
    Raise = document.getElementById("Raise");
    Fold = document.getElementById("Fold");
    Raise.onclick = checkR_btn;
    Fold.onclick = checkF_btn;
    const text = document.getElementById("position");
    text.innerHTML = "Current Position: Button";

}

function st_utg(){
    Raise = document.getElementById("Raise");
    Fold = document.getElementById("Fold");
    Raise.onclick = checkR_utg;
    Fold.onclick = checkF_utg;
    const text = document.getElementById("position");
    text.innerHTML = "Current Position: Under The Gun";

}

function st_sb(){
    Raise = document.getElementById("Raise");
    Fold = document.getElementById("Fold");
    Raise.onclick = checkR_sb;
    Fold.onclick = checkF_sb;
    const text = document.getElementById("position");
    text.innerHTML = "Current Position: Small Blind";

}

function st_hj(){
    Raise = document.getElementById("Raise");
    Fold = document.getElementById("Fold");
    Raise.onclick = checkR_hj;
    Fold.onclick = checkF_hj;
    const text = document.getElementById("position");
    text.innerHTML = "Current Position: High Jack";

}
    
poker_preflop_decisions = {
    "BTN":{"AA":"Raise", "AKs":"Raise" , "AQs": "Raise" , "AJs":"Raise" , "ATs":"Raise" , "A9s":"Raise" , "A8s":"Raise" , "A7s":"Raise" , "A6s":"Raise" , "A5s":"Raise" , "A4s":"Raise" , "A3s":"Raise" , "A2s":"Raise" , "KK":"Raise" , "KQs":"Raise" , "KJs":"Raise" , "KTs":"Raise" , "K9s":"Raise" , "K8s":"Raise" , "K7s":"Raise" , "K6s":"Raise" , "K5s":"Raise" , "K4s":"Raise" , "K3s":"Raise" , "K2s": "Fold" , "QQ":"Raise" , "QJs":"Raise" , "QTs":"Raise" , "Q9s":"Raise" , "Q8s":"Raise" , "Q7s":"Raise" , "Q6s":"Raise", "Q5s":"Raise" , "Q4s":"Fold" , "Q3s": "Fold" , "Q2s":"Fold" , "JJ":"Raise" , "JTs": "Raise", "J9s":"Raise" , "J8s":"Raise" , "J7s":"Raise" , "J6s":"Raise" , "J5s": "Fold" , "J4s":"Fold" , "J3s":"Fold" , "J2s":"Fold" , "TT":"Raise" , "T9s":"Raise" , "T8s":"Raise" , "T7s":"Raise" , "T6s":"Raise" , "T5s":"Fold" , "T4s":"Fold" , "T3s":"Fold" , "T2s":"Fold" , "99":"Raise" , "98s":"Raise" , "97s":"Raise" , "96s":"Raise" , "95s":"Fold" , "94s":"Fold" , "93s":"Fold" , "92s":"Fold" , "88":"Raise" , "87s":"Raise" , "86s":"Raise" , "85s":"Raise" , "84s":"Fold" , "83s":"Fold" , "82s":"Fold" , "77":"Raise" , "76s":"Raise" , "75s":"Raise" , "74s":"Fold" , "73s":"Fold" , "72s":"Fold" , "66":"Raise" , "65s":"Raise" , "64s":"Raise" , "63s":"Fold" , "62s":"Fold" , "55":"Raise" , "54s":"Raise" , "53s":"Fold" , "52s":"Fold" , "44":"Raise" , "43s":"Raise" , "42s":"Fold" , "33":"Raise" , "32s":"Fold", "22":"Raise",
         "AKo":"Raise" , "AQo":"Raise" , "AJo":"Raise" , "ATo":"Raise" , "A9o":"Raise" , "A8o":"Raise" , "A7o":"Raise" , "A6o":"Raise" , "A5o":"Raise" , "A4o":"Raise" , "A3o":"Raise" , "A2o":"Raise" , "KQo":"Raise" , "KJo":"Raise" , "KTo":"Raise" , "K9o":"Raise", "K8o":"Fold", "K7o":"Fold" , "K6o":"Fold" , "K5o":"Fold" , "K4o":"Fold" , "K3o":"Fold" , "K2o":"Fold" , "QJo":"Raise" , "QTo":"Raise" , "Q9o":"Raise" , "Q8o":"Fold" , "Q7o":"Fold" , "Q6o":"Fold" , "Q5o":"Fold" , "Q4o":"Fold" , "Q3o":"Fold" , "Q2o":"Fold" , "JTo":"Raise" , "J9o":"Raise" , "J8o":"Fold" , "J7o":"Fold" , "J6o":"Fold" , "J5o":"Fold" , "J4o":"Fold" , "J3o":"Fold" , "J2o":"Fold" , "T9o":"Raise" , "T8o":"Fold" , "T7o":"Fold" , "T6o":"Fold" , "T5o":"Fold" , "T4o":"Fold" , "T3o":"Fold" , "T2o":"Fold" , "98o":"Fold" , "97o":"Fold" , "96o":"Fold" , "95o":"Fold" , "94o":"Fold" , "93o":"Fold" , "92o":"Fold" , "87o":"Fold" , "86o":"Fold" , "85o":"Fold" , "84o":"Fold" , "83o":"Fold" , "82o":"Fold" , "76o":"Fold" , "75o":"Fold" , "74o":"Fold" , "73o":"Fold" , "72o":"Fold" , "65o":"Fold" , "64o":"Fold" , "63o":"Fold" , "62o":"Fold" , "54o":"Fold" , "53o":"Fold" , "52o":"Fold" , "43o":"Fold" , "42o":"Fold" , "32o":"Fold"}
    
    ,"SB":{"AA":"Raise", "AKs":"Raise" , "AQs": "Raise" , "AJs":"Raise" , "ATs":"Raise" , "A9s":"Raise" , "A8s":"Raise" , "A7s":"Raise" , "A6s":"Raise" , "A5s":"Raise" , "A4s":"Raise" , "A3s":"Raise" , "A2s":"Raise" , "KK":"Raise" , "KQs":"Raise" , "KJs":"Raise" , "KTs":"Raise" , "K9s":"Raise" , "K8s":"Raise" , "K7s":"Raise" , "K6s":"Raise" , "K5s":"Raise" , "K4s":"Raise" , "K3s":"Raise" , "K2s": "Raise" , "QQ":"Raise" , "QJs":"Raise" , "QTs":"Raise" , "Q9s":"Raise" , "Q8s":"Raise" , "Q7s":"Raise" , "Q6s":"Raise", "Q5s":"Raise" , "Q4s":"Raise" , "Q3s": "Fold" , "Q2s":"Fold" , "JJ":"Raise" , "JTs": "Raise", "J9s":"Raise" , "J8s":"Raise" , "J7s":"Raise" , "J6s":"Raise" , "J5s": "Fold" , "J4s":"Fold" , "J3s":"Fold" , "J2s":"Fold" , "TT":"Raise" , "T9s":"Raise" , "T8s":"Raise" , "T7s":"Raise" , "T6s":"Raise" , "T5s":"Fold" , "T4s":"Fold" , "T3s":"Fold" , "T2s":"Fold" , "99":"Raise" , "98s":"Raise" , "97s":"Raise" , "96s":"Raise" , "95s":"Raise" , "94s":"Fold" , "93s":"Fold" , "92s":"Fold" , "88":"Raise" , "87s":"Raise" , "86s":"Raise" , "85s":"Raise" , "84s":"Raise" , "83s":"Fold" , "82s":"Fold" , "77":"Raise" , "76s":"Raise" , "75s":"Raise" , "74s":"Raise" , "73s":"Fold" , "72s":"Fold" , "66":"Raise" , "65s":"Raise" , "64s":"Raise" , "63s":"Raise" , "62s":"Fold" , "55":"Raise" , "54s":"Raise" , "53s":"Raise" , "52s":"Fold" , "44":"Raise" , "43s":"Raise" , "42s":"Fold" , "33":"Raise" , "32s":"Raise", "22":"Raise",
         "AKo":"Raise" , "AQo":"Raise" , "AJo":"Raise" , "ATo":"Raise" , "A9o":"Raise" , "A8o":"Raise" , "A7o":"Raise" , "A6o":"Raise" , "A5o":"Raise" , "A4o":"Raise" , "A3o":"Raise" , "A2o":"Raise" , "KQo":"Raise" , "KJo":"Raise" , "KTo":"Raise" , "K9o":"Raise", "K8o":"Raise", "K7o":"Fold" , "K6o":"Fold" , "K5o":"Fold" , "K4o":"Fold" , "K3o":"Fold" , "K2o":"Fold" , "QJo":"Raise" , "QTo":"Raise" , "Q9o":"Raise" , "Q8o":"Raise" , "Q7o":"Fold" , "Q6o":"Fold" , "Q5o":"Fold" , "Q4o":"Fold" , "Q3o":"Fold" , "Q2o":"Fold" , "JTo":"Raise" , "J9o":"Raise" , "J8o":"Raise" , "J7o":"Fold" , "J6o":"Fold" , "J5o":"Fold" , "J4o":"Fold" , "J3o":"Fold" , "J2o":"Fold" , "T9o":"Raise" , "T8o":"Raise" , "T7o":"Fold" , "T6o":"Fold" , "T5o":"Fold" , "T4o":"Fold" , "T3o":"Fold" , "T2o":"Fold" , "98o":"Raise" , "97o":"Fold" , "96o":"Fold" , "95o":"Fold" , "94o":"Fold" , "93o":"Fold" , "92o":"Fold" , "87o":"Fold" , "86o":"Fold" , "85o":"Fold" , "84o":"Fold" , "83o":"Fold" , "82o":"Fold" , "76o":"Fold" , "75o":"Fold" , "74o":"Fold" , "73o":"Fold" , "72o":"Fold" , "65o":"Fold" , "64o":"Fold" , "63o":"Fold" , "62o":"Fold" , "54o":"Fold" , "53o":"Fold" , "52o":"Fold" , "43o":"Fold" , "42o":"Fold" , "32o":"Fold"}
    
    ,"UTG":{"AA":"Raise", "AKs":"Raise", "AQs": "Raise", "AJs":"Raise", "ATs":"Raise", "A9s":"Fold" , "A8s":"Fold" , "A7s":"Fold" , "A6s":"Fold" , "A5s":"Raise", "A4s":"Fold" , "A3s":"Fold" , "A2s":"Fold" , "KK":"Raise", "KQs":"Raise", "KJs":"Raise", "KTs":"Raise", "K9s":"Fold" , "K8s":"Fold" , "K7s":"Fold" , "K6s":"Fold" , "K5s":"Fold" , "K4s":"Fold" , "K3s":"Fold" , "K2s": "Fold" , "QQ":"Raise", "QJs":"Raise", "QTs":"Raise", "Q9s":"Fold" , "Q8s":"Fold" , "Q7s":"Fold" , "Q6s":"Fold", "Q5s":"Fold" , "Q4s":"Fold" , "Q3s": "Fold" , "Q2s":"Fold" , "JJ":"Raise", "JTs": "Raise", "J9s":"Raise", "J8s":"Fold" , "J7s":"Fold" , "J6s":"Fold" , "J5s": "Fold" , "J4s":"Fold" , "J3s":"Fold" , "J2s":"Fold" , "TT":"Raise", "T9s":"Raise" , "T8s":"Fold" , "T7s":"Fold" , "T6s":"Fold" , "T5s":"Fold" , "T4s":"Fold" , "T3s":"Fold" , "T2s":"Fold" , "99":"Raise" , "98s":"Raise" , "97s":"Fold" , "96s":"Fold" , "95s":"Fold" , "94s":"Fold" , "93s":"Fold" , "92s":"Fold" , "88":"Raise" , "87s":"Fold" , "86s":"Fold" , "85s":"Fold" , "84s":"Fold" , "83s":"Fold" , "82s":"Fold" , "77":"Raise" , "76s":"Fold" , "75s":"Fold" , "74s":"Fold" , "73s":"Fold" , "72s":"Fold" , "66":"Fold" , "65s":"Fold" , "64s":"Fold" , "63s":"Fold" , "62s":"Fold" , "55":"Fold" , "54s":"Fold" , "53s":"Fold" , "52s":"Fold" , "44":"Fold" , "43s":"Fold" , "42s":"Fold" , "33":"Fold" , "32s":"Fold", "22":"Fold",
         "AKo":"Raise" , "AQo":"Raise" , "AJo":"Fold" , "ATo":"Fold" , "A9o":"Fold" , "A8o":"Fold" , "A7o":"Fold" , "A6o":"Fold" , "A5o":"Fold" , "A4o":"Fold" , "A3o":"Fold" , "A2o":"Fold" , "KQo":"Fold" , "KJo":"Fold" , "KTo":"Fold" , "K9o":"Fold", "K8o":"Fold", "K7o":"Fold" , "K6o":"Fold" , "K5o":"Fold" , "K4o":"Fold" , "K3o":"Fold" , "K2o":"Fold" , "QJo":"Fold" , "QTo":"Fold" , "Q9o":"Fold" , "Q8o":"Fold" , "Q7o":"Fold" , "Q6o":"Fold" , "Q5o":"Fold" , "Q4o":"Fold" , "Q3o":"Fold" , "Q2o":"Fold" , "JTo":"Fold" , "J9o":"Fold" , "J8o":"Fold" , "J7o":"Fold" , "J6o":"Fold" , "J5o":"Fold" , "J4o":"Fold" , "J3o":"Fold" , "J2o":"Fold" , "T9o":"Fold" , "T8o":"Fold" , "T7o":"Fold" , "T6o":"Fold" , "T5o":"Fold" , "T4o":"Fold" , "T3o":"Fold" , "T2o":"Fold" , "98o":"Fold" , "97o":"Fold" , "96o":"Fold" , "95o":"Fold" , "94o":"Fold" , "93o":"Fold" , "92o":"Fold" , "87o":"Fold" , "86o":"Fold" , "85o":"Fold" , "84o":"Fold" , "83o":"Fold" , "82o":"Fold" , "76o":"Fold" , "75o":"Fold" , "74o":"Fold" , "73o":"Fold" , "72o":"Fold" , "65o":"Fold" , "64o":"Fold" , "63o":"Fold" , "62o":"Fold" , "54o":"Fold" , "53o":"Fold" , "52o":"Fold" , "43o":"Fold" , "42o":"Fold" , "32o":"Fold"}
    
    ,"HJ":{"AA":"Raise", "AKs":"Raise", "AQs": "Raise", "AJs":"Raise", "ATs":"Raise", "A9s":"Raise" , "A8s":"Raise" , "A7s": "Raise" , "A6s":"Raise" , "A5s":"Raise", "A4s":"Raise" , "A3s":"Raise" , "A2s":"Raise" , "KK":"Raise", "KQs":"Raise", "KJs":"Raise", "KTs":"Raise", "K9s":"Raise" , "K8s":"Fold" , "K7s":"Fold" , "K6s":"Fold" , "K5s":"Fold" , "K4s":"Fold" , "K3s":"Fold" , "K2s": "Fold" , "QQ":"Raise", "QJs":"Raise", "QTs":"Raise", "Q9s":"Raise" , "Q8s":"Fold" , "Q7s":"Fold" , "Q6s":"Fold", "Q5s":"Fold" , "Q4s":"Fold" , "Q3s": "Fold" , "Q2s":"Fold" , "JJ":"Raise", "JTs": "Raise", "J9s":"Raise", "J8s":"Fold" , "J7s":"Fold" , "J6s":"Fold" , "J5s": "Fold" , "J4s":"Fold" , "J3s":"Fold" , "J2s":"Fold" , "TT":"Raise", "T9s":"Raise" , "T8s":"Raise" , "T7s":"Fold" , "T6s":"Fold" , "T5s":"Fold" , "T4s":"Fold" , "T3s":"Fold" , "T2s":"Fold" , "99":"Raise" , "98s":"Raise" , "97s":"Raise" , "96s":"Fold" , "95s":"Fold" , "94s":"Fold" , "93s":"Fold" , "92s":"Fold" , "88":"Raise" , "87s":"Raise" , "86s":"Fold" , "85s":"Fold" , "84s":"Fold" , "83s":"Fold" , "82s":"Fold" , "77":"Raise" , "76s":"Raise" , "75s":"Fold" , "74s":"Fold" , "73s":"Fold" , "72s":"Fold" , "66":"Raise" ,
         "65s":"Raise" , "64s":"Fold" , "63s":"Fold" , "62s":"Fold" , "55":"Raise", "54s":"Fold" , "53s":"Fold" , "52s":"Fold" , "44":"Raise" , "43s":"Fold" , "42s":"Fold" , "33":"Fold" , "32s":"Fold", "22":"Fold", "AKo":"Raise" , "AQo":"Raise" , "AJo":"Raise" , "ATo":"Raise" , "A9o":"Fold" , "A8o":"Fold" , "A7o":"Fold" , "A6o":"Fold" , "A5o":"Fold" , "A4o":"Fold" , "A3o":"Fold" , "A2o":"Fold" , "KQo":"Raise" , "KJo":"Raise" , "KTo":"Fold" , "K9o":"Fold", "K8o":"Fold", "K7o":"Fold" , "K6o":"Fold" , "K5o":"Fold" , "K4o":"Fold" , "K3o":"Fold" , "K2o":"Fold" , "QJo":"Raise" , "QTo":"Fold" , "Q9o":"Fold" , "Q8o":"Fold" , "Q7o":"Fold" , "Q6o":"Fold" , "Q5o":"Fold" , "Q4o":"Fold" , "Q3o":"Fold" , "Q2o":"Fold" , "JTo":"Fold" , "J9o":"Fold" , "J8o":"Fold" , "J7o":"Fold" , "J6o":"Fold" , "J5o":"Fold" , "J4o":"Fold" , "J3o":"Fold" , "J2o":"Fold" , "T9o":"Fold" , "T8o":"Fold" , "T7o":"Fold" , "T6o":"Fold" , "T5o":"Fold" , "T4o":"Fold" , "T3o":"Fold" , "T2o":"Fold" , "98o":"Fold" , "97o":"Fold" , "96o":"Fold" , "95o":"Fold" , "94o":"Fold" , "93o":"Fold" , "92o":"Fold" , "87o":"Fold" , "86o":"Fold" , "85o":"Fold" , "84o":"Fold" , "83o":"Fold" , "82o":"Fold" , "76o":"Fold" , "75o":"Fold" , "74o":"Fold" , "73o":"Fold" , "72o":"Fold" , "65o":"Fold" , "64o":"Fold" , "63o":"Fold" , "62o":"Fold" , "54o":"Fold" , "53o":"Fold" , "52o":"Fold" , "43o":"Fold" , "42o":"Fold" , "32o":"Fold"}


        }



function incrm_score(){
let score = document.getElementById("score");
let intx = parseInt(score.innerHTML);
score.innerHTML = intx+1;

}

function checkR_btn(){
    let correct = preflop_btn();
    let decision = document.getElementById("decision");
    let score = document.getElementById("score");

    if (correct == "Raise"){
        decision.innerHTML = "Decision: Correct!";
        incrm_score();
        new_card1();
    }
    else{
    decision.innerHTML = "Decision: Wrong!";
    score.innerHTML = "0";
    }

}

function checkF_btn(){
    let correct = preflop_btn();
    let decision = document.getElementById("decision");
    let score = document.getElementById("score");
    if (correct == "Fold"){
        decision.innerHTML = "Decision: Correct!";
        incrm_score();
        new_card1();
    }
    else{
    decision.innerHTML = "Decision: Wrong!";
    score.innerHTML = "0";

    }
}

function checkR_sb(){
    let correct = preflop_sb();
    let decision = document.getElementById("decision");
    let score = document.getElementById("score");

    if (correct == "Raise"){
        decision.innerHTML = "Decision: Correct!";
        incrm_score();
        new_card1();
    }
    else{
    decision.innerHTML = "Decision: Wrong!";
    score.innerHTML = "0";
    }

}

function checkF_sb(){
    let correct = preflop_sb();
    let decision = document.getElementById("decision");
    let score = document.getElementById("score");
    if (correct == "Fold"){
        decision.innerHTML = "Decision: Correct!";
        incrm_score();
        new_card1();
    }
    else{
    decision.innerHTML = "Decision: Wrong!";
    score.innerHTML = "0";

    }
}

function checkR_utg(){
    let correct = preflop_utg();
    let decision = document.getElementById("decision");
    let score = document.getElementById("score");

    if (correct == "Raise"){
        decision.innerHTML = "Decision: Correct!";
        incrm_score();
        new_card1();
    }
    else{
    decision.innerHTML = "Decision: Wrong!";
    score.innerHTML = "0";
    }

}

function checkF_utg(){
    let correct = preflop_utg();
    let decision = document.getElementById("decision");
    let score = document.getElementById("score");
    if (correct == "Fold"){
        decision.innerHTML = "Decision: Correct!";
        incrm_score();
        new_card1();
    }
    else{
    decision.innerHTML = "Decision: Wrong!";
    score.innerHTML = "0";

    }
}

function checkR_hj(){
    let correct = preflop_hj();
    let decision = document.getElementById("decision");
    let score = document.getElementById("score");

    if (correct == "Raise"){
        decision.innerHTML = "Decision: Correct!";
        incrm_score();
        new_card1();
    }
    else{
    decision.innerHTML = "Decision: Wrong!";
    score.innerHTML = "0";
    }

}

function checkF_hj(){
    let correct = preflop_hj();
    let decision = document.getElementById("decision");
    let score = document.getElementById("score");
    if (correct == "Fold"){
        decision.innerHTML = "Decision: Correct!";
        incrm_score();
        new_card1();
    }
    else{
    decision.innerHTML = "Decision: Wrong!";
    score.innerHTML = "0";

    }
}