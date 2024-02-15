export function validateAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let i = 0; i < str1.length; i++) {
        if (!frequencyCounter1[str1[i]]) {
            frequencyCounter1[str1[i]] = {};
            frequencyCounter1[str1[i]].positions = {}
        }
        frequencyCounter1[str1[i]].number = (frequencyCounter1[str1[i]].number || 0) + 1;
        frequencyCounter1[str1[i]].positions[i] = true
    }

      for (let i = 0; i < str2.length; i++) {
             if (!frequencyCounter2[str2[i]]) {
            frequencyCounter2[str2[i]] = {};
            frequencyCounter2[str2[i]].positions = {}
                 
        }
        frequencyCounter2[str2[i]].number = (frequencyCounter2[str2[i]].number || 0) + 1;
        frequencyCounter2[str2[i]].positions[i] = true
    }
    
    for (let item in frequencyCounter1) {
        if (!item in frequencyCounter2) {
            return false;
        }
        if (frequencyCounter1[item].number !== frequencyCounter2[item].number) {
            return false
        }
        
    }

    return true;

}
