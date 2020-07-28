##  制作交互式组件

当您点击 Square(方格) 组件 时，填入 “X”。 尝试将 Square(方格) 的 `render()` 函数中返回的按钮标签更改为类似这个样子：

```
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

如果现在点击一个正方形，你应该在浏览器中会看到一个 alert 信息。

> 注意：
>
> 为了节省代码并[避免 `this` 的混乱行为](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)，我们将在这里和下面的事件处理程序中使用 [箭头函数语法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ：
>
> ```
> class Square extends React.Component {
>  render() {
>    return (
>      <button className="square" onClick={() => alert('click')}>
>        {this.props.value}
>      </button>
>    );
>  }
> }
> ```
>
> 请注意如何使用 `onClick={() => alert('click')}` ，我们将传递 *一个函数* 作为 `onClick` prop(属性)。它只在点击后触发。忘记 `() =>` 并直接编写 `onClick={alert('click')}` 是一个常见错误，并且每次组件重新渲染时都会触发 alert 。

下一步，我们希望 Square(方格) 组件 “记住” 它被点击，并标记为 “X” 。 为了 “记住” 这些事情，组件使用 **state(状态)** 。

React 组件可以通过在构造函数中设置 `this.state` 来拥有 state(状态) ，构造函数应该被认为是组件的私有。 让我们在 Square(方格) 组件的 state(状态) 中存储当前值，并在单击方格时更改它。

首先，在类中添加一个构造函数来初始化 state(状态)：

```
class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

> 注意：
>
> 在 [JavaScript classes(类)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)中， 在定义子类的构造函数时，你需要始终调用 `super` 。所有具有 `constructor` 的 React 组件类都应该以 `super(props)` 调用启动它。

现在更改 Square(方格) 组件的 `render` 方法以显示当前 state(状态) 的值，并在点击时切换：

- 将 `` 标签中的 `this.props.value` 替换为 `this.state.value` 。
- 用 `() => this.setState({value: 'X'})` 替换事件处理程序中的 `() => alert()` 。
- 将 `className` 和 `onClick` 道具放在不同的行上以提高可读性。

在这些更改之后， Square(方格) 的`render`方法返回的 `` 标记如下所示：

```
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

通过 Square(方格) 的 `render` 方法中的 `onClick` 处理程序调用`this.setState`， 只要单击 `` ，我们就告诉 React 重新渲染 Square(方格) 。 更新后， Square(方格) 的 `this.state.value` 的值将是 `'X'` ， 所以我们会在游戏棋盘上看到`X`。如果你点击任何 Square(方格)，就会出现一个`X`。

当你在一个组件中调用 `setState` 时， React 也会自动更新其子组件。