function pagseguroToken(token){
    console.log("pagseguroToken: "+token);
}


function pagseguroCheckout(code){
    console.log("pagseguroCheckout: "+code);
}


module.exports = {
    hashToken: (token) => pagseguroToken(token),
    checkout: (code) => pagseguroCheckout(code)
}