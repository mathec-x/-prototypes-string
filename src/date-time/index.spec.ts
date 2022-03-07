import './index'

describe('Date Time Functions', () => {
    const date = new Date(2022, 2, 20, 17, 30)
    expect(date.toISOString()).toEqual('2022-03-20T20:30:00.000Z');

    it('Should format as date', () => {
        expect(date.Date()).toBe('20/03/2022');
    });

    it('Should format as time', () => {
        expect(date.Time()).toBe('17:30:00');
    });

    it('Should format as datetime', () => {
        expect(date.DateTime()).toBe('20/03/2022 17:30:00');
    });
})