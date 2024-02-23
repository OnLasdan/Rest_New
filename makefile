.PHONY: push

push:
	@read -p "Masukkan pesan commit: " commit_message; \
	git add . && git commit -am "$$commit_message" && git push

format:
	npx prettier --write $(git diff --name-only)
