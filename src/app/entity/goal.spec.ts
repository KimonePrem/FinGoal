import {Goal} from './Goal';

describe('Goal', () => {

  it('should return that a due date and goal amount has not been added', () => {
    const goal = new Goal();
    expect(goal.isGoalAmountPresent()).toBeFalse();
    expect(goal.isGoalDueDatePresent()).toBeFalse();
  });

  it('should return that a due date goal amount has been added', () => {
    let goal = new Goal();
    goal.goalDate = new Date();
    goal.goalAmount = 100.00;
    expect(goal.isGoalAmountPresent()).toBeTrue();
    expect(goal.isGoalDueDatePresent()).toBeTrue();
  });

  it('should return date value as formatted string with single digit month and date', () => {
    let date: Date = new Date();
    date.setFullYear(2020, 2, 5);
    let goal: Goal = new Goal();
    goal.goalDate = date;
    expect(goal.getGoalDateString()).toEqual('05-02-2020');
  });

  it('should return date value as formatted string', () => {
    let date: Date = new Date();
    date.setUTCFullYear(2020);
    date.setMonth(11);
    date.setDate(12);
    let goal: Goal = new Goal();
    goal.goalDate = date;
    expect(goal.getGoalDateString()).toEqual('12-11-2020');
  });

  it('should convert firebase string date to date type', () => {
    let date: Date = Goal.convertFirebaseStringDateToDateType('22-04-2020');
    expect(date.getFullYear()).toEqual(2020);
    expect(date.getMonth()).toEqual(4);
    expect(date.getUTCDate()).toEqual(22);
  });

  it('should convert date input string to firebase date string', () => {
    const convertedDate: string = Goal.convertDateInputStringToFirebaseDateString('2020-07-09');
    expect(convertedDate).toEqual('09-07-2020');
  });

  it('should convert date type to date input string', () => {
    let date: Date = Goal.convertFirebaseStringDateToDateType('22-04-2020');
    expect(date.getFullYear()).toEqual(2020);
    expect(date.getMonth()).toEqual(4);
    expect(date.getUTCDate()).toEqual(22);

    const convertedDate: string = Goal.convertDateTypeToDateInputString(date);
    expect(convertedDate).toEqual('2020-04-22');
  });

});
