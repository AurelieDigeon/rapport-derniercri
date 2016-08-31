.PHONY: clean

all: draft

rapport:
	pandoc -o rapport.tex --no-highlight rapport.md

% : %.tex
	xelatex $(<)
	xelatex $(<)
	# bibtex $(@)
	xelatex $(<)

%.png : dot/%.dot
	dot -Tpng -o figures/$(@) $(<)

%.pdf : dot/%.dot
	dot -Tpdf -o figures/$(@) $(<)

clean:
	rm -rf *.aux
	rm -rf *.out
	rm -rf *.pdf
	rm -rf *.log
	rm -rf *.toc
	rm -rf *.blg
	rm -rf *.bbl
	rm -rf .latex
