const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') =>`Hello ${name}`


test('should add two numbers', ()=> {
    const result = add(3, 4);
    expect(result).toBe(7)
});

test ('should return name', ()=> {
    const greetingResult = generateGreeting('Lorna')
    expect(greetingResult).toBe('Hello Lorna')
})

test('should generate anonymous', ()=>{
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous')
})