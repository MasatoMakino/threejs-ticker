import { EventDispatcher, Event } from "three";
import { ThreeTickerEvent, ThreeTickerEventType } from "./ThreeTickerEvent";

export class ThreeTicker {
  private static _dispatcher: EventDispatcher;
  private static _lastUpdateTimestamp: number;
  protected static _id: number;

  public static initialize() {
    this._dispatcher = new EventDispatcher();
    ThreeTicker.onTick(performance.now());
  }

  static addEventListener(
    type: string,
    listener: (event: Event) => void
  ): void {
    this._dispatcher.addEventListener(type, listener);
  }

  static hasEventListener(
    type: string,
    listener: (event: Event) => void
  ): boolean {
    return this._dispatcher.hasEventListener(type, listener);
  }

  static removeEventListener(
    type: string,
    listener: (event: Event) => void
  ): void {
    this._dispatcher.removeEventListener(type, listener);
  }

  private static onTick = (timestamp?: number) => {
    if (ThreeTicker._lastUpdateTimestamp == null) {
      ThreeTicker._lastUpdateTimestamp = timestamp;
    }
    const delta = timestamp - ThreeTicker._lastUpdateTimestamp;

    ThreeTicker._dispatcher.dispatchEvent(
      new ThreeTickerEvent(ThreeTickerEventType.onBeforeTick, timestamp, delta)
    );
    ThreeTicker._dispatcher.dispatchEvent(
      new ThreeTickerEvent(ThreeTickerEventType.tick, timestamp, delta)
    );
    ThreeTicker._dispatcher.dispatchEvent(
      new ThreeTickerEvent(ThreeTickerEventType.onAfterTick, timestamp, delta)
    );

    ThreeTicker._lastUpdateTimestamp = timestamp;
    ThreeTicker._id = requestAnimationFrame(ThreeTicker.onTick);
  };
}

ThreeTicker.initialize();
