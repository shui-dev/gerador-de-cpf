class ValidationCPF {
  constructor() {
    this.panel = document.querySelector('.panel');
    this.cpf = this.generateNum();
    this.validation1 = [ 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
    this.validation2 = [ 11, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
    this.validaOne = [];
    this.validaTwo = [];
    this.firstNumCPF = 0;
    this.secondNumCPF = 0;
  }

  start() {
    this.check();
  }
  check() {
    if(this.cpf.length >= 10 || this.cpf.length <= 8) {
      alert('número inválido.')
    } else {
      this.validationOne();
      this.validationTwo();
      this.formatterCpf();
    }
  }

  generateNum() {
    return String(Math.floor(Math.random() * 900000000) + 100000000);
  }

  validationOne() {
    for(let i = 0; i < this.validation1.length; i++) {
      this.validaOne.push(Number(this.cpf[i]) * this.validation1[i]);
    }
    const validaOne_r = this.validaOne.reduce((ac, value) => {
      return ac += value;
    })
    this.firstNumCPF = this.calc(validaOne_r);
    this.cpf += String(this.firstNumCPF);
  }
  validationTwo() {
    for(let i = 0; i < this.validation2.length; i++) {
      this.validaTwo.push(Number(this.cpf[i]) * this.validation2[i]);
    }
    const validaTwo_r = this.validaTwo.reduce((ac, value) => {
      return ac += value;
    })
    this.secondNumCPF = this.calc(validaTwo_r);
    this.cpf += String(this.secondNumCPF);;
  }
  formatterCpf() {
    let cpfNum;
    cpfNum = `${this.cpf[0]}${this.cpf[1]}${this.cpf[2]}.${this.cpf[3]}${this.cpf[4]}${this.cpf[5]}.${this.cpf[6]}${this.cpf[7]}${this.cpf[8]}-${this.cpf[9]}${this.cpf[10]}`
    this.panel.value = cpfNum;
  }

  calc(value) {
    let result = 11 - (value % 11);
    if(result >= 10) result = 0;
    return result;
  }
}

const cpf = new ValidationCPF();
cpf.start();

const generate = document.querySelector('.generate');
generate.onclick = () => {
  location.reload(true);
}

const btn_copy = document.querySelector('.copy');
btn_copy.addEventListener('click', () => {
  const panel = document.querySelector('.panel').value;
  navigator.clipboard.writeText(panel);
  setTimeout(() => {
    document.querySelector('#copyAlert').classList.add('copied');
  }, 0);
  setTimeout(() => {
    document.querySelector('#copyAlert').classList.remove('copied');
  }, 1500);
})
