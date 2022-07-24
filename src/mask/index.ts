export type MaskTypes = "milhar" | "k-formatter" | "cpf" | "cnpj" | "phone";

declare global {
    interface String {
        Mask(mask: MaskTypes): string
    }
    interface Number {
        Mask(mask: MaskTypes): string
    }
}

const lookup = [
    { value: 1e18, symbol: "E" },
    { value: 1e15, symbol: "P" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "k" },
    { value: 1, symbol: "" },
];

const kregexp = /\.0+$|(\.[0-9]*[1-9])0+$/;

function Mask(this: any, mask: MaskTypes) {
    switch (mask) {
        case 'milhar':
            return this
                .toString()
                .replace('.', ',')
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')

        case 'k-formatter':
            const self = parseInt(this);
            const item = lookup.slice().find((item) => self >= item.value);
            return item ? (this / item.value).toFixed(1).replace(kregexp, "$1") + item.symbol : "0";

        case 'cpf':
            return this
                .replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1')

        case 'cnpj':
            return this
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1/$2')
                .replace(/(\d{4})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1')

        case 'phone':
            return this.length <= 14
                ? this
                    .replace(/\D/g, '')
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{4})(\d)/, '$1-$2')
                : this
                    .replace(/\D/g, '')
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{5})(\d)/, '$1-$2')

        default:
            return this;
    }
}

if (!String.prototype.Mask) {
    Object.defineProperty(String.prototype, 'Mask', {
        value: Mask
    });
}

if (!Number.prototype.Mask) {
    Number.prototype.Mask = Mask;
}