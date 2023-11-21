import useWindowWidth from "./hooks/useWindowWidth"

export default function Layout2(){
    const onSmallScreen=useWindowWidth(500)
    console.log(onSmallScreen)
    return(
        <div className={onSmallScreen?"Small":"Large"}>
            <h1>You are browsing on a {onSmallScreen?"Small":"Large"} screen</h1>
        </div>
    )
}