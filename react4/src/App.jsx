import Job from "./Job"

const App = () => {
  return (
    <div>
      <Job position="boss" salary={1000}  company="google"/>
      <Job position="boss2" salary="350"  company="apple"/>
      <Job position="boss3" salary="250"  company="amazone"/>
    </div>

  )
}
export default App;