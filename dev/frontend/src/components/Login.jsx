import React, { useState } from 'react'

export default function Login() {

    const [employee, setEmployee] = useState({
        NIC : '',
        password : ''
    });

    //Handle Input
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setEmployee({...employee, [name]:value})
    }

    //Handle Login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {NIC, password} = employee;
        try {
            const res = await fetch('/login', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    NIC, password
                })
            });

            if(res.status === 400 || !res) {
                window.alert("Invalid Cradentials");
            } else {
                window.alert("Login Successfull");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-item-center text-white justify-content-center form">
                        <h1 className="display-4 text-center fw-bolder ">Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">NIC Number</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='NIC' value={employee.NIC} onChange={handleChange} />
                                    <div id="emailHelp" class="form-text">We'll never share your login details with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={employee.password} onChange={handleChange} />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}