
const button = document.querySelector('.btn');

//add event listener to activate the notification
button.addEventListener('click', () => {
    //request user permission
    Notification.requestPermission().then(perm => {
        
        //if granted... define the notification to send
        if (perm === 'granted') {
            new Notification('Match update.', {
                body: 'Man Utd vs Everton starts in 2 hours',
                tag: "match update",
                icon: `./images/ManchesterUnitedIcon.png`
                
            })
        }
    })
})
