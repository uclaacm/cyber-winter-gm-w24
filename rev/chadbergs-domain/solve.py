key = ''
with open('orig', 'rb') as orig, open('corrupted', 'rb') as corr:
	d1 = orig.read()
	d2 = corr.read()
	for i in range(len(d1)):
		b1, b2 = d1[i], d2[i]

		diff = b2 - b1
		key += chr(128 + diff) if diff < 0 else chr(diff)

print(key)