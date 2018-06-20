import React, {Component} from 'react';
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';

class Form extends Component {
    constructor(props) {
        super(props);

        let d = localStorage.getItem("description");
        let sf = localStorage.getItem("selectedFruit");

        this.state = {
            fruits : [{id : 1, name: 'Apple'}, {id: 2, name: 'Orange'}, {id: 3, name: 'Pie'}],
            selectedFruit: sf ? sf : 1,
            description : d ? d :''
        }
    }

    onSelectChange(event) {
        this.setState({
            selectedFruit: event.target.value
        });

        localStorage.setItem('selectedFruit', event.target.value);
    }

    onDescriptionChange(event) {
        this.setState({
            description: event.target.value
        });

        localStorage.setItem('description', event.target.value);
    }

    createDDItems() {
        return this.state.fruits.map(o => <option key={o.id} value={o.id}>{o.name}</option>);
    }

    render() {
        return (<form>
            <div className='row'>
                <div className='col-6'>
                    <label for="selectedFruitControl">Fruits</label>
                </div>
                <div className='col-6'>
                    <select name='selectedFruitControl' value={this.state.selectedFruit} onChange={this.onSelectChange.bind(this)}>
                        {this.createDDItems()}
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <label for="descriptionControl">Description</label>
                </div>
                <div className='col-6'>
                    <input name="descriptionControl" value={this.state.description} onChange={this.onDescriptionChange.bind(this)} />
                </div>
            </div>
        </form>);
    }
}

export default Form;