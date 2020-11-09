const parseData = (input) => {
    let result = [];
    input.data.forEach(p => {
        let obj = {};
        p.map((v, i) => {
            obj[input.column[i].name] = v;
        });
        result.push(obj);
    });
    return result;
};

export { parseData };
