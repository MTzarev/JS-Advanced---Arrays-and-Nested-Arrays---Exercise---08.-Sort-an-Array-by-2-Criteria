function sortAnArrayBy2Criteria(input) {
    let sorted = input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length; 
        } else {
            return a.localeCompare(b);
        }
    });

    console.log(sorted.join(`\n`));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
// sortAnArrayBy2Criteria(['Isacc', 
// 'Theodor', 
// 'Jack', 
// 'Harrison', 
// 'George']
// );
// sortAnArrayBy2Criteria(['test', 
// 'Deny', 
// 'omen', 
// 'Default']
// );