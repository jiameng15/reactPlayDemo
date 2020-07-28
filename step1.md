## 通过 Props 传递数据（Passing Data Through Props）

初次尝试，让我们试试从 Board(棋盘) 组件传递一些数据到 Square(方格) 组件。

在 Board(棋盘) 组件的 `renderSquare` 方法中，更改代码以将 `value` prop(属性) 传递给 Square(方格) 组件：

```
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
```

然后修改 Square(方格) 的`render`方法，通过使用 `{this.props.value}` 替换 `{/* TODO */}` 来显示该值：

```
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

之前：

[![React Devtools](http://react.html.cn/static/tictac-empty-1566a4f8490d6b4b1ed36cd2c11fe4b6-a9336.png)](http://react.html.cn/static/tictac-empty-1566a4f8490d6b4b1ed36cd2c11fe4b6-a9336.png)

之后： 您应该可以在渲染输出中的每个正方形中看到一个数字。

[![React Devtools](http://react.html.cn/static/tictac-numbers-685df774da6da48f451356f33f4be8b2-be875.png)](http://react.html.cn/static/tictac-numbers-685df774da6da48f451356f33f4be8b2-be875.png)