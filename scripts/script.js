const app = initializeApp(firebaseConfig)
const form= document.getElementById("contactForm")
function formSubmit(){
    ((event)=>{event.preventDefault()})(event);

    let address_style = form['Addressing'].value ;
    let fname = form['fnameInput'].value;
    let lname = form['lnameInput'].value;
    let country = form['countries'].value;
    let email=form['emailInput'].value;
    let phoneNumber = form['phoneNum'].value;
    const infoMap = new Map([
        ['FirstName',fname],
        ['LastName',lname],
        ['country',country],
        ['Email',email],
        ['PhoneNumber',phoneNumber],
    ]);
    console.log(infoMap)
    const j = JSON.stringify(Object.fromEntries(infoMap));
    sessionStorage.setItem('u',j);
    console.log(j);
    window.location.href="./confirmation.html"

}
function getContactData(){
    const data= sessionStorage.getItem('u')
    console.log(data)

}

function confirmationOnload(){
    getContactData()
}