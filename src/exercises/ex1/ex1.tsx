// only change this function
function Ex1Columns() {
  return (
    <div>

      {/** 👇 dont touch this 👇 */}
      <td>are you done?</td>
      <td>already?</td>
      <td><a href="/ex2">next exercise</a></td>
      {/** 👆 dont touch this 👆 */}

    </div>
  );
}

// dont touch this function
function Ex1() {
  return (
    <div id="ex1">
      <table>
        <tbody>
          <tr>
            <Ex1Columns />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ex1;
