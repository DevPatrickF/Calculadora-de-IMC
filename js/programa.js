const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;
        const heightInMeters = height / 100;

         
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

            const value = document.getElementById('value');
            let description = '';

        

            document.getElementById('infos')
            value.className = '';

            if (bmi < 18.5) {
                description = 'Cuidado! Você está abaixo do peso. Vamos ter uma alimentação melhor!'
                value.classList.add('magreza');
            } else if (bmi >= 18.5 && bmi <= 25) {
                description = 'Seu peso está normal. Parabéns, continue assim!'
                value.classList.add('normal');
            } else if (bmi > 25 && bmi <= 30) {
                description = 'Você está com sobrepeso. Considere fazer mais exercícios físicos.'
                value.classList.add('sobrepeso');
            } else if (bmi >30 && bmi <=35) {
                description = 'Você está obeso. Consulte um médico para obter orientação e fazer uma boa dieta.'
                value.classList.add('obeso');
            }
              else {
                    description = 'Cuidado! Você está em obesidade mórbida, procure um médico especialista.'
                    value.classList.add('obesidadeMorbida');
            }

            value.textContent = bmi.replace('.',',');
            document.getElementById('description').textContent = description;
            
        });