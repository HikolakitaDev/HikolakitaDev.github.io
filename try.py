def shift(letter, hm):
    return chr((ord(letter) - ord('a') + hm) % 26 + ord('a'))
def ceasar_cipher(word, ind):
    return ''.join(shift(letter, ind) for letter in word)

print(ceasar_cipher("hello", ind=8)) 