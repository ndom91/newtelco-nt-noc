import { h } from 'preact';
import './App.css';
import Panel from './components/panel';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="grid-container">
      <div className="inside"></div>
      <div className="item a1">
        <div className="item-header">nt-batman</div>
        <div
          data-netdata="system.cpu"
          data-dimensions="user"
          data-chart-library="gauge"
          data-width="150px"
          data-after="-60"
          data-points="60"
          data-colors="#67b246"
          data-title="CPU"
          data-units=""
        ></div>
        <div
          data-netdata="system.load"
          data-dimensions="load1,load5,load15"
          data-chart-library="dygraph"
          data-dygraph-theme="sparkline"
          data-width="300px"
          data-height="50px"
          data-after="-60"
          data-points="60"
          data-colors="#67b246 #009C7F #007DA4"
        ></div>
      </div>
      <div className="item a2"></div>
      <div className="item a3"></div>
      <div className="item b1"></div>
      <div className="item b2"></div>
      <div className="item b3"></div>
      <div className="item c123"></div>
      <div className="header">Newtelco NOC Dashboard</div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
