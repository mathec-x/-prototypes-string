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
}

function Format(this: string|number, mask: string, placeholder = '0') {
    var s = '' + this, r = '';
    while (s.length < mask.match(/#/g).length) s = placeholder + s;

    for (var im = 0, is = 0; im < mask.length && is < s.length; im++) {
        r += mask.charAt(im) === '#' ? s.charAt(is++) : mask.charAt(im);
    }
    return r;
}

if (!String.prototype.Format) {
    Object.defineProperty(String.prototype, 'Format', {
        value: Format
    });
}

if (!Number.prototype.Format) {
    Number.prototype.Format = Format;
}