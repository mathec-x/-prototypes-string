import { Currencys, Locales, StringToFloat } from "../utils";

declare global {
    interface String {
        /**
        * Formatting money based on currency and locale
        */
        Money(locale?: Locales, props?: Props ): string
    }
    interface Number {
        /**
        * Formatting money based on currency and locale
        */
        Money(locale?: Locales, props?: Props ): string
    }

};

let currentLocale: Locales = 'pt-BR';
let numberFormatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'BRL'
}

interface Props extends Intl.NumberFormatOptions {
    currency: Currencys
}

export function setMoneyLocale(locale: Locales, rest : Props ){
    if(locale) currentLocale = locale;

    numberFormatOptions = {
        ...numberFormatOptions,
        ...rest
    };
};

function Money(this: string|number, locale : Locales = currentLocale, props : Props) {
    return Intl.NumberFormat(locale, props || numberFormatOptions ).format(StringToFloat(this));
}

if (!Number.prototype.Money) {
    Number.prototype.Money = Money;
    if (!String.prototype.Money) { 
        Object.defineProperty(String.prototype, 'Money', { value:Money });
    };
};