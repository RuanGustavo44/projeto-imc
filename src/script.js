document.getElementById('imc-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      const resultado = document.getElementById('resultado');
  
      let classificacao = '';
  
      if (imc < 18.5) {
        classificacao = 'Magreza';
      } else if (imc < 24.9) {
        classificacao = 'Normal';
      } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imc < 39.9) {
        classificacao = 'Obesidade';
      } else {
        classificacao = 'Obesidade Grave';
      }
  
      resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}\n Sua clasificação é: (${classificacao})`; 
    } else {
      alert('Por favor, insira valores válidos!');
    }
  });
  