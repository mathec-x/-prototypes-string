export { }
declare global {
    interface String {
        /**
        * Returns a reformatted text from right to left with default mask as '0'
        * @example
        * '23'.Format('###.###.###-##') => '000.000.000-23'
        * '23'.Format('###.###.###-##', 'x') => 'xxx.xxx.xxx-23'
        */
        Format(mask: string, placeholder?: any): string
    }
    interface Number {
        /**
        * Returns a reformatted text with default mask as '0'
        * @example
        * 23.Format('###.###.###-##') => '000.000.000-23'
        * 23.Format('###.###.###-##', 'x') => 'xxx.xxx.xxx-23'
        */
        Format(mask: string, placeholder?: any): string
    }
    interface Date {
        Format(mask: string): string
    }
}

function Format(mask: string, placeholder = '0') {

    if (!isNaN(Date.parse(this))) {
        const self = new Date(this);

        if (!/T|Z/.test(this)) {
            self.setMinutes(self.getMinutes() - self.getTimezoneOffset());
        }
        
        return self.Format(mask);
    }

    try {
        let s = '' + this, r = '';
        while (s.length < mask.match(/#/g).length) s = placeholder + s;

        for (let im = 0, is = 0; im < mask.length && is < s.length; im++) {
            r += mask.charAt(im) === '#' ? s.charAt(is++) : mask.charAt(im);
        }
        return r;
    } catch (error) {
        return undefined;
    }
}

function DateFormat(this: Date, mask: string) {
    const self = this;
    const dateString = self.toISOString().split('');

    const formats = {
        'yyyy': dateString.slice(0, 4).join(''),
        'yy': dateString.slice(2, 4).join(''),
        'mm': dateString.slice(5, 7).join(''),
        'dd': dateString.slice(8, 10).join(''),
        'hh': dateString.slice(11, 13).join(''),
        'ii': dateString.slice(14, 16).join(''),
        'ss': dateString.slice(17, 19).join(''),
    }

    const regexp = new RegExp(Object.keys(formats).join('|'), 'g')
    const matchers = mask.match(regexp);

    for (let ix = 0; ix < matchers.length; ++ix) {
        mask = mask.replace(matchers[ix], formats[matchers[ix]])
    }
    return mask;
}

if (!String.prototype.Format) {
    Object.defineProperty(String.prototype, 'Format', { value: Format });
}

if (!Number.prototype.Format) {
    Object.defineProperty(Number.prototype, 'Format', { value: Format });
}

if (!Date.prototype.Format) {
    Object.defineProperty(Date.prototype, 'Format', { value: DateFormat })
}