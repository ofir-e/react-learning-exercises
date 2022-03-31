import { useState } from 'react';

// fix this, make sure isSubmitted is true after submitting the form
function Ex7Form() {
  // but dont change this line or add any state
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (<form onSubmit={() => {
    setIsSubmitted(true);
  }}>
    <p>make sure isSubmitted stays true</p>
    <p>isSubmitted = {`${isSubmitted}`}</p>
    <button type='submit'>Submit</button>
    {isSubmitted && <a href='/ex8'>sorry this too was an easy one, keep going</a>}
  </form>);
}


// dont touch this function
function Ex7() {
  return (
    <div id='ex7'>
      <Ex7Form />
    </div>
  );
}

export default Ex7;
