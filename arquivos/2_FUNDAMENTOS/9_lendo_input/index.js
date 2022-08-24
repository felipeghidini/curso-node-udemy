const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preferida? ', (language) => {
    if (language === 'HTML') {
        console.log('ISSO NEM É LINGUAGEM KKKK');
    } else {
        console.log(`A minha linguagem preferida é: ${language}`);
    }
    readline.close();
})