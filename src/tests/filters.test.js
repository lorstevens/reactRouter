import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../actions/filters';
import moment from 'moment';

test('should generate start date', () =>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generat end date', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate sort by date', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})

test('should generate sort by amount', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    })
})

test('should set Text Filter', ()=>{
    const action = setTextFilter('text')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text'
    })
})

test('should set Text Filter with default', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})