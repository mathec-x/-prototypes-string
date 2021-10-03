export { }
declare global {
    interface String {
        /**
        * Regex test if match email
        */
        TestMail(): String
    }
}

function TestMail(this: string) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g.test(this);
};

if (!String.prototype.TestMail) {
    Object.defineProperty(String.prototype, 'TestMail', {
        value: TestMail
    });
}