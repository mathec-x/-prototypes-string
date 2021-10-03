export { }
declare global {
    interface String {
        /**
        * Regex test match password strenght
        *
        * default but configurable
        * 6 min different digits
        * have number
        * have special char
        * have upper case letter
        * have lower case letter
        */
        TestPassword(config: typeof defaultConfig ): "MinDigits" | "Number" | "LowerCase" | "UpperCase" | "SpecialChar" | "Ok"
    }
}

const defaultConfig = {
    minDigits: 6,
    upperCase: true,
    number: true,
    specialChar: true,
    lowerCase: true
}

function TestPassword(this: string, config: typeof defaultConfig) {
    config = { ...defaultConfig,  ...config };

        if(this.length < config.minDigits)
            return 'MinDigits'
        if(!/\d/.test(this) && config.number)
            return 'Number'
        if(!/[a-z]/.test(this) && config.lowerCase)
            return 'LowerCase'
        if(!/[A-Z]/.test(this) && config.upperCase)
            return 'UpperCase'
        if(!/[!@#$%^&*()\-_=+{};:,<.>]/.test(this) && config.specialChar)
            return 'SpecialChar'

        return "Ok";
};

if (!String.prototype.TestPassword) {
    Object.defineProperty(String.prototype, 'TestPassword', {
        value: TestPassword
    });
}