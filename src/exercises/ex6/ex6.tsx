import { useState } from 'react';

// make sure input can receive text and text is displayed later in the p element
function Ex6TextInput() {
  const [name] = useState('');
  return (<>
    <input value={name} placeholder='enter name' />
    <p>name:{name}</p>
    {name.length > 0 && <a href='/ex7'>sorry this was an easy one, keep going</a>}
  </>);
}


// dont touch this function
function Ex6() {
  return (
    <div id='ex6'>
      <table style={{ margin: 'auto' }}>
        <tbody>
          <tr>
            <td>
              6️⃣
            </td>
            <td>
              6️⃣
            </td>
            <td>
              6️⃣
            </td>
          </tr>
          <tr>
            <td>
              6️⃣
            </td>
            <td>
              <p>who are you?</p>
              <Ex6TextInput />
            </td>
            <td>
              6️⃣
            </td>
          </tr>
          <tr>
            <td>
              6️⃣
            </td>
            <td>
              6️⃣
            </td>
            <td>
              6️⃣
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ex6;
