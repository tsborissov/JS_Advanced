function solution(input) {
    let state = [];

    const listProcessor = {
        add,
        remove,
        print
    }

    for (const item of input) {
        const [command, string] = item.split(' ');
        
        listProcessor[command](string);
    }

    function add(str) {
        state.push(str);
    }

    function remove(str) {
        state = state.filter(function(e) {return e != str});
    } 

    function print() {
        console.log(state.join(','))
    }
}


solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);