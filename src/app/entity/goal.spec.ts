import {Goal} from './Goal';

describe('Goal', () => {

  it('should convert firebase string date to date type', () => {
    let date: Date = Goal.convertFirebaseStringDateToDateType('22-04-2020');
    expect(date.getFullYear()).toEqual(2020);
    expect(date.getMonth()).toEqual(4);
    expect(date.getUTCDate()).toEqual(22);
  });

  it('should convert empty firebase string date to date type', () => {
    let date: Date = Goal.convertFirebaseStringDateToDateType('');
    expect(date.getFullYear()).toEqual(NaN);
  });

  it('should convert null firebase string date to date type', () => {
    let date: Date = Goal.convertFirebaseStringDateToDateType(null);
    expect(date.getFullYear()).toEqual(NaN);
  });

});
