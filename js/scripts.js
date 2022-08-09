
function convertCelToFar() {
  const cTemp = prompt("Enter Celsius");
  const far = (cTemp * 9/5 + 32);
  window.alert(far);
  return far;
}
convertCelToFar();

function convertFarToCel() {
  const fTemp = prompt("Enter Far");
  const cell = (fTemp - 32) * 5/9;
  window.alert(cell)
  return cell;
}
convertFarToCel();