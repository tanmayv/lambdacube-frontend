export class RankPredictorInput {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public marks: number,
    public category: string
  ) {}
}

export class CollegePredictorInput {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public rank: number,
    public category: string,
    public seatPool: string
  ) {}
}
  
export class RankInfo {
  constructor(
    public category: string,
    public marks: number,
    public minRank: number,
    public maxRank: number,
  ) {}
}
