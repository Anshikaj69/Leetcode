/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    og=i=init
    return {
        increment:()=>{ return ++og},
        decrement:()=>{ return --og},
        reset:()=>{return og=i}
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */