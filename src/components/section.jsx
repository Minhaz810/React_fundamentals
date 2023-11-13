import Content from "./content"
export default function Section({theme}){
    return(
        <div>
            <h1>
                This is a section
            </h1>
            <Content theme={theme}/>

        </div>
    )
}