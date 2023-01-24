import React, { Component } from 'react'

export class slot extends Component {
    state = {
        Phone : ""
      }
  render() {
    return (
        
        <div className='Container p-5'>
        <div className='row'>
            <div className='col-3'></div>
            <div className='col-6'>
            <h3>Give some additional information of yours.</h3>
          <form>
            <div className=" form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="Appoindmentnames"
                className="form-control"
                id="name"
                value=""
                placeholder="Enter your name"
                
              />
            </div>
            <div className=" form-group">
              <label htmlFor="number">Number</label>
              <input
                type="number"
                name="Appoindmentnumber"
                value=""
                className="form-control"
                id="numberx"
                placeholder="Enter your phone number"
                
              />
            </div>
            <div className=" form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value=""
                className="form-control"
                id="email"
                placeholder="Enter your email"
                
              />
            </div>

            <div className=" form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value=""
                className="form-control"
                id="address"
                placeholder="Enter your address"
                
              />
            </div>
            <div className=" form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                value=""
                className="form-control"
                id="age"
                placeholder="Enter your age"
                
              />
            </div>
            <div className=" form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                value=""
                className="form-control"
                id="date"
                placeholder="Enter date"
                
              />
            </div>
            <div className=" form-group">
              <label htmlFor="slot">Slot</label>
              <select
                name="slot"
                value=""
                className="form-control"
                id="slot"
                
              >
                <option>select one</option>
                <option value="4pm-5pm">4:00 pm - 5:00 pm</option>
                <option value="5pm-6pm">5:00 pm - 6:00 pm</option>
                <option value="6pm-7pm">6:00 pm - 7:00 pm</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
            >
              Submit
            </button>
          </form>
            </div>
            <div className='col-3'></div>
            
          
          
        </div>
      </div>
    )
  }
}

export default slot