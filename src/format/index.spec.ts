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
    
    it('Should format string to datetime', () => {
        expect('2022-03-20 17:30:00'.Format('dd/mm/yyyy hh:ii')).toBe('20/03/2022 17:30');
    });

    it('Should format string TZ to datetime', () => {
        expect('2022-03-20T17:30:00.000Z'.Format('dd/mm/yyyy hh:ii')).toBe('20/03/2022 17:30');
    });


    it('Should format date', () => {
        expect(new Date('2022-03-20').Format('yyyy-mm-dd')).toBe('2022-03-20');
    });

    it('Should format date to date and time', () => {
        expect(new Date('2022-03-20T17:30:00.000Z').Format('dd/mm/yyyy hh:ii:ss')).toBe('20/03/2022 17:30:00');
    });

})