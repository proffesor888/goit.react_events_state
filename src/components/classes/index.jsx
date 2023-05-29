import React, {Component} from 'react';
import { message } from '../../utils';
import PropTypes from 'prop-types';

export class ClassComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <span>{message}</span>
                <span style={{color: this.props.color}}>{this.props.chip}</span>
            </div>
        )
    }
}













// with new Babel features

// export class ClassComponent extends Component {
//     static defaultProps = {chip: 21};

//     static propTypes = {chip: PropTypes.number, color: PropTypes.string};
//     // static methods: defaultProps, propTypes, displayName
//     render() {
//         return(
//             <div>
//                 <span>{message}</span>
//                 <span style={{color: this.props.color}}>{this.props.chip}</span>
//             </div>
//         )
//     }
// }
