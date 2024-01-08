import random
import hashlib
from Crypto.Cipher import AES
from Crypto.Util.number import *

with open("flag.txt", "r") as f:
    flag = f.read().strip().encode()

p = 158891766505918903599867335638534689661517570505112975671609897210695826795114920110071353460165075199793102099239360798347095945732420827670160434976517523106872457419445202638164575955110055465462246004824891246511488900360158376469952323970033679513822112431117778792875859152904546332096212084066736320129
g = 2

private = random.randint(0, p-1)

ga = pow(g, private, p)

print("ga = ", ga)
pub = int(input("What's your public key bob? "))

priv = pow(pub, private, p)

sha = hashlib.sha1()

sha.update(long_to_bytes(priv))

key = sha.digest()[:16]

cipher = AES.new(key, AES.MODE_ECB)

print(cipher.encrypt(flag))
