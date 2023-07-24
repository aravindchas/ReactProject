
const App = () => {
    const clickEvent=(e)=>{
        console.log(e)
    }
    return (
        <div>
       <h2>Hello World</h2><br></br>
       <button onClick={clickEvent}>click me</button>
       </div>
    )
}


export default App;