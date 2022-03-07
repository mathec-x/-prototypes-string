import './index'

describe('String.Format', () => {
    it('Should return cpf with zero left in string', () => {
        const target = '23';
        const test = target.Format('###.###.###-##');
        expect(test).toBe('000.000.000-23');
    
    });

    it('Should return zero left in number', () => {
        const target = 23;
        const test = target.Format('#####');
        expect(test).toBe('00023');
    });

    it('Should format date', () => {
        expect(new Date('2022-03-20 17:30').Format('yyyy-mm-dd')).toBe('2022-03-20');
        expect(new Date('2022-03-20 17:30').Format('dd/mm/yyyy hh:ii')).toBe('20/03/2022 17:30');
        expect(new Date(2022, 2, 20, 17, 30).Format('dd/mm/yyyy hh:ii')).toBe('20/03/2022 17:30');
    });
})