
// fix this, make sure child element isn't left out and is displayed too
function Ex5Container(props: any) {
  return <div><p>where is the cake?</p></div>
}


// dont touch this function
function Ex5() {
  return (
    <div id='ex5'>
      <Ex5Container>
        {/** note that this is the child element that needs to be displayed as well */}
        <p>aww here it is🎂</p>
      </Ex5Container>
      <a href='/ex6'>if the cake is displayed, keep going</a>
    </div>
  );
}

export default Ex5;
