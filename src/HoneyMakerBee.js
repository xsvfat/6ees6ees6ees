import Bee from './Bee'

class HoneyMakerBee extends Bee {
  // TODO..
  constructor(){
    super()
    this.age = 10;
    this.job = "make honey"
    this.color = "yellow";
    this.honeyPot = 0;
  }
  makeHoney(){
    this.honeyPot++
  }
  giveHoney(){
    this.honeyPot--
  }
};

export default HoneyMakerBee;