 import React from 'react'
 
 function Footer() {
     let footerStyle = {
         position: "absolute",
         top: "92vh",
         width: "100%",
         border: "2px solid red"
     }
   return (
     <div className='bg-dark text-light py-2' style={footerStyle}>
         <p className='text-center'>
         Copyright &copy; MyTodo.com
         </p>
         </div>
   )
 }
 
 export default Footer