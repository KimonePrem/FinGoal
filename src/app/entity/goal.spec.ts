import {Goal} from './Goal';

describe('Goal', () => {

  it('should convert firebase string date to date type', () => {
    let date: Date = Goal.convertFirebaseStringDateToDateType('22-04-2020');
    expect(date.getFullYear()).toEqual(2020);
    expect(date.getMonth()).toEqual(4);
    expect(date.getDate).toEqual(22);
  });

  it('should convert empty firebase string date to date type', () => {
  });

  it('should convert null firebase string date to date type', () => {
  });

});
