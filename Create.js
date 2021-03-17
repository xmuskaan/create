import { useState } from "react";



  const Create = () => {
    
    const [title,setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor]= useState("mario");
    const [isPending, setisPending] = useState(false);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const Blog = {title , author , body}; 
      
      setisPending(true);

      fetch(' http://localhost:8000/blogs', {
        method: 'POST', 
        Headers: {"content-type" : "application.json"},
        body: JSON.stringify(Blog)
        } )

        .then(()=> {console.log("blog added");
          setisPending(false);})



    }

    return ( 
      <div className="create">
       <h2>Add a new blog</h2>
       <form onSubmit={handleSubmit} >
         <label>Blog Title</label>
         <input 
         type="text"
         required 
         value={ title}
         onChange= {(e) => setTitle(e.target.value) }/>
         <label>Blog Body</label>
         <textarea
         required
         value={body} 
         onChange={(e)=> setBody(e.target.value) }>
           </textarea> 
         <label>Author Name</label>
         <select
         required
         value={author}
         onChange= {(e) => setAuthor(e.target.value) }
         >
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option> 
         </select>
        
        {!isPending && <button >Submit Blog</button>}
        {isPending && <button disabled >Adding Blog..</button>}

        </form>
        <p>{title}</p>
        <p> Written By { author}</p>
        <p>{body}</p>
     
      </div>  
     );

}
 
export default Create;