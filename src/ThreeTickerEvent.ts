export enum ThreeTickerEventType {
  onBeforeTick = "onBeforeTick",
  tick = "tick",
  onAfterTick = "onAfterTick"
}

export class ThreeTickerEvent {
  public type: ThreeTickerEventType;
  public delta: number;
  constructor(type: ThreeTickerEventType, delta: number) {
    this.type = type;
    this.delta = delta;
  }
}
