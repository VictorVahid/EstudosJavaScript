var nome = window.prompt("Qual é o seu nome?");
document.write(` Olá ${nome}  seu nome tem ${nome.length} letras <br/>`);
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()} <br/>`);
document.write(`Seu nome em minúsculo é ${nome.toLocaleLowerCase()}`);
