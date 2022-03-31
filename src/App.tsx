import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import Ex1 from './exercises/ex1/ex1';
import Ex2 from './exercises/ex2/ex2';
import Ex3 from './exercises/ex3/ex3';
import Ex4 from './exercises/ex4/ex4';
import Ex5 from './exercises/ex5/ex5';
import Ex6 from './exercises/ex6/ex6';
import Ex7 from './exercises/ex7/ex7';
import Ex8 from './exercises/ex8/ex8';
import Ex9 from './exercises/ex9/ex9';


function App() {
  const exercises = [
    { number: 1, element: <Ex1 /> },
    { number: 2, element: <Ex2 /> },
    { number: 3, element: <Ex3 /> },
    { number: 4, element: <Ex4 /> },
    { number: 5, element: <Ex5 /> },
    { number: 6, element: <Ex6 /> },
    { number: 7, element: <Ex7 /> },
    { number: 8, element: <Ex8 /> },
    { number: 9, element: <Ex9 /> },
  ]
  return (
    <div className='App'>
      <Router>
        <div>
          {exercises.map(({ number }) => <NavLink style={{ margin: '1em' }} to={`/ex${number}`} key={number}>{`ex${number}`}</NavLink>)}
        </div>
        <Routes>
          <Route path='/' element={<h1>complete the exercises by order, good luck!</h1>} />
          {exercises.map(({ number, element }) => <Route path={`/ex${number}`} element={element} key={number} />)}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
