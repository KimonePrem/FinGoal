export class Goal {
  name: string;
  contributionPercentage: number;
  goalDate?: Date;
  goalAmount?: number;

  constructor() {
  }

  getGoalDateString() {
    let date = this.goalDate.getDate().toString();
    if(date.length == 1){
      date = "0" + date;
    }

    let month = this.goalDate.getMonth().toString();
    if(month.length == 1){
      month = "0" + month;
    }

    return date + '-' + month + '-' + this.goalDate.getFullYear();
  }

  setGoalDate(dateString: string){
    const dateSplitArray = dateString.split("-");

    this.goalDate = new Date();
    this.goalDate.setDate(Number.parseFloat(dateSplitArray[0]));
    this.goalDate.setMonth(Number.parseFloat(dateSplitArray[1]));
    this.goalDate.setFullYear(Number.parseFloat(dateSplitArray[2]));
  }

}
