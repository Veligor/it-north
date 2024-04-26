import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { getAuthUserDataThunkCreator,  logout} from "./../Redux/auth-reducer";
import { useEffect } from "react";
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserDataThunkCreator()
     
  }

  render() {
  return  <Header {...this.props}/>;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})
export default connect(mapStateToProps, { getAuthUserDataThunkCreator})(HeaderContainer);


//  const HeaderContainer = (props) => {
//   const login = useSelector((state) => state.auth.login)
//   const isAuth = useSelector((state) => state.auth.isAuth)
//    useEffect(() => {
//     //console.log('HEADER')
//     getAuthUserDataThunkCreator()
//    }, [login]) 
     
//    const dispatch = useDispatch()
   

  

//   return <header className={s.header}>
//   <img src="https://w7.pngwing.com/pngs/1021/140/png-transparent-the-neat-company-scanner-small-business-company-logo-angle-company-text.png"></img>
//   <div className={s.loginBlock}>
//     { isAuth ? <div>{login} - <button onClick={() => dispatch(logout())}>logout</button></div>
//     : <NavLink  to={"/login"} >Login</NavLink> }


//    {/* <div><button onClick={dispatch(logout())}>logout</button></div> */}
//     </div>
// </header>
//   }

// export default HeaderContainer;