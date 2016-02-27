# showPass
Prosty plugin, który pozwala na pokazywanie hasła w inpucie password.

<h4>Instrukcja</h4>
1. Dodaj do strony jQuery: <a href="https://jquery.com/">jquery.com</a> lub <a href="https://developers.google.com/speed/libraries/#jquery">Google.com</a>.
2. Dodaj do strony plik showPass.js:
<script src="path/showPass.js"></script>
3. Dodaj na stronie na której chcesz dać użytkownikowi możliwość podglądu hasła, bądź w pliku ze skryptami:
<script>
$(document).ready(function() {

$('#id_inputu').showPass('.klasa_kliku');

});
</script>
