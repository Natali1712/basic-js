const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  constructor(mode) {
    this.mode = mode || mode === undefined
  }

  encrypt(line, key) {
    if(!line || !key) throw new Error("Incorrect arguments!");
    line = line.toUpperCase().split('');
    key = key.toUpperCase().repeat(13).split('');
    
    for(let i =0;i<line.length;i++){
      if(this.alphabet.includes(line[i])){
       line[i] = this.alphabet[((this.alphabet.indexOf(line[i])+this.alphabet.indexOf(key[i]))%26)]
      }else{
        key.splice(i,0,' ')
      }
    }
    
    if(!this.mode) line.reverse();
    return line.join('');
  }

  decrypt(line, key) {
    if(!line || !key) throw new Error("Incorrect arguments!");
    let r = line.toUpperCase().split('');
    key = key.toUpperCase().repeat(13).split('');

    for(let i =0;i<r.length;i++){
      if(this.alphabet.includes(r[i])){
        r[i] = this.alphabet[(this.alphabet.indexOf(r[i])+26-this.alphabet.indexOf(key[i]))%26]
      }else{
        key.splice(i,0,' ')
      }
    }

    if(!this.mode) r.reverse();
    return r.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
