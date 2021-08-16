//console.log("connected");


//১. আমি যদি বলি কোন একটা এলিমেন্ট কে সিলেক্ট করে নিয়ে এসে console log করে দেখাতে হবে। তুমি কি সেটা করে দেখাতে পারবে? 

const womenHeaders = document.getElementById('get-header-id');
console.log(womenHeaders.innerText);


//২. সেখানে একদম হেডার এ একটা buy now বাটন আছে। সেই বাটনে একটা ক্লিক হ্যান্ডলার যোগ করতে হবে? সেটা কি করতে পারবে? যদি পারো তাহলে সেই বাটনে ক্লিক করলে উপরে যেখানে BE THE PENGUIN এই কথাগুলো আছে সেখানে BE THE PENGUIN এর পরিবর্তে "I AM PENGUIN" কথাটা লিখে দিতে পারবে? 


// const heading = document.getElementById('get-heading');
// console.log(heading.innerText);


document.getElementById('get-buy-btn').addEventListener('click', function () {
    const heading = document.getElementById('get-heading');
    heading.innerText = "I AM PENGUIN";
});

