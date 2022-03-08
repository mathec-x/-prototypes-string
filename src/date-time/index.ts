export { }
declare global {
    interface Date {
        DiffSeconds(date: Date | string): number
        DiffMinutes(date: Date | string): number
        DiffHours(date: Date | string): number
        DiffDays(date: Date | string): number
        DiffMonths(date: Date | string): number
        DiffYears(date: Date | string): number
        Date(): string
        Time(): string
        DateTime(): string
        toDate(): Date
        isDate(): boolean
    }
    interface String {
        Date(): string
        Time(): string
        DateTime(): string
        toDate(): Date
        isDate(): boolean
    }
}

const CreateMultiInheritance = (constructor, value) => {
    if (!String.prototype[constructor]) {
        Object.defineProperty(String.prototype, constructor, { value });
    }
    if (!Date.prototype[constructor]) {
        Object.defineProperty(Date.prototype, constructor, { value });
    };
}

function CallDifference(date1: Date | string, date2: string) {
    const past_date = date1 as Date;

    const current_date = date2 ? new Date(date2) : new Date();
    if (!/T|Z/.test(date2)) {
        current_date.setMinutes(current_date.getMinutes() - current_date.getTimezoneOffset());
    }

    const diff = Math.floor(current_date.getTime() - past_date.getTime());
    const day = 1000 * 60 * 60 * 24;

    const seconds = parseFloat((diff / 1000).toFixed(1));
    const minutes = parseFloat((seconds / 60).toFixed(1));
    const hours = parseFloat((minutes / 60).toFixed(1));
    const days = parseFloat((hours / 24).toFixed(1));
    const months = Math.ceil(days / 31);
    const years = parseFloat((months / 12).toFixed(1));

    return { seconds, minutes, hours, days, months, years };
}

function DiffSeconds(date2) {
    const self = this instanceof Date ? this : new Date(this);
    const target = date2 instanceof Date ? date2 : date2.toDate();
    const { seconds } = CallDifference(self, target)
    return seconds;
}

function DiffMinutes(date2) {
    const self = this instanceof Date ? this : new Date(this);
    const target = date2 instanceof Date ? date2 : date2.toDate();
    const { minutes } = CallDifference(self, target)
    return minutes;
}

function DiffHours(date2) {
    const self = this instanceof Date ? this : new Date(this);
    const target = date2 instanceof Date ? date2 : date2.toDate();
    const { hours } = CallDifference(self, target)
    return hours;
}


function DiffDays(date2) {
    const self = this instanceof Date ? this : new Date(this);
    const target = date2 instanceof Date ? date2 : date2.toDate();
    const { days } = CallDifference(self, target)
    return days;
}

function DiffMonths(date2) {
    const self = this instanceof Date ? this : new Date(this);
    const target = date2 instanceof Date ? date2 : date2.toDate();
    const { months } = CallDifference(self, target)
    return months;
}


function DiffYears(date2) {
    const self = this instanceof Date ? this : new Date(this);
    const target = date2 instanceof Date ? date2 : date2.toDate();
    const { years } = CallDifference(self, target)
    return years;
}

if (!Date.prototype.DiffYears) {
    Object.defineProperty(Date.prototype, 'DiffSeconds', { value: DiffSeconds });
    Object.defineProperty(Date.prototype, 'DiffMinutes', { value: DiffMinutes });
    Object.defineProperty(Date.prototype, 'DiffHours', { value: DiffHours });
    Object.defineProperty(Date.prototype, 'DiffDays', { value: DiffDays });
    Object.defineProperty(Date.prototype, 'DiffMonths', { value: DiffMonths });
    Object.defineProperty(Date.prototype, 'DiffYears', { value: DiffYears });
};


CreateMultiInheritance('isDate', function isDate() {
    const self = this instanceof Date ? this : new Date(this);
    return !isNaN(Date.parse(self))
})


CreateMultiInheritance('toDate', function toDate() {
    const self = this instanceof Date ? this : new Date(this);

    if (!/T|Z/.test(this)) {
        self.setMinutes(self.getMinutes() - self.getTimezoneOffset());
    }

    return self || undefined;
})

CreateMultiInheritance('Date', function date() {
    const self = this instanceof Date ? this : new Date(this);
    const result = self.toLocaleDateString();
    return result !== 'Invalid Date' ? result : undefined;
})


CreateMultiInheritance('Time', function time() {
    const self = this instanceof Date ? this : new Date(this);
    const result = self.toLocaleTimeString();
    return result !== 'Invalid Date' ? result : undefined;
})

CreateMultiInheritance('DateTime', function DateTime() {
    const self = this instanceof Date ? this : new Date(this);
    const result = self.toLocaleString();
    return result !== 'Invalid Date' ? result : undefined;
})
