
// const page = <h2>first react class</h2>
// const page = (
//     <div>
//          <h2>congratulations on your first react</h2>
//          <p>we are currently on it</p>
//     </div>
//     //NB: you can equaly use react fragment (<></>) in place of div  
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(page);
// ReactDOM.createRoot(document.getElementById('root')).render(page)




// -----components in react --------------
//-----1) function
//NB: the first latter after const must be a capital leter. eg capital P for page

// const Abas = () => {
//     return (
//         <div>
//             <p>this boxes are without content and only have plain primary colors</p>
//         </div>
//     )
// }


// const Page = () => {
//     return (
//         <div>
//             <h3 style = {{textAlign:"center", color:"green"}}>first react component</h3>
//             <div style = {{display:"flex",}}>
//                 <div style = {{width:"100px",height:"100px",backgroundColor:"red",margin:"10px"}}></div>
//                 <div style = {{width:"100px",height:"100px",backgroundColor:"green",margin:"10px"}}></div>
//                 <div style = {{width:"100px",height:"100px",backgroundColor:"yellow",margin:"10px"}}></div>
//             </div>
//             <Abas />
//         </div>
//     )
// }
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

const Web = () => {
    return (
       <div>
        <Navbar />
        <Card />
        <Table />
       </div>
    )
}
const Card = () => {
    return (
       <div>
            <div className="container my-4">
            <div className ="row">
                <div className="card m-4" style={{width:"18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                <div className="card m-4" style={{width:"18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                <div className="card m-4" style={{width:"18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

const Table = () => {
    return (
       <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
       </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Web/>);
