const typed = new Typed('.text',{
    strings: ["Social Influencer", "Web Designer", "Frontend developer", "UI/UX Enthusiast"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    let inputName = document.getElementById('inputName');
    let inputEmail = document.getElementById('inputEmail');
    let inputPhone = document.getElementById('inputPhone');
    let inputText = document.getElementById('inputText');
    let inputMessage = document.getElementById('inputMessage');

    //Required Error
    let RequiredNameError = document.getElementById('RequiredNameError');
    let RequiredPhoneError = document.getElementById('RequiredPhoneError');
    let RequiredEmailError = document.getElementById('RequiredEmailError');
    let RequiredSubjectError = document.getElementById('RequiredSubjectError');
    let RequiredMessageError = document.getElementById('RequiredMessageError');

let nameRegex = /^[a-zA-Z]{3,30}$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let phoneRegex = /^(\+92|0)3[0-9]{9}$/;

let isValid = true;
let isRequired = true;

// Validate name
if (inputName.value == '') {
    RequiredNameError.innerText = 'Name is required!';
    isRequired = false;
}
else
{
    RequiredNameError.innerText = '';
}
if (inputEmail.value == '') {
    RequiredEmailError.innerText = 'Email is required!';
    isRequired = false;
}
else
{
    RequiredEmailError.innerText = '';
}
if (inputPhone.value == '')
    {
    RequiredPhoneError.innerText = 'Phone is required!';
    isRequired = false;
}
else
{
    RequiredPhoneError.innerText = '';
}
if (inputText.value == '')
    {
    RequiredSubjectError.innerText = 'Subject is required!';
    isRequired = false;
}
else
{
    RequiredSubjectError.innerText = '';
}
if(inputMessage.value == '')
    {
    RequiredMessageError.innerText = 'Message is required!';
    isRequired = false;
}
else
{
    RequiredMessageError.innerText = '';
}
if (!nameRegex.test(inputName.value))
    {
    document.getElementById('Name-error').innerText = 'Name error: Must be 3-30 letters';
    console.error('Invalid name');
    isValid = false;
}
else
{
    document.getElementById('Name-error').innerText = '';
}

// Validate email
if(!emailRegex.test(inputEmail.value))
    {
    document.getElementById('Email-error').innerText = 'Email error: Invalid email format';
    console.error('Invalid email');
    isValid = false;
}
else
{
    document.getElementById('Email-error').innerText = '';
}

// Validate phone number
if
(!phoneRegex.test(inputPhone.value))
{
    document.getElementById('Phone-error').innerText = 'Phone error: Invalid phone format';
    console.error('Invalid phone number');
    isValid = false;
}
else
{
    document.getElementById('Phone-error').innerText = '';
}

if (isRequired) {
if (isValid) {

    // document.getElementById('contactFormContainer').style.display = 'none';

    document.getElementById('thankYouMessage').style.display = 'block';
}
}
});
