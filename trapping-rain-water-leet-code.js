/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (!height || height.length < 3) {
        return 0
    }
    let lowerEdge = 0
    let upperEdge = 0
    let area = 0
    for (let i = 0; i < height.length; i++) {
        if (isFalling(i, height)) {
            lowerEdge = i;
            if (lowerEdge == height.length - 2) {
                return area;
            }
            upperEdge = i;
            let upperEdgeHeight = 0;
            let lowerEdgeHeight = height[i];
            for (let m = lowerEdge + 1; m < height.length; m++) {
                if (isRising(m, height) && height[m + 1] >= lowerEdgeHeight) {
                    upperEdge = m + 1;
                    break;
                }
                if (isRising(m, height) && height[m + 1] < lowerEdgeHeight && height[m + 1] > upperEdgeHeight) {
                    upperEdgeHeight = height[m + 1]
                    upperEdge = m + 1;
                }
            }
            if (upperEdge > lowerEdge + 1 && upperEdge < height.length) {
                area = area + calulateWaterArea(lowerEdge, upperEdge, height);
                i = upperEdge - 1;
            }
        }
    }
    return area
};

function isFalling(i, arr) {
    return i < (arr.length - 1) && arr[i] > arr[i + 1]
}

function isRising(i, arr) {
    return i < (arr.length - 1) && arr[i] < arr[i + 1]
}

function calulateWaterArea(lower, upper, arr) {
    let count = 0;
    const edge = arr[lower] < arr[upper] ? arr[lower] : arr[upper]
    for (; lower <= upper; lower++) {
        if (edge - arr[lower] > 0) {
            count = count + edge - arr[lower]
        }
    }
    return count
}
