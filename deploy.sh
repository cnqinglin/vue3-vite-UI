rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:cnqinglin/vue-ui-website.git
git push -f -u origin main &&
cd ../ 
echo https://cnqinglin.github.io/vue-ui-website/index.html