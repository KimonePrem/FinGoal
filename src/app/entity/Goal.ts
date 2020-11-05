export class Goal {
  name: string;
  contributionPercentage: number;
  goalDate?: Date;
  goalAmount?: number;

  constructor() {
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

  // ToDo: write tests for due date conversion in Goal class

  static convertFirebaseStringDateToDateType(dateFirebase: string): Date {
    if (dateFirebase != null) {
      const dateSplitArray = dateFirebase.split('-');

      let date = new Date();
      date.setDate(Number.parseFloat(dateSplitArray[0]));
      date.setMonth(Number.parseFloat(dateSplitArray[1]));
      date.setFullYear(Number.parseFloat(dateSplitArray[2]));

      return date;

    } else {
      return null;
    }
  }

  static convertDateInputStringToFirebaseDateString(dateInput: string): string {
    if (dateInput != null) {
      const dateSplitArray = dateInput.split('-');
      return dateSplitArray[2] + '-' + dateSplitArray [1] + '-' + dateSplitArray[0];
    } else {
      return null;
    }
  }

}
