import React from 'react';
import {shallow} from 'enzyme';
import {AddExpense} from '../../components/AddExpense'
import expenses from '../fixtures/expenses'


let onSubmit, history, wrapper;

beforeEach(()=>{
     onSubmit = jest.fn();
     history = {push: jest.fn()}
     wrapper = shallow(<AddExpense onSubmit= {onSubmit} history = {history}/>)
 
})

test('should render add Exoense', ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', ()=>{
    wrapper.find('expenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})