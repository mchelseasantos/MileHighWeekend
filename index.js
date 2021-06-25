//Global Variables
const activityUrl = 'http://www.boredapi.com/api/activity?type=social'

//Fetch
function getData(){
    fetch(activityUrl)
    .then(res => res.json())
    .then(function(activityData) {
        let activity = document.querySelector('.text')
        const p = document.createElement('p')
        p.innerHTML = activityData.activity 
        activity.innerHTML = p.innerHTML
    }
)}
getData()

//Activity button eventListener
 function activityGenerator(){
     const activityBtn = document.getElementById('button')
     activityBtn.addEventListener('click', (e) => {
        e.preventDefault()
        getData()
     })
 }
 activityGenerator()



