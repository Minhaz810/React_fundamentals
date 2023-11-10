class Context{
    constructor(value){
        this.value=value //আমরা provider এর value হিসেবে যেই সেটা।
    }
    provider=({children,value})=>{ //children: provider এর ভেতর wrap করা component (section)
        this.value=value; //value object থেকে value টা (theme) destructured হয়ে এসে পড়লো।
        return children;
    }
    Consumer=({children})=>children(this.value)  //এখানে children হচ্ছে consumer এর ভেতর wrap করা function
}

function createContext(value=null){
    const context=new Context(value)

    return {
        Provider: context.provider,
        Consumer: context.Consumer,
    }
        

}
export default createContext