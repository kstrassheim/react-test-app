import React, { Component } from 'react';
import Api from '../services/api-access'
import {DetailView} from './Home'

class ItemView extends Component {

    Api = new Api();

    constructor(props) {
        super(props);
        let id = parseInt(props.match.params.id);
        this.state = {
            ...props,
            item: [],
        };
        this.reloadItem(id);
    }

    reloadItem(id) {
        this.Api.getItems().then((data) => {
            let o = data.find((i)=>i.id == id);
            this.setState({item:o});
        }).catch(err => {
            console.error('failed reading api', err);
        });
    }

    render() {
        return (
            <DetailView item={this.state.item} />
        );
    }
}

export default ItemView;