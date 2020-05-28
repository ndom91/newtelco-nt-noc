import { h } from 'preact';
import './panel.css';

const Panel = ({ header }) => {
  return (
    <div className="Panel">
      <header className="Panel-header">
        <p>{header}</p>
      </header>
    </div>
  );
};

export default Panel;
