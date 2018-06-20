import React, { Component } from 'react';
import './Home.scss';
import Api from '../services/api-access'
import {Link, withRouter } from 'react-router-dom'

const Items = (props) => {
    const options = props.items.map(o => (
      <li key={o.id}>
        <a href="#" key={o.id} onClick={()=>props.onSelectItem(o)}>{o.email}</a>
        {/* //<Link to={{ pathname: `/item/${o.id}` }}></Link> */}
      </li>
    ));
    return <ul className='listView'>{options}</ul>
  }
export const DetailView = (props) => {
    var o = props.item;
    if (o) {
        return  <div className='detailView'>
            <div className='row'>
                <div className='col-6'>Id:</div>
                <div className='col-6'>
                    <a href="#" key={o.id} onClick={()=>{if (props.onDetailSelectItem) props.onDetailSelectItem(o);}}>{o.id}</a>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>Name:</div>
                <div className='col-6'>
                    <Link to={{ pathname: `/item/${o.id}` }}>{o.name}</Link>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>Email:</div>
                <div className='col-6'>{o.email}</div>
            </div>
            <div className='row'>
                <div className='col-6'>Body</div>
                <div className='col-6'>{o.body}</div>
            </div>
        </div>;
    }
    else {
        return <div className='detailView'></div>;
    }
}

class Home extends Component {

    Api = new Api();

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            count: 0,
            items: [],
            selectedItem: null
        };
        this.reloadItems();
    }

    reloadItems() {
        this.Api.getItems().then((data) => {
            this.setState({items:data});
        }).catch(err => {
            console.error('failed reading api', err);
        });
    }

    handleClick() {
        this.setState((prev, props) => ({
            count :  prev.count + 1
        }));
        //alert("Button");
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
        // this.timerID = setInterval(
        //   () => this.handleClick(),
        //   1000
        // );
    }

    onSelectItem(item, element) {
        this.setState({selectedItem:item});
    }

    onDetailSelectItem(item, history) {
        this.props.history.push(`/item/${item.id}`);
    }

    render() {
        return (
            <div className="Home">    
                <p>
                    Lorem ipsum {this.state.count}
                </p>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
                <div className="container row">
                    <div className="col-6">
                        <label>Input Something</label>    
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text"></input>
                    </div>  
                </div>
                <div className="row">
                    <div className='col-7'>
                        <Items items={this.state.items} onSelectItem={this.onSelectItem.bind(this)} />
                    </div>
                    <div className='col-5'>
                        <DetailView item={this.state.selectedItem} onDetailSelectItem={this.onDetailSelectItem.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);