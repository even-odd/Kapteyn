import React, { Component } from 'react';

import {filters} from '../constants/filters';
import {status} from '../constants/task_status';

import "./css/TaskList.css";

import Task from './Task';

class TaskList extends Component {
    state = {
        // TODO: get tasks
        tasks: [1],
        filter: filters.SHOW__ALL,
        filtred_tasks: null,
    }

    filter = (filter) => {
        let filteredTask = Object.assign([], this.state.tasks);

        console.log("TaskList ||  copy 'tasks' with assign()\n" + this.state.tasks);

        if(!filter === filters.SHOW__ALL){
        
            if(filter === filters.SHOW__ASCEND__POINT) {
                filteredTask.sort((a,b) => (a.priority > b.priority ? a : b));

            } else if (filter === filters.SHOW__DESCEND__POINT) {
                filteredTask.sort((a,b) => (a.priority < b.priority ? a : b));

            } else {
                // К этому моменту остаются только DONE и ACTIVE 
                for(let item in this.state.tasks) {
                    if(item.status === filter) {
                        filteredTask.push(item);
                    }
                }
            }
        }

        this.setState({
            filtred_tasks: filteredTask
        });
    }

    clearCompleted = () => {
        console.log('Retard alert');

        alert("TODO clearCompleted");
    }

    onToggleTask = (id) => {
        let tmpArr = Object.assign([], this.state.tasks);

        tmpArr.map((item) => {
            if(item.id === id){
                switch(tmpArr.status) {
                    case status.SEND : item.status = status.LOOK; break;
                    case status.LOOK : item.status = status.ACTIVE; break;
                    case status.ACTIVE : item.status = status.DONE; break;
                    case status.DONE : 
                        let quest = window.confirm("Переоткрыть проблему ?");
                        if(quest) {
                            item.status = status.SEND;
                        }
                        break;
                    default: 
                        console.log("TaskList || unknow status: " + item.status);
                }
            }
            return item;
        });

        this.setState({
            tasks: tmpArr
        })
    }

    handleSetReponsible = (event, id, responsible) => {
        console.log("TaskList || event \n " + event);

        let tmpArr = Object.assign([], this.state.tasks);

        tmpArr.map((item) => {
            if(item.id === id) {
                item.responsible = responsible;
            }
            return item;
        });

        this.setState({
            tasks: tmpArr
        });
    }

    render() {
        return (
            <React.Fragment>
            <div className="task-list">
                <div className='task-headers'>
                    <div className='header-title name-task'>
                        Задача
                    </div>  
                    <div className='header-title category-task'>
                        Категория
                    </div>
                    <div className='header-title points'>
                        Рейтинг
                    </div>
                    <div className='header-title income-date'>
                        Дата принятия
                    </div>
                    <div className='header-title responsible'>
                        Отвественный
                    </div>
                </div>
            {
                this.state.tasks.map((task, index) => 
                <Task
                    key={ index }
                    index = { task.id }
                    task={ task }
                    onToggleTask={() => this.onToggleTask }
                    handleSetReponsible = {() => this.handleSetReponsible}>
                </Task>
                )
            }
            </div>
            
            {
                (this.state.tasks !== null) ?
                <div className='filter__box' >

                    <div className='task-count'>
                        <span> { this.state.tasks.length } {this.state.tasks.length === 1 ? 'item' : 'items'} left</span>  
                    </div>

                    <div className='todo-filter__wrap todo-filter__filters'>
                        <button className={ this.filter === filters.SHOW__ALL ? 'btn btn--focus' : 'btn' } onClick={ () => this.filter(filters.SHOW__ALL) }>Все</button>
                        <button className={ this.filter === filters.SHOW__ACTIVE ? 'btn btn--focus' : 'btn' } onClick={() => this.filter(filters.SHOW__ACTIVE) }>Активные</button>
                        <button className={ this.filter === filters.SHOW__COMPLETED ? 'btn btn--focus' : 'btn' } onClick={() => this.filter(filters.SHOW__COMPLETED) }>Выполные</button>
                        <button className={ this.filter === filters.SHOW__ASCEND__POINT ? 'btn btn--focus' : 'btn' } onClick={() => this.filter(filters.SHOW__ASCEND__POINT) }>По убыванию</button>
                        <button className={ this.filter === filters.SHOW__DESCEND__POINT ? 'btn btn--focus' : 'btn' } onClick={() => this.filter(filters.SHOW__DESCEND__POINT) }>По возрастанию</button>
                    </div>

                    <div className="todo-filter__wrap todo-filter__comp-clear">
                        <button onClick={() => this.clearCompleted() } className='btn'>Очистить выполные</button>  
                    </div>

                </div>
                : 'lol'
            }
           
            </React.Fragment>
        )
    }
}

export default TaskList;
