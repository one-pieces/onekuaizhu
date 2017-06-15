install:
	@npm install

ios: install
	@npm run ios

android: install
	@npm run android
