import React, { Component } from 'react';
import './App.css';

import TaskList from './components/TaskList';

class App extends Component {
  // TODO: get auth with server
  state = {
    // categories: [],
    auth: true
  }

  setCategory = (name) => {
    
  }
  
  render() {
    return (
      <div className='wrap'>
        <aside className="bar">
            <div className="admin-cabinet">
              <div className="admin__name">
                 {/* TODO: go to admin profile  */}
                 Admin name
              </div>

              <button className={this.state.auth ? 'btn logout' : 'btn login'}>
                { this.state.auth ? 'Выйти' : 'Войти'} 
              </button>
            </div>

            <div className='categories'>
              <h2 className='categoryes__title'>Категории</h2>
              
              <div className='category'>
                <span className='category__name'><a href='#' onClick={()=> this.setCategory('Clean')}>Уборка</a></span>
              </div>

              <div className='category'>
                <span className='category__name'><a href='#' onClick={()=> this.setCategory('Water supply')}>Водоснабжение</a></span>
              </div>

              <div className='category'>
                <span className='category__name'><a href='#' onClick={()=> this.setCategory('Buldings')}>Обсуживание строений</a></span>
              </div>

              <div className='category'>
                <span className='category__name'><a href='#' onClick={()=> this.setCategory('Сommunications')}>Поддержание работоспособности коммуникаций</a></span>
              </div>

            </div>
        </aside>

        {this.state.auth ? 
          <div className='main'>

            <TaskList/>
            
            <div className='table-point-tasks'>

            </div>
          </div>
         : ''}
      </div>
     
    );
  }
}

export default App;
