all:
	pandoc -o rapport.pdf rapport.md

run: all
	xournal rapport.pdf
