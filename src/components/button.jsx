import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change: currentChange,locale: currentLocale}= this.props //this.props এর change এর ভ্যালু currentChange এর ভেতর assign হবে 
        const {change: nextChange,locale:nextLocale} =nextProps;
        if(currentChange===nextChange && currentLocale===nextLocale){
            return false
        }else{
            return true
        }
    }
    render(){
        const {change,locale,show,enable} =this.props
        console.log(this.props)
        if(!enable) return null; //শুধু return দিলে হবে না ,অর্থ্যাত যেই clock এর enable false সেই clock এর button render ই হবে না।
        return(
            <>
            <button onClick={()=>change(locale)}>
                
                {locale==='bn-BD'?'Click Here' : 'ক্লিক করুন'}
                
            </button>
            <p>{show===true? "Hello":""}</p>
            </>
            
        )
        
        
    }
}

export default Button;
/* 

কন্ডিশনাল রেন্ডারের পর বাটনের টেক্সট কিভাবে চেইঞ্জ হচ্ছে:

==>clock component এর locale default ="en-US" আছে।

==>condition এটা দেখলো এবং button কে বানিয়ে দিলো এরকম

    button=(<Button change={this.handleClick} locale="bn-BD"/>)

==>এবার আমাদের button component এখান থেকে props হিসেবে "bn-BD" receive করলো।

==> যেহেতু props "bn-BD" তাই 

    {locale==='bn-BD'?'Click Here' : 'ক্লিক করুন'}

    এই condition অনুযায়ী button এর Text "click here"

    কিন্তু বুঝতে হবে,ঘড়ি কিন্তু এখনো change হয় নাই,english ই আছে,কারণ আমরা button এখনো click করি নাই।

    অর্থ্যাৎ clock ও English, button এর text ও English।

==> Button এ ক্লিক করলাম, Clock এর props হয়ে গেলো "bn-BD",clock হয়ে গেলো বাংলা

==>condition এটা দেখলো এবং button কে বানিয়ে দিলো এরকম

    button=(<Button change={this.handleClick} locale="en-US"/>)

==>আমাদের button component এখান থেকে props হিসেবে "en-US" receive করলো।

==> যেহেতু props "en-US" তাই 

    {locale==='bn-BD'?'Click Here' : 'ক্লিক করুন'}

    এই condition অনুযায়ী button এর Text "ক্লিক করুন"

    এবার clock ও বাংলা ,button এর টেক্সট ও বাংলা।



ধরলাম আমরা চাচ্ছি <p>Hello</p> দেখাতে,তাহলে আমরা যেটা করবো,

{locale ==="bn-BD" ? 
                    button=(<Button change={this.handleClick} locale="en-US" show={false}/>):
                          button=(<Button change={this.handleClick} locale="bn-BD" show />)}

clock এ এরকম বলে দিলাম।

আগের মতোই, বাংলা clock এর button এ locale ="en-US" দেয়া, এবং সেখানে show ={false} দেয়া,

ইংরেজি clock এর button এ locale ="bn-BD" দেয়া, এবং সেখানে show={true}/শুধু show দেয়া।

এবার আমরা দেখবো 

<p>{show===true? "Hello":""}</p>

অর্থ্যাৎ বাংলা clock এ hello দেখাবে না
ইংরেজি clock এ hello দেখাবে।

চাইলে এটাকে আমরা এভাবে লিখতে পারি,

{show && <p>Hello</p>} 

javascript এ trur and element রিটার্ন করে element টাকে

*/