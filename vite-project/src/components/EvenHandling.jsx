import React from 'react'

const EvenHandling = () => {
    
    function handleSubmit(e){
        e.preventDefault(); 
        // By default, submitting the form will reload the page. You need to use e.preventDefault() in the handleSubmit function.
        alert("Form submit kar dun kya ");
    }
    function handlechange(e){
      console.log(e.target.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handlechange} />
            <button type='submit' >Submit</button>
        </form>

        {/* //To retain form data even after reloading the page, you can use localStorage or sessionStorage. */}
    <br />

    {/* immidately envoked functions  */}
      {/* <button onClick={alert("Button clicked already")}>Button </button> */}
      {/* avoid  */}
      <button onClick={()=>alert("now button is clicked ")}>Button</button>


{/*  react  */}
  {/* <script>
    <button id="myButton">Click Me</button>
    
    const button = document.getElementById('myButton');
    
    // Option 1: Using the onclick property
    button.onclick = function () {
      alert('Button clicked!');
    };

    // Option 2: Using addEventListener
    button.addEventListener('click', function () {
      console.log('Button clicked with addEventListener!');
    }); */}
 

    </div>
  )
}

export default EvenHandling