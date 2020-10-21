export class Goal {
  name: string;
  contributionPercentage: number;
  goalDate?: Date;
  goalAmount?: number;

  constructor() {
  }

  getGoalDateString() {
    return this.goalDate.getDate() + '-' + this.goalDate.getMonth() + '-' + this.goalDate.getFullYear();
  }

  setGoalDate(dateString: string){
    const dateSplitArray = dateString.split("-");

    this.goalDate = new Date();
    this.goalDate.setDate(Number.parseFloat(dateSplitArray[0]));
    this.goalDate.setMonth(Number.parseFloat(dateSplitArray[1]));
    this.goalDate.setFullYear(Number.parseFloat(dateSplitArray[2]));
  }

}
