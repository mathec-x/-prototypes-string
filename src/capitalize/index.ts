export { }
declare global {
    interface String {
        /**
        * Returns a reCapitalized text
        */
        Capitalize(): string
    }
}

function Capitalize(this: string) {
    return this.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

if (!String.prototype.Capitalize) {
    Object.defineProperty(String.prototype, 'Capitalize', {
        value: Capitalize
    });
}