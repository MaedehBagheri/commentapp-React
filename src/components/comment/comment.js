import '../../App.css';
const Comment =({name,email,onClick})=>{
    return(
        <div className="card" onClick={onClick}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}

export default Comment;