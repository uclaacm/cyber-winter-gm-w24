#!/usr/bin/env python3

"""
Literate programming is a software development paradigm introduced by Donald Knu
th in the late 1970s. The main idea behind literate programming is to treat a pr
ogram as a piece of literature, where the code is written in a human-readable ma
nner, emphasizing the understanding of the program's logic and functionality.
"""


def a():
    """
    In literate programming, a program is not just a set of instructions for a compu
    ter but also a document that explains the rationale behind each design decision
    and the overall structure of the code. The emphasis is on clarity and comprehens
    ibility for both humans and machines.
    """
    pass


b = {}

c = []

d = ()

e = 1


def f():
    """
    The central concept in literate programming is the "literate program," which com
    bines code and documentation seamlessly. The document is written in a natural la
    nguage, often English, and includes explanations, comments, and annotations alon
    g with the source code. The literate programming tools then extract the code fro
    m the document and process it for execution by a computer.
    """
    pass


def g():
    """
        One of the most well-known tools for literate programming is Knuth's own system
    called WEB. In a literate program written in WEB, the document is processed to p
    roduce both a human-readable document (usually in a printed or electronic format
    ) and a compilable source code file.
    """
    return g.__doc__


def q():
    """
    Literate programming can help in creating more maintainable and understandable c
    ode by encouraging programmers to think through the design and logic of their co
    de while documenting it in a coherent manner. However, it hasn't become as wides
    pread as some other programming methodologies, and traditional code comments and
    documentation remain more commonly used in practice.
    """
    pass


import random, inspect

flag = "cyber{apparently_microsoft_will_hire_people_using_this_asldoijeqlknaspoakj}"
options = [
    __doc__,
    a.__doc__,
    b.__doc__,
    c.__doc__,
    d.__doc__,
    f.__doc__,
    g.__doc__,
    q.__doc__,
]

for i, c in enumerate(flag):
    choice = random.randint(0, len(options) - 1)
    try:
        idx = options[choice].index(c)
    except ValueError:
        print(f'if flag[{i}] != "{c}": correct = False; return')
        continue
    if choice == 0:
        print(f"if flag[{i}] != __doc__[{idx}]: correct = False; return")
    elif choice == 1:
        print(f"if flag[{i}] != a.__doc__[{idx}]: correct = False; return")
    elif choice == 2:
        print(f"if flag[{i}] != b.__doc__[{idx}]: correct = False; return")
    elif choice == 3:
        print(f"if flag[{i}] != c.__doc__[{idx}]: correct = False; return")
    elif choice == 4:
        print(f"if flag[{i}] != d.__doc__[{idx}]: correct = False; return")
    elif choice == 5:
        print(f"if flag[{i}] != f.__doc__[{idx}]: correct = False; return")
    elif choice == 6:
        print(f"if flag[{i}] != g.__doc__[{idx}]: correct = False; return")
    elif choice == 7:
        print(f"if flag[{i}] != q.__doc__[{idx}]: correct = False; return")
    else:
        print("Something went wrong")
