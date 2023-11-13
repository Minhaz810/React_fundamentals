export default function User({render}){
    return render(true)
}

/* 
==>যেহেতু এখানে আমরা props আকারে function receive করেছি,তাই outPut দেখতে হলে অবশ্যই
    ফাংশনকে call করতে হবে।
==>যেহেতু ফাংশনের ভেতর isLoggedIn নামে parameter আছে,তাই call করার সময় অবশ্যই parameter এর 
    value আমাদেরকে বলে দিতে হবে।
==>আমরা যদি খেয়াল করি,আমাদের component এর ভেতর কোনো render logic নাই,আমাদের component টা
    কি render করবে সেটা outsource হয়ে বাইরে চলে এসেছে। অর্থাৎ আমাদের component টা কি render 
    করবে সেটা সে নিজেই জানে না।
==>

*/
