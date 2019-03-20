import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.category.map((dt, index) =>
            <span key={index} onClick={() => this.props.populateNews(dt)}>{dt}</span>
        );
        return (
            <div className="menu-category">{list}</div>
        )
    }

}
export default Header;