let str = 'afjghdfraaaadesa';

function maxStr(str) {
    let max = 0;
    let a = '';
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        // console.log(obj[str[i]]);
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    for (let k in obj) {
        if (obj[k] > max) {
            max = obj[k]
            a = k;
        }
    }
    return a;
}
console.log(maxStr(str));