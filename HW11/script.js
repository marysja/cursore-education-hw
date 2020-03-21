function getSymbol() {
    let sign = new Promise(num => {
      setTimeout(() => {
       +num(String.fromCharCode(Date.now().toString().slice(-5)))
      }, 50)
    })
    return sign;
  }
  
  async function getRandomChinese(length) {
    let chineseSymbol = " ";
    let i = 0;
    while(i < length) {
        chineseSymbol += await getSymbol();
      i++;
    }
    return console.log(chineseSymbol);
  }  
  getRandomChinese(4);
