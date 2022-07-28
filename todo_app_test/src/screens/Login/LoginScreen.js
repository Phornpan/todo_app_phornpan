import React, { useState, useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import Message from "../../components/Message"
// import { login } from "../../actions/authActions"
// import "./login.css"
// import { showError } from "../../actions/appGlobalActions"

const LoginScreen = ({ history }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  // const { error, userInfo } = useSelector(state => state.userLogin)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   // console.log("useEffect123")
  //   if (userInfo) {
  //     //console.log("success")
  //     history.push("/")
  //     //location.reload();
  //   } else {
  //     //console.log("Fail")
  //   }
  // }, [userInfo])

  const handleSubmit = e => {
    e.preventDefault()
    const user = {
      username,
      password,
      type: "w"
    }
    // dispatch(login(user))
  }

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Login #01</h2>
            </div>
          </div> */}

          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <picture><img src="/assets/images/tfg-logo.png" style={{ width: "69px", height: "70px" }} /></picture>
                </div>
                <h3 className="text-center mb-4">Login Smart Farm</h3>

                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <div
                      className="wrap-input100 validate-input m-b-10"
                      data-validate="Username is required"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="username"
                        placeholder="Username"
                        autoComplete="off"
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                  </div>

                  <div className="form-group d-flex">
                    {/* <input
                      type="password"
                      className="form-control rounded-left"
                      placeholder="Password"
                    /> */}
                    <div
                      className="wrap-input100 validate-input m-b-10"
                      data-validate="Password is required"
                    >
                      <input
                        className="input100"
                        type="password"
                        name="pass"
                        placeholder="Password"
                        autoComplete="off"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    {/* <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      เข้าสู่ระบบ
                    </button> */}
                    <div className="container-login100-form-btn p-t-10">
                      <button className="login100-form-btn" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                  {/* <div className="form-group d-md-flex">
                    <div className="w-50">
                      <label className="checkbox-wrap checkbox-primary">
                        Remember
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={e => {
                            setRememberMe(prev => !prev)
                          }}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="#">Contact Administrator</a>
                    </div>
                  </div> */}

                  {/* {error && <Message variant="danger">{error}</Message>} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginScreen
