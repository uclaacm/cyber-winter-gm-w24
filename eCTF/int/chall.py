from Crypto.Cipher import AES
import os

key = b'j\xfe\xb1\xab/\xf7P\x0f\xa6p_\xd3\xdeq9\xc0'
flag = b'\xfa\x07\x82aG\xaci\x1c\x9d+`\x93eSR]\xe0\xf6\xf4\xf1T\x04|A\xea\xbd\xed\xa5\xad\x01;\x99'
cipher = AES.new(key, AES.MODE_ECB)

while True:
    todecrypt = input("What should I decrypt? Enter as hex: ")
    todecrypt = bytes.fromhex(todecrypt)
    if todecrypt == flag:
        print("I won't decrypt the flag silly, try again!")
    else:
        print(cipher.decrypt(todecrypt))
