import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router';
import Navbar from './navbar'
const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  }};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));