import {useState,useEffect} from 'react'
import logo from './logo.svg';
import CardList from "./components/cardlist/card-list.component";
import SearchBox from "./components/searchbox/search-box.component";
import './App.css';

const App=()=>{
  const[searchField , setSearchField]=useState('')
  const[monsters,setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>setMonsters(users))
  },[])
    useEffect(()=>{
      const newFilteredMonsters = monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
    }
    ,[monsters,searchField])
  const onsearchChange = (event)=>{
        var searchFilterString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFilterString)
      }
      
  return(
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox  
        onChangeHandler={onsearchChange} 
        placeholder ="search monsters" 
        className="monsters-search-box"/>
       <CardList monster={filteredMonsters}/>
       
      </div>
  )
}
// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       monsters:[],
//       searchFilter:""
//     } 
//   }
//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((users)=>this.setState(()=>{
//       return {monsters:users}
//     }
//     ))
//   }
//   onsearchChange = (event)=>{
//     var searchFilter = event.target.value.toLocaleLowerCase()
//     this.setState({
//      searchFilter
//     }) 
//   }
//   render (){
//     const{monsters,searchFilter} = this.state
//     const {onsearchChange} = this
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchFilter)
//   })
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox  
//         onChangeHandler={onsearchChange} 
//         placeholder ="search monsters" 
//         className="monsters-search-box"/>
//        <CardList monster={filteredMonsters}/>
       
//       </div>
//     );
//   }
// }

export default App;
