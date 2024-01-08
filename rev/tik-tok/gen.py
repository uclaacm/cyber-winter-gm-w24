#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import random

random.seed(0x1337)

flag = "cyber{tik_tok_on_the_clock_but_the_party_dont_stop}"

output = []

for i, c in enumerate(flag):
    output.append("ord(flag[" + str(i) + "]) == " + str(ord(c)))

random.shuffle(output)

print(" and ".join(output))