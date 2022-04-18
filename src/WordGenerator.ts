const size = (high: number, low: number): number => {
    let s: number = Math.floor(Math.random() * (high - low)) + low;
    return s;
}

export const generateWord = (): string => {
    let text: string = "";
    let combination: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()+=?<>,.";
    let len = size(8, 3);
    for(let i=0; i<len; i++)
      text += combination.charAt(Math.floor(Math.random()*combination.length));

    return text;
  }