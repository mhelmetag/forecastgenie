(function() {
  let timeout;

  timeout = window.setTimeout(() => {
    if (document.querySelectorAll('sl-chart-loading').length <= 0) {
      const premiumMaskCssClass = '.sl-forecast-graphs-cta';

      const forecastCssClasses = [
        'sl-condition-day-summary__body',
        'sl-forecast-graphs__swell__day',
        'sl-forecast-graphs__wind__day',
        'sl-forecast-graphs__tide__day',
        'sl-forecast-graphs__weather__day',
      ];

      document.querySelector(premiumMaskCssClass).style.display = 'none';

      forecastCssClasses.forEach((cssClass) => {
        let blurredCssClass = `${cssClass}--blurred`;
        let blurredCssSelector = `.${blurredCssClass}`;

        document.querySelectorAll(blurredCssSelector).forEach((element) => {
          element.classList.add(cssClass);
          element.classList.remove(blurredCssClass);
        });
      });

      window.clearTimeout(timeout);
    }
  }, 5000);
})();
