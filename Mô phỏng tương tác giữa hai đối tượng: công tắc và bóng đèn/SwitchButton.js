class SwitchButton {
  constructor() {
    this.status = false;
    this.lamp = null;
  }
  connectToLamp(lamp) {
    this.lamp = lamp;
  }
  switchOff() {
    this.lamp.turnOff();
    alert(`Trang thai bong den: ${this.lamp.status}`);
  }
  switchOn() {
    this.lamp.turnOn();
    alert(`Trang thai bong den: ${this.lamp.status}`);
  }
}

