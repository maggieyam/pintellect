import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { reorganizePins, mapPinsToCols } from '../../../utils/pins_positioning_utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: 0
        }
        this.getCols = this.getCols.bind(this);
    }
    componentDidMount() {
        if(!this.props.board)
        this.props.fetchBoards();
        window.addEventListener('resize', this.getCols);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getCols);
    }

    getCols() {
        const cols = Math.floor(window.innerWidth / 243.5);
        this.setState({cols: cols})
    }

    render(){
        let {board, openModal, userBoards} = this.props;
        if (!board) return null;
        
        const modal = {type: 'updateBoard', item: this.props.board}
        const pins = reorganizePins(board.pins, false);
        
        return(
            <div id="board-show"> 
                <div id="board-show-top">
                    <h1 id="board-title">{board.title}</h1>
                    <p id="board-description">{board.description}</p>
                </div>
                {mapPinsToCols(pins, openModal, userBoards, board, true)}
            </div>
        )
    }
}
export default BoardShow;
