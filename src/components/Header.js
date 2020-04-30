import React from 'react';
import { Link  ,NavLink} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { startLogout } from '../actions/auth';

// export const Header = ({ startLogout }) => (
//   <header className="header">
//     <div className="content-container">
//       <div className="header__content">
//         <Link className="header__title" to="/dashboard">
//           <h1>Boilerplate</h1>
//         </Link>
//         <button className="button button--link" onClick={startLogout}>Logout</button>
//       </div>
//     </div>
//   </header>
// );

// const mapDispatchToProps = (dispatch) => ({
//   startLogout: () => dispatch(startLogout())
// });

// export default connect(undefined, mapDispatchToProps)(Header);

export const Header=()=>(
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink  to="/create"  activeClassName="is-active">create</NavLink>
  </header>
)