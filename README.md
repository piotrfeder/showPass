# showPass.js - jQuery plugin
Prosty plugin, który pozwala na pokazywanie hasła w inpucie password.

<h1><a href="http://piotrfeder.pl/plugins/showPass/index.html">Demo</a></h1>

<h4>Instrukcja</h4>
1. Dodaj do strony jQuery: <a href="https://jquery.com/">jquery.com</a> lub <a href="https://developers.google.com/speed/libraries/#jquery">Google.com</a>.
2. Dodaj do strony plik showPass.js
<script src="path/showPass.js"></script>
3. Jeżeli chcesz mieć podgląd hasła tylko w jednym polu używaj ID, natomiast gdy chcesz mieć podgląd w kliku polach używaj takiej samej klasy, dla każdego inputu.
4. Dodaj na stronie na której chcesz dać użytkownikowi możliwość podglądu hasła, bądź w pliku ze skryptami, oczywiście po funkcji $(document).ready... :

$('#id_inputu').showPass('.klasa_kliku');


