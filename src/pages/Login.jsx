import React from 'react'

export default function Login() {
    return (
        <>
            <div className="container">
                
                
                <div className="card card-boarder">
                    <h2 className="text-center">Sign In To GymFlow</h2>
                    <p className="text-center text-muted text-capitalize">enter your data to access the admin dashboard</p>
                    <form action="" method="post" className=''>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label d-flex justify-content-between">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                aria-describedby="emailHelpId"
                                placeholder="youremail@mail.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className='form-label d-flex justify-content-between'>Password</label>
                            <input type="password"
                                className='form-control'
                                name='password'
                                id='password'
                                placeholder='enter your password' />
                        </div>
                        <div className="mb-3  d-flex justify-content-between">
                            <div className="form-check form-check-inline ">
                                <input
                                    className="form-check-input "
                                    type="checkbox"
                                    id=""
                                    value="option1"
                                />
                                <label className="form-check-label d-flex " htmlFor="">Remember me</label>
                            </div>
                            <a href="/" className='link nav-link'>Forgot your password?</a>
                        </div>
                        <button type='submit' className='btn  text-uppercase' id='submit-btn'>sign in</button>

                    </form>
                </div>

            </div>
        </>
    )
}
