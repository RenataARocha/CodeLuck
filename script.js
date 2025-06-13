
    function sortear() {
      const logo = document.getElementById('logo');
      const min = parseInt(document.getElementById('min').value);
      const max = parseInt(document.getElementById('max').value);
      const resultadoEl = document.getElementById('resultado');

      // Gira a logo (efeito roleta)
      logo.classList.remove('animate-roleta');
      void logo.offsetWidth; // reinicia animação
      logo.classList.add('animate-roleta');

      // Validação dos números
      if (isNaN(min) || isNaN(max) || min >= max) {
        resultadoEl.textContent = "Valores inválidos!";
        resultadoEl.classList.remove('hidden', 'text-green-400');
        resultadoEl.classList.add('text-red-500');
        return;
      }

      // Sorteio com suspense
      setTimeout(() => {
        const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        resultadoEl.textContent = `🎉  ${numeroSorteado}  🎉`;
        resultadoEl.classList.remove('hidden', 'text-red-500');
        resultadoEl.classList.add('text-green-400', 'scale-125');

        setTimeout(() => {
          resultadoEl.classList.remove('scale-125');
        }, 1500);
      }, 2000); // tempo da rotação
    }
 