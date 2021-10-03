import { StringToFloat } from "../utils";

declare global {
    interface String {
        /**
        * Returns percentage of a number(max)
        */
        Percent(max: string|number, rounds: number): string
    }
    interface Number {
        /**
        * Returns percentage of a number(max)
        */
        Percent(max: string|number, rounds: number): string
    }
}

function Percent(this: string|number, max: string|number, rounds = 2) {
    return (( StringToFloat(this) / StringToFloat(max) ) * 100).toFixed(rounds);
}

if (!String.prototype.Percent) {
    Object.defineProperty(String.prototype, 'Percent', {
        value: Percent
    });
}

if (!Number.prototype.Percent) {
    Number.prototype.Percent = Percent;
}