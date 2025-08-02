let display = document.getElementById('display');

function appendValue(val) {
    if(display.value=='Error')
    {
        display.value="Please click clear before calculating again"
    }
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
    if(display.value!=Number(display.value))
        display.value='Error';
  } catch (error) {
    display.value = 'Error';
  }
}
