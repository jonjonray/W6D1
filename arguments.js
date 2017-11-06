//sum

function sum(arg1,arg2,...more){
  let sums = arg1 + arg2;
  for (let i = 0; i < more.length; i++) {
    sums += more[i];
  }
  return sums;
}

console.log(sum(3,2,1));



Function.prototype.myBind = function myBind(context, ...moreArgs){

  let that = this;

  return function returnFunction(...ctArgs){
    that.apply(context,moreArgs.concat(ctArgs));
  };
};


function curriedSum(numArgs){
  let numbers = [];
  return function _curriedSum(num){
    numbers.push(num);

    if (numbers.length === numArgs) {
      return numbers.reduce((acc,el) => {
        return acc + el;
      });
    }else {
      return _curriedSum;
    }
  };
}

// const currySum = curriedSum(4);
// console.log(currySum(3)(2)(1)(2));

Function.prototype.curry = function curry(numArgs) {
  let args = [];
  let that = this;
  return function _curry(arg){
    args.push(arg);
    if (args.length === numArgs){
      return that.apply(that,args);
    } else {
      return _curry;
    }
  };
};
