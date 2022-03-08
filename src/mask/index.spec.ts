import './index'

describe('Mask Functions', () => {
    
    it('should add dots on milhar', () => {
        const number = 1e6;
        expect(number.Mask('milhar')).toBe('1.000.000');
    })

    it('should k-formatter show 1e3K', () => {
        const number = 1e4;
        expect(number.Mask('k-formatter')).toBe('10k')
    })

    it('should k-formatter show 1e6M', () => {
        const number = 1e7;
        expect(number.Mask('k-formatter')).toBe('10M')
    })

    it('should k-formatter show 1e9G', () => {
        const number = 1000000000;
        expect(number.Mask('k-formatter')).toBe('1G')
    })

})