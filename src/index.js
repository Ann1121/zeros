module.exports = function zeros(expression) {
  let array=expression.split('*');
  let count2=0, count5=0;

  for(let i=0; i<array.length; i++){

    if(array[i][array[i].length-2]!='!'){

      array[i]=array[i].substring(0, array[i].length-1);

      for(let j=1; j<=+array[i];j++){
        let k=j;
        while (k%5==0){
        count5++;
        k/=5;
      }
      while (k%2==0){
        count2++;
        k/=2;
      }
      }
    }
    else{
      array[i]=array[i].substring(0, array[i].length-2);

      if(array[i]%2==0){

        for(let j=2;j<=+array[i];j+=2){
          let k=j;
          while (k%5==0){
            count5++;
            k/=5;
          }
          while (k%2==0){
            count2++;
            k/=2;
          }
        }
      }
      else{
        for(let j=1; j<=array[i];j+=2){
            let k=j;
          while (k%5==0){
            count5++;
            k/=5;
          }
          while (k%2==0){
            count2++;
            k/=2;
          }
        }
      }
    }
  }

   return count5<count2?count5:count2;
}
