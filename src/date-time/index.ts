export { }
declare global {
    interface Date {
        Date(): string
        Time(): string
        DateTime(): string
    }
}

if (!Date.prototype.Date) {
    Object.defineProperty(Date.prototype, 'Date', {
        value: function Date() {
            return this.toLocaleDateString();
        }
    });
}

if (!Date.prototype.Time) {
    Object.defineProperty(Date.prototype, 'Time', {
        value: function Time() {
            return this.toLocaleTimeString();
        }
    });
}

if (!Date.prototype.DateTime) {
    Object.defineProperty(Date.prototype, 'DateTime', {
        value: function DateTime() {
            return this.toLocaleString();
        }
    });
}
