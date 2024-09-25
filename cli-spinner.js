const Spinner = require("cli-spinner").Spinner;
Spinner.setDefaultSpinnerString(1);
// Spinner.setDefaultSpinnerString("|/-\\");

const productionSpinner = new Spinner();
productionSpinner.setSpinnerTitle("Test Spinner..");
productionSpinner.start();
setTimeout(() => {
  productionSpinner.stop();
}, 2000);
