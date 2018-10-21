import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
// import Expenses from '../fixtures/expenses'
import moment from 'moment'

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

// test('should call OnSubmit Prop for valid form submission', ()=>{
//     const onSumbitSpy = jest.fn();
//     const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSumbit = {onSumbitSpy}/>)
//     wrapper.find('form').simulate('submit', {
//         preventDefault: ()=>{}
//     })
//     expect(wrapper.state('error')).toBe('');
//     expect(onSubmitSpy).toHaveBeenLastCalledWith({
//         description: expenses[0].description,
//         amount: expenses[0].amount,
//         note: expenses[0].note,
//         createdAt: expenses[0].createdAt
//     });
// })

// test('should set new date', ()=>{
//     const now = moment ()
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now)
//     expect(wrapper.state('createdAt')).toEqual(now)
// })

// test('should set calednar focus to true', ()=>{
//     const focused = true
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
//     expect(wrapper.state('calendarFocuesed')).toEqual('true')
// })