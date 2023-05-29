import React, {Component} from 'react';
import { message } from '../../utils';
import PropTypes from 'prop-types';

//anon functions
export class ClassComponent extends Component {
    static defaultProps = {chip: 21};

    static propTypes = {chip: PropTypes.number, color: PropTypes.string};

    render() {
        return(
            <div>
                <span>{message}</span>
                <span style={{color: this.props.color}}>{this.props.chip}</span>
                <button onClick={(e) => console.warn(e, this.state)}>Genereate new chip</button>
            </div>
        )
    }
}










//methods with bindings


// export class ClassComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.onGenerateEvent = this.onGenerateEvent.bind(this);
//     }
//     static defaultProps = {chip: 21};

//     static propTypes = {chip: PropTypes.number, color: PropTypes.color};
//     onGenerateEvent(e) {
//         console.warn(this);
//         console.warn(e);
//     }
//     render() {
//         return(
//             <div>
//                 <span>{message}</span>
//                 <span style={{color: this.props.color}}>{this.props.chip}</span>
//                 <button onClick={this.onGenerateEvent}>Genereate new chip</button>
//             </div>
//         )
//     }
// }




//methods bindings with babel
// export class ClassComponent extends Component {
//     static defaultProps = {chip: 21};

//     static propTypes = {chip: PropTypes.number, color: PropTypes.color};
//     onGenerateEvent = (e) => {
//         console.warn(this);
//         console.warn(e);
//     }
//     render() {
//         return(
//             <div>
//                 <span>{message}</span>
//                 <span style={{color: this.props.color}}>{this.props.chip}</span>
//                 <button onClick={this.onGenerateEvent}>Genereate new chip</button>
//             </div>
//         )
//     }
// }