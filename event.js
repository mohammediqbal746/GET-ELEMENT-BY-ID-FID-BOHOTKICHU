function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// // {/* <script src="event.js"></script>// // এই ট্যাগটি ব্যবহার করে event.js টিকে html file এর সাথে connect করতে হবে। */}
// // handle blue button click by setting function name //

// //just set the name of the functrion//call kore diona .call korle color age show korbe//

// 
// // onclick করার ৪র্থ নিয়ম//[এই জায়গায় ফাংশন name না দিলেও সমস্যা নাই]এটাকে anonymous function বলে ।




// //haandle event by using add eventlisener.

const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}
// // handle by using add another types of eventlistener.
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});

//direct short curt
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})