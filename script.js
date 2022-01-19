
        /* Função para agrupar os números da calculadora; 
        ex: agrupa 520 ao em vez de limpar o visor e apenas mostrar o ultimo número inserido */
        function insert(num){
            var numero = document.getElementById('resultado').innerHTML; //atribui o 'resultado' na variável numero
            document.getElementById('resultado').innerHTML = numero + num; //atribui o numero + os num do teclado no resultado
        }
 
        // Função para limpar todos os números inseridos
        function clean(){
            document.getElementById('resultado').innerHTML = "";
        }
 
        // Função para limpar apenas o último número inserido
         function back(){
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) //desde o início da string, onde é indicado por zero, ele vai pegar a variável resultado e subtrair o último número dessa string eliminando-o.
        }
 
        // Função dos calculos da calculadora
        function calcular(){
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado){
                document.getElementById('resultado').innerHTML = eval(resultado)
            }
        }
     