import React,{Component} from "react";

class Formulario extends Component{
    constructor(){
        super()
        this.state={
            titulo:'',
            descripcion:'',
            prioridad:'baja',
            numero:0,
            responsable:'',
            imagen:''
        }
    }

    cambio(e){
        console.log(e.target.name)
    }

    render(){
        return(
            <div className="card w-50 m-auto">
                <h1>Nueva Tarjeta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input onChange={this.cambio} type="text" name="titulo" className="form-control" placeholder="Titulo tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <textarea type="text" name="descripcion" className="form-control" placeholder="Descripción tarjeta" rows={3}></textarea>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" name="responsable" className="form-control" placeholder="Responsable tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="number" name="numero" className="form-control" placeholder="numero tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" name="imagen" className="form-control" placeholder="Imagen tarjeta" />
                    </div>
                    <div className="form-group mt-3">
                        <select name="prioridad" className="form-control">
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <div><button className="btn btn-primary mt-3">Guardar</button></div>

                </form>
            </div>
        );
    }
}

export default Formulario;