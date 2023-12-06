
import "./card.styles.css"

const Card = ({monster:{id,name,email}})=>{
    // const Card = ({monster}) =>{
    // const {id ,name , email } = monster
    //}
        return(
            <div className="card-container" key={id}>
                    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=200x200`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
               </div>
        )
}
export default Card 