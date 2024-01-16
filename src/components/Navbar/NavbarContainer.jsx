import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
   return {
      navbarPage: state.navbarPage
   }
 }
 const mapDispatchToProps = (dispatch) => {
   return {
     
   }
 }
 
 const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

 export default NavbarContainer;