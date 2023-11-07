import Emoji from "./Emoji";

class Text extends Emoji{
    constructor(props){
        super(props) //parent class এর constructor কে call করে দিবে।
    }
    render(){
        const decoratedText=this.addEmoji("I love Javascript",'😁')
        return super.render(decoratedText)
    }
}
export default Text
/* 
এখানে props হিসেবে Emoji এর constructor এর ভেতর যা কিছু আছে সব চলে এসেছে।
আমরা Emoji এর constructor এর ভেতরই addemoji fucntion দিয়েছি,add emoji কিন্তু এখানে 
কোনো method না।
Like
class Emoji {
  constructor() {

    this.addEmoji = function (emoji) {
      this.emojis.push(emoji);
    };
  }
}


==>আমি যখন super.render call করলাম তখন আসলে emoji class(parent) এর render call হলো। ,কিন্তু সেই render টা কিন্তু 
    আমাদের decorated text কে render করবে না,সে render করবে তার ভেতর যেই টেক্সট ছিলো সেইটা কে।

==>তাই আমরা একটা কাজ করতে পারি,emoji class এর render এর ভেতর একটা parameter pass করে দিতে পারি ,যেটা আসলে 
    emoji class এর render কে overwrite করে।

==>APP.jsx এ Text কে import করে বসিয়ে দিলেই আমরা output দেখতে পাবো।

কিন্তু এই ধরণের approach এর কিছু problem আছে।

==> components are tightly coupled.
    অর্থ্যাৎ আমি যদি আমাদের Emoji component delete করে দেই,তাহলে Text  component কাজ করবে না।

==> from child, it's not clear what parent does
    আমরা Text component থেকে আসলে বুঝতে পারছি না যে Emoji Component কি করছে

==> not clear about the parent child relation
    আমরা app level এ শুধু Text কে এনেছি,কিন্তু আমরা app level থেকে বুঝতে পারছি না যে Text এর সাথে emoji 
    এর সম্পর্ক কি।

==> Future components are tightly coupled.
    পরবর্তীতে আমাদের যতগুলো component emoji কে extend করবে সবাই আসলে tightly coupled হয়ে যাবে।

==> Nested extend - child that already extend other parent
    যদি এমন হয় যে আমাদের Text already Emoji কে extend করছে,কিন্তু সে চায় অন্য একটা parent কেও 
    extend করতে,তাহলে সে সেটা করতে পারবে না।

এই সব problem solve করার জন্যই আমরা composition ব্যাবহার করি।
*/