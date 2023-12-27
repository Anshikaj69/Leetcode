/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let rever= functions.reverse()
    const result = (x)=>{
        rever.forEach((fun)=>{
            x = fun(x)
        })
        return x
    }
    return result 
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */