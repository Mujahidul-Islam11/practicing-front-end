const clg = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique : {
        color: "blue",
        result: {
            gpa: '5',
            merit: 'top'
        }
    }
}
clg.unique.result.merit = ' top top top'
console.log(clg)
delete clg.name;
