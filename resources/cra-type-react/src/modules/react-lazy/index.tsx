import React, { Component, Fragment } from 'react';

class ReactLazy extends Component {

  render() {
    return (
      <Fragment>
        <header className="header">
            Comparison with React.lazy
        </header>  
        <div className="content">
            1、React.lazy是react官方支持的（https://reactjs.org/docs/code-splitting.html#reactlazy）
            2、@loadable/component，支持SSR
            3、react-loadable使用时间长，对webpack4支持不是很好
            推荐使用1或者2
            参考：https://loadable-components.com/docs/loadable-vs-react-lazy/#note-about-react-loadable
        </div>
      </Fragment>
    );
  }
}

export default ReactLazy;
