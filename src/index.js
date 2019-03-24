// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 50, Q = 25, D = 10, N = 5, P = 1; 
   let obj = {}; 
   let s = 0; 
    if(currency > 10000) { 
    obj.error = "You are rich, my friend! We don't have so much coins for exchange"; 
    return obj; 
    } else if (currency <= 0) { 
    return obj; 
    } 
    while(currency != 0) { 
    if (currency >= H) { 
    s = Math.trunc(currency / H); 
    currency = currency - s * H; 
    obj.H = s; 
    } 
    
    if (currency >= Q) { 
    s = Math.trunc(currency / Q); 
    currency = currency - s * Q; 
    obj.Q = s; 
    } 
    
    if (currency >= D) { 
    s = Math.trunc(currency / D); 
    currency = currency - s * D; 
    obj.D = s; 
    } 
    
    if (currency >= N) { 
    s = Math.trunc(currency / N); 
    currency = currency - s * N; 
    obj.N = s; 
    } 
    
    if (currency >= P) { 
    s = Math.trunc(currency / P); 
    currency = currency - s * P; 
    obj.P = s; 
    } 
    } 
    
    return obj;
     
}
