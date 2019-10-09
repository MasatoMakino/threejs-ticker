export enum ThreeTickerEventType {
  onBeforeTick = "onBeforeTick",
  tick = "tick",
  onAfterTick = "onAfterTick"
}

export class ThreeTickerEvent {
  public type: ThreeTickerEventType;
  public delta: number;
  public timestamp: number;
  constructor(type: ThreeTickerEventType, timestamp: number, delta: number) {
    this.type = type;
    this.timestamp = timestamp;
    this.delta = delta;
  }
}
