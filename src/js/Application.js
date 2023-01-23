import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    document.getElementById("emojis").innerHTML=emojis
  }

  addBananas() {
    document.getElementById("emojis").innerHTML="";
    let newemoji = this.emojis.map(monkey => monkey += this.banana)
    let paragraph = document.createElement('p');
    
    paragraph.innerHTML = newemoji
    document.getElementById("emojis").appendChild(paragraph);
  
    

  }
}
