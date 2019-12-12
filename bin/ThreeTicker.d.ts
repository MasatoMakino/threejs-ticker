import { Event } from "three";
/**
 * @deprecated ThreeTicker is deprecated. Please migrate to RAF-ticker https://github.com/MasatoMakino/raf-ticker
 */
export declare class ThreeTicker {
    private static _dispatcher;
    private static _lastUpdateTimestamp;
    protected static _id: number;
    static initialize(): void;
    static addEventListener(type: string, listener: (event: Event) => void): void;
    static hasEventListener(type: string, listener: (event: Event) => void): boolean;
    static removeEventListener(type: string, listener: (event: Event) => void): void;
    private static onTick;
}
//# sourceMappingURL=ThreeTicker.d.ts.map