import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* 传递进来的props对象,因为属性的key为value,所以使用props.value可以获得属性的值 */}
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    // 添加props对象,将值传给Square组件
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {/* renderSquare方法可以直接在{}中使用 */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
