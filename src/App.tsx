import * as React from 'react';
import './App.css';

interface IState {
  currentTask: string,
  tasks: Array<string>
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: '',
      tasks: []
    };
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log(e.target);
    this.setState({ 
      currentTask: '',
      tasks: [
        ...this.state.tasks, 
        this.state.currentTask
      ]
    });
    e.preventDefault();
  }

  public renderTasks = () => {
    return this.state.tasks.map((task: string, index: number): JSX.Element => {
      return (
        <div key={index}>
          {task}
        </div>
      )
    });
  }

  public render(): JSX.Element {
    console.log(this.state);
    
    return (
      <div className="App">
        <header>
          <h1 className="App-title">React Typescript Todo</h1>
        </header>
        <br/><br/>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="text" 
            placeholder="Add a Task"
            value={ this.state.currentTask }
            onChange={ (e) => this.setState({ currentTask: e.target.value }) } 
          />
          <button type="submit">Add</button>
        </form>
        <section>
          { this.renderTasks() }
        </section>
      </div>
    );
  }
}

export default App;
