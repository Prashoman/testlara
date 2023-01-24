import React, { Component } from 'react'

export default class password extends Component {
    render() {
        return (
            <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="container mt-5">
                            <h2 className="mb-3">Password</h2>
                            <form onSubmit="">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="name">
                                Enter your password
                                </label>
                                <input className="form-control" type="password" id="" required />
                            </div>
    
                            <button className="btn btn-danger" type="submit">
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
