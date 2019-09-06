// 默认地址是 http://localhost:8080/ , 但是配置的请求端口号是 http://localhost:3000/
// 这样去请求，肯定会报错 ‘GET http://localhost:8080/api/user 404 (Not Found)’ 
// 解决思路： 8080 属于 webpack-dev-server 的服务，那么再把它的这个请求再转发给 3000，就解决了跨域问题

// 需要用到代理服务： htpp-proxy。 在 webpack 中的 devServer 中去配置它

// 跨域请求
let xhr = new XMLHttpRequest()

// 这里的请求地址和 webpack.devServer 中的代理地址保持一致
// 三个参数： 请求的方式， 请求的地址， 是否异步请求
xhr.open('GET', '/api/home', true)

// 拿回请求的数据
xhr.onload = function () {
  console.log(xhr.response)
}

// 暴露出去
xhr.send()