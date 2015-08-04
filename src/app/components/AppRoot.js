import config from '../../../config/app';

import React from 'react/addons';
import Blog from './Blog/Blog';


class AppRoot extends React.Component {

    /*
     * AppRootly PureRenderMixin
     *
     * in React 0.13 there is no way to attach mixins to ES6 classes
     * this is a workaround to solve this
     * http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#mixins
     */
    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    render() {
        return (
          <div className="appRoot">
            <h1>{config.title}</h1>
            <div className="col-md-offset-2 col-md-8">
            <Blog />
            </div>
          </div >
        );
    }
}

export default AppRoot;