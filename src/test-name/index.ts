export { }
declare global {
    interface String {
        /**
        * Regex test if match full name
        */
        TestName(): String
    }
}

function TestName(this: string) {
    return /^[a-z\u00C0-\u017F]{3,}([-']?[a-z\u00C0-\u017F]+)*( [a-z\u00C0-\u017F]{2,}([-']?[a-z\u00C0-\u017F]+)*)+$/gi.test(this);
};

if (!String.prototype.TestName) {
    Object.defineProperty(String.prototype, 'TestName', {
        value: TestName
    });
}