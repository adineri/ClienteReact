import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CrearTarea from "./componentes/crearTarea";
import TareasList from "./componentes/tareasList";
import BorrarTarea from "./componentes/borrarTarea";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import tareasListHook from "./componentes/TareasListHook";
import actualizarTarea from "./componentes/ActualizarTarea";



class App extends Component {
  render() {

    return (
      <Router>
        <div className="container">
          <h2>Lista de Tareas</h2>
        </div>
        <div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Tareas App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Tareas</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/crear" className="nav-link">Create Tarea</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/borrar" className="nav-link">Borrar Tarea</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/hook" className="nav-link">Lista Tareas hook</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/actualizar" className="nav-link">Actualizar Tarea</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />

          <Route exact path="/" component={TareasList} />
          <Route exact path="/crear" component={CrearTarea} />
          <Route exact path="/borrar" component={BorrarTarea} />
          <Route exact path="/hook" component={tareasListHook} />
          <Route exact path="/actualizar" component={actualizarTarea} />
        </div>
        </div>
     </Router>
    );
  }
}
 
export default App;
