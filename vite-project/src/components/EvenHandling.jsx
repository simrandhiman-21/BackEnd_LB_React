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

      



    </div>
  )
}

export default EvenHandling