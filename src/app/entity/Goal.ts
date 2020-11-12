export class Goal {
  name: string;
  contributionPercentage: number;
  goalDate?: Date;
  goalAmount?: number;

  constructor() {
  }

  isGoalDueDatePresent(): boolean {
    try {
      return this.goalDate.getDate() > 0;
    } catch (e) {
      return false;
    }
  }

  isGoalAmountPresent() {
    try {
      return this.goalAmount > 0;
    } catch (e) {
      return false;
    }
  }

  getGoalDateString() {
    let date = this.goalDate.getDate().toString();
    if (date.length == 1) {
      date = '0' + date;
    }

    let month = this.goalDate.getMonth().toString();
    if (month.length == 1) {
      month = '0' + month;
    }

    return date + '-' + month + '-' + this.goalDate.getFullYear();
  }

  static convertFirebaseStringDateToDateType(dateFirebase: string): Date {
    const dateSplitArray = dateFirebase.split('-');

    let date = new Date();
    date.setDate(Number.parseFloat(dateSplitArray[0]));
    date.setMonth(Number.parseFloat(dateSplitArray[1]));
    date.setFullYear(Number.parseFloat(dateSplitArray[2]));

    return date;
  }

  static convertDateInputStringToFirebaseDateString(dateInput: string): string {
    const dateSplitArray = dateInput.split('-');
    return dateSplitArray[2] + '-' + dateSplitArray [1] + '-' + dateSplitArray[0];
  }

}
