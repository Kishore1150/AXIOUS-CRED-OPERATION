import React from 'react'
import emailjs from 'emailjs-com'
import './form.css'
const Form = () => {

  function sendEmail(e)
  {
    e.preventDefault();

    emailjs.sendForm('service_qpc7hgs','template_t8f1v69',e.target,"f6Lkaq3D_kXt_kYKE").then(res=>{
      console.log(res);
    }).then((success) => {
     
      alert("message sent successfully. Please check the spam folder in your mail.");
    }).catch((error) => {
        
      alert("error sending message");
    })
  }
  return (
    <div id='register'>
      <h2>Booking form</h2>
       <form onSubmit={sendEmail}> 
         
         <input type='text' name='name' placeholder='Enter Name'/>
         <input type='email' name='user_email' placeholder='ex:myname@gmail.com'/>
         <input type='number' name='number' placeholder='Enter Mobile Number'/>
         <input type='text' name='guests' placeholder='Enter No of Guests'/>
         <input type='date' name='reservation' placeholder='Enter Booking Date'/>
         <select name='type' id="type" placeholder='Please Select'>
  <option value="">Please Select</option>
  <option value="Dinner">Dinner</option>
  <option value="Birthday/Anniversary">Birthday/Anniversary</option>
  <option value="wedding">Wedding</option>
  <option value="VIP/Mezzanine">VIP/Mezzanine</option>
  <option value="party">Party</option>
  <option value="other">Other</option>
      </select>
         <textarea name='message' rows='2 ' placeholder='Any Special requests'/>
         <input class='button' type='submit' value='Reserve'/>
       

       </form>

    </div>
  )
}

export default Form;