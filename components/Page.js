import React, {Component} from 'react';
import Header from './Header';
import Meta from './Meta';


class Page extends Component {
    render(){
        return(
            <>
                <Meta />
                <Header />
                <div className="content-wrapper">
                
                    <div className="main-container">
                        {this.props.children}
                    </div>
                </div>
            </>
        )
    }
}
export default Page;