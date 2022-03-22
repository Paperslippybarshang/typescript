type Profile = { 
    name: string,
    age: number,
    plusOne: (x: number) => number,
    changeName: () => void
}

let 회원정보: Profile = {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }

type CutZero = (text: string) => string;
let cutZero: CutZero = function (x){
    let result = x.replace(/^0+/, "");
    return result
};

type RemoveDash = (text: string) => number;
let removeDash: RemoveDash = (x) => {
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

type NewFunction = (input: string, func1: CutZero, func2: RemoveDash) => void;
const newFunc:NewFunction = (x, cutZero, removeDash) => {
    const res2 = cutZero(x);
    const res3 = removeDash(res2);
    console.log(res3);
}