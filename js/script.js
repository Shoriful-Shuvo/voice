let memberlist =
[
    "SHUVO",
    "YOUSUF",
    " MAHI",
    "SHORIFUL",
    "ASHIK",
    "SNIGHDO",
    "RIFAT"
    
];
function grettings(membername) {
    let utterance = new SpeechSynthesisUtterance(`Hello  ${membername} `);
speechSynthesis.speak(utterance);
  console.log(`welcome ${membername}`);
  
}

for (let i = 0; i < memberlist.length; i++) {
   grettings(memberlist[i]);    
}