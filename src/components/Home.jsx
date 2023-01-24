import React, { Component } from 'react'

 class Home extends Component {
  state = {
    Phone : ""
  }
  
  formSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state.Phone.length)
    if( this.state.Phone.length == 0 ){
      alert("password not support");
    }
    const singData = localStorage.getItem("info")
    
    const AllData = JSON.parse(singData);
    const Allvalue = AllData.filter((val,k) =>{
      return val.phone == this.state.Phone
    })
   
      if(Allvalue.length === 0){
         alert("register")
        //return redirect("/login");
       
          
      
         //return <Navigate to='/register' />
        
       
      }else{
        alert("password")
        //  return <Navigate to='/password' />
      }
  }
  render(){
    return(
      <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="container mt-5">
                   
                        <h2 className="mb-3">Login or Register</h2>
                        <form onSubmit={this.formSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                            Enter your mobile number
                            </label>
                            <input className="form-control" type="number"  id="phone" onChange={(e) =>{this.setState({Phone :e.target.value})}} />
                        </div>

                        <button  className="btn btn-danger" type="submit">
                             Submit                     
                        </button>
                        </form>
                            </div>
                    </div>
                    <div className="col-3"></div>
            </div>
    )
  }
}

export default Home