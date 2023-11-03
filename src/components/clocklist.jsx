import Clock from "./Clock";

function Clocklist({quantities}){
    return(
        <>
        <div>
            {quantities.map((key)=>(
                <Clock key={key}/>

            ))}
        </div>
        <div>
            {quantities.map((key)=>(
                <Clock key={key}/>
            ))}
        </div>
    </>
    );

}
export default Clocklist;

/* 
    <div>
            {quantities.map((key)=>(
                <Clock key={key}/>

            ))}
        </div>

    এখানে আসলে clock এর array পাচ্ছি আমি অর্থ্যাৎ

    [ <Clock/>,<Clock/>,<Clock/>]

    React এর বৈশিষ্ট্য হচ্ছে,সে array পেলে একটার পর একটা element render করে দেয়।
*/