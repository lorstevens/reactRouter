import {addExpense, editExpense, removeExpense} from '../actions/expenses';

test ('should setup remove expense action object', ()=>{
    const action = removeExpense({id: '1234'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    })
});

test('should setup edit expense action object', ()=>{
    const action = editExpense('12343', {note: 'new note'});
    expect (action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12343',
        updates: {
            note: 'new note'
        }
    })
})

test('should setup add expense', ()=>{
    const expenseData = {
        description: 'Rent',
        amount: 1090,
        createdAt: 1000,
        note: 'This was last rent'
    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'Rent',
            amount: 1090,
            createdAt: 1000,
            note: 'This was last rent',
            id: expect.any(String)          
        }
    })
});

test('should setup add expense action object w/ default', ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:  '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String) 
        }
    })
});