export class Todo {
  constructor(
    public id: number,
    public title: string,
    public content: string
  ) {}
}

/**
 * ランダム値
 * @param {number?} myStrong
 * @return {number}
 */
export const getRandomID = (myStrong?: number) => {
  let strong: number;

  myStrong ? (strong = myStrong) : (strong = 100);
  return new Date().getTime() + Math.floor(strong * Math.random());
};
