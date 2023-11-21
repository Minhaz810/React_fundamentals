import useWindowWidth from "./hooks/useWindowWidth"

export default function Layout(){
    const onSmallScreen=useWindowWidth()
    return(
        <div>
            <h1>You are browsing on a {onSmallScreen?"Small":"Large"} screen</h1>
        </div>
    )
}