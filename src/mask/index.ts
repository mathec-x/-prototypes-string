export { }
declare global {
    interface String {
        Mask(mask: "cpf" | "cnpj" | "phone"): string
    }
    interface Number {
        Mask(mask: "cpf" | "cnpj" | "phone"): string
    }
}

function Mask(this: any, mask: "cpf" | "cnpj" | "phone") {
    switch (mask) {
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