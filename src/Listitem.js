
const Listitem = (props=>{
    const {id,email,name,body}=props
    return(
        <li key={id} className="comment">
            <div className="comments-header">
                <h3 className="email">{email}</h3>
                <h3 className="name">{name}</h3>
            </div>
            <p className="message">{body}</p>
        </li>
        )

})

export default Listitem;


{/* <main className="container">
<ul className="comments-container">

        {data.map((obj)=>{
            const {id,email,name,body} = obj
            return(
                <Listitem id={id} email={email} name={name} body={body}/>
            )
    })
}
</ul>
</main> */}