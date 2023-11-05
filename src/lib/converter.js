export function toCelcius(farenhite){
    return ((farenhite-32))*5/9
}

export function toFarenhite(celcius){
    return (9/5)*celcius +32
}

export function convert(temperature,convertTo){ //convertTo তে ফাংশন pass করে দিতে হবে।
  const input=parseFloat(temperature);
  if(input==NaN){
    return ''
  }
  const output=convertTo(input); //converTo টা হচ্ছে সেই ফাংশনটা যেটাকে convert এ pass করেছি
  const rounded=Math.round(output*1000)/1000;
  return rounded.toString()  // যেহেতু এটাকে props হিসেবে পাঠাবো তাই string আকারেই পাঠালাম।
}