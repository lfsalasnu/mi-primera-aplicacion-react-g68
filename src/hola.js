import React,{Component} from "react";

class Hola extends Component{
    render(){
        return(<div className="display-1 text-white">Hola {this.props.nombre}</div>);
    }
}

export default Hola;