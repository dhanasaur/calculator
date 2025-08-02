let display = document.getElementById('display');
function appendValue(val) {
    if(display.value=='Error')
    {
        display.value="Clear before compute"
        return
    }
  display.value += val;
}
function clearDisplay() {
  display.value = '';
}
function calculate() {
  try {
    if(eval(display.value)!=Number(eval(display.value)))
        display.value='Error';
    if(eval(Number.isInteger(eval(display.value))))
        display.value = display.value+' = '+eval(display.value);
    else
        display.value = display.value+' = '+eval(display.value).toFixed(2);
  } catch (error) {
    display.value = 'Error';
  }
}
document.addEventListener('keydown', function(event) {
    let display = document.getElementById('display');
    const key = event.key;
    display.focus();
    if (key === '/') {
        event.preventDefault(); 
        display.focus();
        return;
    }
    if (document.activeElement !== display) event.preventDefault();

    if (/^[0-9.]$/.test(key)) {
        appendValue(key);
    }
    else if (/^[+\-*/]$/.test(key)) {
        appendValue(key);
    }
    else if (key === 'Enter' || key === '=') {
        if(display.value.includes('='))
        {     clearDisplay();
            return}

        calculate();
    }
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }
});

