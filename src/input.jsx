import React, {Component} from 'react';


export default class Input extends Component {




    constructor(props) {
        super(props);
        this.state = {text: ''};
    
      }

      
      handleInputChange = () => {
        this.setState({
            text: this.search.value
        })
      }
    
     
    render() {
        return (
            <div>
            
                
<h1>مرحبا بك في منظار </h1>
<h2>منظار هو منصه </h2>

<form onSubmit={this.handleSubmit}>
<label>هل تبحث عن تخصص معين
<input
         placeholder="بحث عن تخصص حسب"
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
        <p>{this.state.text}</p>
</label>
<button>ابحث عن تخصص حسب</button>
<button>ابحث عن تخصص حسب</button>

                </form>
                
                
                
                </div>
            
        );
    }
}