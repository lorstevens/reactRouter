import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
// import Expenses from '../fixtures/expenses'

test('should render expense form correctly', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

// test('should render expense form with data', ()=>{
//     const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
//     expect(wrapper).toMatchSnapshot();
// })

test('should render error', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {preventDefault: ()=> {}})
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', ()=>{
    const value = 'New'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on input change', ()=>{
    const value = 'this is note'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})


test('should set valid amount', ()=>{
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})


test('should not set valid amount', ()=>{
    const value = '23.5099'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
})

