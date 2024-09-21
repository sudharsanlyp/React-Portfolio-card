
import './App.css';

function App() {
  return (
    <div className='card'>
      <p className='on'>online</p>
      <img src="sudharsan.jpg" alt="abc" />
      <h3>sudharsan</h3>
      <h3>Namakkal</h3>
      <p>Front-end developer</p>
      <div className='button'>
        <button className='message'>Message</button>
        <button className='following'>Following</button>
      </div>
      <h6>Skills</h6>
      <div className='align'>
        <ul>
          <li>UI/UX Designer</li>
          <li>Front-end developer</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React js</li>
          <li>Java</li>
          <li>Mysql</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
