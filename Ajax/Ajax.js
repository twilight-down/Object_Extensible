// let xhr = new XMLHttpRequest;
// xhr.open('get', './data.json?lx=1&name=andy'); // 请求方式，请求地址
// xhr.send();




// xhr = new XMLHttpRequest;
// xhr.open('post', './data.json'); // 请求方式，请求地址
// xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
// xhr.send('lx=1&name=andy');

// xhr = new XMLHttpRequest;
// xhr.open('post', './data.json'); // 请求方式，请求地址
// xhr.setRequestHeader('Content-type', 'multipart/form-data')
// let formData = new FormData()
// formData.append('lx', '2')
// formData.append('name', 'andy')
// xhr.send(formData);



// 状态码有两种 一个是Ajax 另一个是HTTP返回的状态码 代表了服务器返回新的状态
// 200正常返回数据 201
// 301 重定向（域名更换） 304读取的是缓存中的数据（客户端和服务器端构建的协商缓存） 302临时性转移  307临时重定向（服务器负载均衡）
// 400请求参数错误 401没有权限访问 404请求地址不存在（地址错误 ） 405 请求方式不支持  
// 5开头的一般都是服务器错误 500位置服务器错误  503服务器超负荷 
let xhr = new XMLHttpRequest;
xhr.open('get', './data.json?lx=1&name=andy'); // 请求方式，请求地址
xhr.onreadystatechange = function() {
    // Ajax状态发生改变 0 1 2 3 4
    // new xhr就是0
    // open完就是 1 
    // send后响应头信息回来 2
    // 响应主体信息正在返回当中 3 
    // 响应主体信息已经返回来了 4
    // console.log(xhr.readyState);
    let state = xhr.readyState
}
xhr.send();