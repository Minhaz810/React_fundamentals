function BoilingVerdict({celcius=0}){
    if(celcius>=100){
        return <p>Water Would Boil</p>
    }else if(celcius<=0){
        return <p>Water Would Freeze</p>
    }
    return <p>Water Would Not Boil</p>
}
export default BoilingVerdict;