var Pi = function () {
  this.sampleSize = 10000; // sample size
  this.draftingTime = 100; // times to draft samples.
  this.z = 1.96; // 95% confidence interval with known standard diviation
};

Pi.prototype.getDis = function (points) {
  let x = points[0];
  let y = points[1];
  return (x - 0.5) * (x - 0.5) + (y - 0.5) * (y - 0.5);
}
Pi.prototype.getSample = function (sample, sampleSize, numInCircle) {
  let drafted = {}; /// to avoid duplicate points
  let n = this.sampleSize;
  while (n > 0) {
    let x = Math.random();
    let y = Math.random();
    if (!drafted.hasOwnProperty(x + '_' + y)) {
      sample.push([x, y]);
      if (this.getDis([x, y]) <= 0.25) {
        numInCircle.count++;
      }
      drafted[x + '_' + y] = true;
      n--;
    }
  }
}
Pi.prototype.getSD = function (nums, mean) {
  let sum = 0;
  nums.forEach(item => {
    sum += Math.pow((item - mean), 2);
  })
  return Math.sqrt(sum / nums.length);
}

Pi.prototype.getPi = function () {
  let res = [];
  let m = this.draftingTime;
  while (m > 0) {
    let sample = [];
    let numInCircle = {};
    numInCircle.count = 0;
    this.getSample(sample, this.sampleSize, numInCircle);
    circleArea = numInCircle.count / this.sampleSize; // the number of points that falling within the circle
    let pi = circleArea / 0.25; // area = pi * r^2
    res.push(pi);
    m--;
  }
  res.sort((a, b) => {
    return a - b;
  })
  let median = (res[(res.length / 2)] + res[(res.length / 2) - 1]) / 2; // assuming drafting times are always even
  let mean = res.reduce((a, b) => {
    return a + b;
  }, 0) / res.length;
  let s = this.getSD(res, mean);
  let distance = this.z * s / Math.sqrt(res.length); // calculate the intervals
  let lowerBound = mean - distance;
  let upperBound = mean + distance;

  console.log(`we are 95% confident that the true value of the population is between ${lowerBound} and ${upperBound}.`);
  console.log('Median： ', median);
  console.log('Mean： ', mean);
}

var pi = new Pi();
pi.getPi();
