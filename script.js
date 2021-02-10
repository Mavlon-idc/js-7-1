function vowels(str) {
    const vowel = 'аяоёуюэеыиАЯОЁУЮЭЕЫИ'
    let answer = 0 
for(let i = 0; i < str.length; i++){
    for(let x = 0; x < vowel.length; x++){
        if(str[i] === vowel[x]) {
            answer++
        }
    }
}
return answer
}