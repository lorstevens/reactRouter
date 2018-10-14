import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: '123a',
        description: 'Jan Rent',
        note: 'This was final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}