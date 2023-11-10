import React from "react";

class Test extends React.Component {

    componentWillUnmount(): void {
      console.log("Test component will be UNmounted");
    }
  
    componentDidMount() {
      console.log("The Test component is MOUNTED");
    }
  
    render(){
        return (
            <div>
              <h1>Test file</h1>
            </div>
          );
    }
  }

  export default Test;