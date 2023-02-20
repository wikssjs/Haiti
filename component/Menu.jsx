export default function Menu({setPage}){
    return <nav>

        <ul>
           <a href="#" onClick={()=>{setPage('accueil')}}><li>James</li></a> 
           <a href="#" onClick={()=>{setPage('james')}}><li>James</li></a> 
           <a href="#"><li>James</li></a> 
        </ul>

    </nav>
}