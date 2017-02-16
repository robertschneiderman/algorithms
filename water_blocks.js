/* 
Your previous Plain Text content is preserved below:

This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you'd like to use for your interview,
simply choose it from the dropdown in the top bar.

You can also change the default language your pads are created with
in your account settings: https://coderpad.io/settings

Enjoy your interview!

[4, 3, 2, 1, 5]
         _
 _      | |
| |_    | |
| | |_  | |
| | | |_| |
| | | | | |

[4, 3, 6, 6, 5, 1, 5]

         _
        | |
 _      | |
| |_    | |
| | |_  | |
| | | |_| |
| | | | | |

*/


function findPeaks(arr) {
  let peaks = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i+1];
    
    if (i === 0 && current > next) {
      peaks.push(i);      
    }
    
    if (next >= current) {
      peaks.push(i+1);
    }
    
  }
  return peaks;
}

const waterBlocks = arr => {
  let waterBlocks = 0;
  let peaks = findPeaks(arr);
  
  for (let i = 0; i < arr.length - 1; i++) {
    let currentPeakIdx = peaks[i];
    let nextPeakIdx = peaks[i+1];
    let peak1 = arr[currentPeakIdx];
    let peak2 = arr[nextPeakIdx];
    
    let smallerPeak = (peak1 > peak2) ? peak2 : peak1;
    
    for (let j = currentPeakIdx + 1; j < nextPeakIdx; j++) {
      waterBlocks += (smallerPeak - arr[j]);
    }
    
  }
  return waterBlocks;
};


let result = waterBlocks([4, 3, 2, 1, 5]);

console.log('result: ', result);