import ListGroup from "./components/ListGroup";

function App() {
 let items = ['NYC', 'LA', 'Tokyo', 'London', 'Tehran']
const handleSelectItem=(item:string)=>{
  console.log(item);
}

  return (
  <div> 
    <ListGroup items={items} heading="cities :" onSelectItem={handleSelectItem} />
    </div>)

}




import Alert from './components/Alert'

const App = () => {
  return (
    <div className='alert alert-primary'>
      <Alert> 
        <h2>Hello World!</h2>
      </Alert>

    </div>
  )
}

export default App