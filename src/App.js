import logoReact from './logo192.png'
import './App.css';


function App(props) {
  console.log('appprops',props)
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={logoReact} alt="logo React"/>
        <List key2={props.clave} />
      </header>

      <section className="App-body">
        <Body bodyDescript={props.bodyDescr}/>
      </section>

      <footer className="App-footer">
        <Footer footer={props.footer} />
      </footer>

    </div>
  );
}

function List( props ) {
  console.log('propsheader', props)
  return (
    <ul>
      { props.key2.map((item,idx) => <li key={idx}> {item }</li>) }
    </ul>
  )
}

function Body( props ) {
  console.log("body props", props)
  return (
    <div className="body">
      <h1>Welcome to my first React App</h1>
      <p>{ props.bodyDescript }</p>
      <button>Start here</button>
    </div>
  )
}

function Footer(props) {
  console.log("footer props", props)
  return (
    <div className="footer">
      <p>Done with &nbsp; &#10084; &nbsp; by Monica</p>
      <ul>
        { props.footer.map((item, idx)=> <li key={idx}>{item}</li> ) }
      </ul>
    </div>
  )
}


export default App;