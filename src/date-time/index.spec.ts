import './index'

describe('Date Time Functions', () => {
    const date = new Date(2022, 2, 20, 17, 30)
    const string = date.toISOString();
    expect(string).toEqual('2022-03-20T20:30:00.000Z');

    it('Should calc one hour difference seconds', () => {
        expect(date.DiffSeconds('2022-03-20T21:30:00.000Z')).toBe(3600);
    });

    it('Should calc one hour difference minutes', () => {
        expect(date.DiffMinutes('2022-03-20T21:30:00.000Z')).toBe(60);
    });

    it('Should calc one day difference hours', () => {
        expect(date.DiffHours('2022-03-21 20:30:00.000')).toBe(24);
    });

    it('Should calc one year difference days', () => {
        const str = '2021-03-20';
        expect(str.toDate().DiffDays('2022-03-20')).toBe(365);
    });

    it('Should calc one year difference', () => {
        const str = '2022-02-01';
        expect(str.toDate().DiffHours('2023-02-01')).toBe(8760);
        expect(str.toDate().DiffDays('2023-02-01')).toBe(365);
        expect(str.toDate().DiffMonths('2023-02-01')).toBe(12);
        expect(str.toDate().DiffYears('2023-02-01')).toBe(1);
    });

    it('Should calc one year difference in year', () => {
        const str = '2021-03-20T00:00:00.000Z';
        expect(str.toDate().DiffYears('2022-03-19T00:00:00.000Z')).toBe(1);
    });

    it('Should string invalid date', () => {
        expect('2022/20/01'.isDate()).toBe(false) ;
    });

    it('Should string valid date', () => {
        expect('2022-12-01'.isDate()).toBe(true) ;
    });

    it('Should convert string to datetime object', () => {
        expect(string.toDate()).toBeInstanceOf(Date);
    });

    it('Should convert string to date', () => {
        expect('2022-03-20 00:00'.Date()).toBe('20/03/2022');
    });

    it('Should convert string to time', () => {
        expect('2022-03-20 23:20'.Time()).toBe('23:20:00');
    });

    it('Should format as date', () => {
        expect(date.Date()).toBe('20/03/2022');
    });

    it('Should format date as time', () => {
        expect(date.Time()).toBe('17:30:00');
    });

    it('Should format as datetime', () => {
        expect(date.DateTime()).toBe('20/03/2022 17:30:00');
    });
})