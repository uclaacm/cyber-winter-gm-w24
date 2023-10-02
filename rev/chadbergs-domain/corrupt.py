message = 'REDACTED'

with open('orig', 'rb') as infile, open('corrupted', 'wb') as outfile:
	for i,byte in enumerate(infile.read()):
		new_char = (byte + ord(message[i % len(message)])) % 128
		outfile.write(chr(new_char).encode('ascii'))
		byte = infile.read(1)
