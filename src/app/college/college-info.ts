export class CollegeInfo {
  collegeName!: string;
  category: string = "OPEN";
  seatPool: string = "Gender-Neutral";
  branches!: { branchName: string, openingRank: number, closingRank: number }[];
}
