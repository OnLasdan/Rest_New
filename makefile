.PHONY: push format

push:
	@git add . && \
	read -p "Masukkan pesan commit: " commit_message; \
	git commit -m "$$commit_message" && \
	git push

format:
	@npx prettier --write $(git diff --name-only)
