class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const pairs = {
            ')':'(',
            ']':'[',
            '}':'{'
        }
        let stack = []
        for(let char of s){
            if('{[('.includes(char)){
                stack.push(char)
            }else {
                if(stack.length===0 || stack[stack.length-1]!==pairs[char]){
                    return false
                }
                stack.pop()
            }
        }
        return stack.length === 0
    }
}
