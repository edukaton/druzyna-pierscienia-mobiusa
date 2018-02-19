git checkout master
git push edukaton
ng build --prod --base-href "https://edukaton.github.io/druzyna-pierscienia-mobiusa/"
angular-cli-ghpages --repo=git@github.com:edukaton/druzyna-pierscienia-mobiusa.git
