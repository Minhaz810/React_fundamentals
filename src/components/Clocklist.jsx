import Clock from "./Clock";

function ClockList({quantities}){
    return(
        <>
         {quantities.map((nums)=>(
            <Clock/>
         )
            )}
        </>
    )
}
export default ClockList