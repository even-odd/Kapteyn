import React, { Component } from 'react';

// import {filters} from './constants/filters';
// import {status} from './constants/task_status';

class Task extends Component {
    state = {
        select_value: 'al',
        opened: false
    }

    render() {
        let { task, onToggleTask, handleSetReponsible } = this.props;
        return (        
            <div className='task'>
                {/* <div className='task__img-box'>
                    TODO: slider

                    TODO: make img href
                    <img src='#' alt='task-img'></img>
                </div> */}

                <div className='task__characteristics'>
                    <div className="task__category">
                        <span className='taks__title task__category-title'>Категория</span>
                        <span className='task__value task__category-value'>{ task.category }</span>
                    </div>
                    <div className="task__points">
                        <span className='taks__title task__points-title'>Рейтинг</span>
                        <span className='task__value task__points-value'>{ task.points }</span>
                    </div>

                    <div className="task__status">
                        <span className='taks__title task__status-title'>Статус</span>
                        <button className='btn task__value task__status-value' onClick={(e)=> onToggleTask(e, task.id)}>{ task.status }</button>
                    </div>

                    <div className="task__reponsible">
                        <span className='taks__title task__reponsible-title'>Ответсвенный</span>
                        <select value={this.state.select_value} onChange={(e) => handleSetReponsible(e, null, null)}>
                            <option value='al'>Осадченко Александр Олегович</option>
                            <option value='dim'>Золотухин Дмитрий Алексеевич</option>
                            <option value='den'>Ерещенко Даниил Владиславович</option>
                        </select>
                    </div>

                    <div className="task__income-date">
                        <span className='taks__title task__income-date-title'>Дата принятия</span>
                        <span className='task__value task__income-date-value'>{ task.income_date }</span>
                    </div>

                    <div className="task__start-date">
                        <span className='taks__title task__start-date-title'>Дата начала исполнения</span>
                        <span className='task__value task__start-date-value'>{ task.start_date }</span>
                    </div>

                    <div className="task__close-date">
                        <span className='taks__title task__close-date-title'>Дата завершения</span>
                        <span className='task__value task__close-date-value'>{ task.close_date }</span>
                    </div>
                </div>

                <div className="task__desription"> 
                    { task.text }
                </div>
            </div>
        );
    }

}

export default Task;